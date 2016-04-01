/**
 * Author: VincentBel
 * Date: 16/4/1
 */
import React, { PropTypes, Component } from 'react'

import Header from '../header/Header'
import DepartmentList from '../department-list/DepartmentList'
import './style.css'

/**
 * the root element: sidebar
 */
export default class Sidebar extends Component {

  static propTypes = {
    positions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })).isRequired,
  }

  constructor(props) {
    super(props)

    // 初始时将所有职位设置为[未选择]状态
    const initialPositionsSelectedStatus = {}
    props.positions.forEach(position => {
      initialPositionsSelectedStatus[position.id] = false
    })

    // state 中使用一个对象存储所有职位的选择状态,
    // field 是职位id, 其值为该职位的选择状态(true 表示处在选择状态, false 表示处在未选择状态)
    this.state = {
      positionsSelectedStatus: initialPositionsSelectedStatus,
    }
    this._handleToggleSelectPositions = this._handleToggleSelectPositions.bind(this)
  }

  _handleToggleSelectPositions(positionsSelectedStatus) {
    this.setState({
      positionsSelectedStatus:
        Object.assign({}, this.state.positionsSelectedStatus, positionsSelectedStatus),
    })
  }

  render() {
    return (
      <div className="sidebar">
        <Header />
        <DepartmentList
          positions={this.props.positions}
          positionsSelectedStatus={this.state.positionsSelectedStatus}
          toggleSelectPositions={this._handleToggleSelectPositions}
        />
      </div>
    )
  }
}
