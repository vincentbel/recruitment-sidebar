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

    this._getAllPositionsSelectedStatusAs = this._getAllPositionsSelectedStatusAs.bind(this)
    this._handleToggleSelectPositions = this._handleToggleSelectPositions.bind(this)
    this._handleClearAll = this._handleClearAll.bind(this)

    // state 中使用一个对象存储所有职位的选择状态,
    // field 是职位id, 其值为该职位的选择状态(true 表示处在选择状态, false 表示处在未选择状态)
    // 初始时将所有职位设置为[未选择]状态
    this.state = {
      positionsSelectedStatus: this._getAllPositionsSelectedStatusAs(false),
    }
  }

  /**
   * 将所有职位的状态全部设为已经选择了(selected === true) 或者全部设为未选择了(selected === false)
   * @param {Boolean} selected 全部设置的状态: 选择或未选择
   * @returns {Object} 设置后的职位状态
   * @private
   */
  _getAllPositionsSelectedStatusAs(selected) {
    const newPositionsSelectedStatus = {}
    this.props.positions.forEach(position => {
      newPositionsSelectedStatus[position.id] = selected
    })
    return newPositionsSelectedStatus
  }

  _handleToggleSelectPositions(positionsSelectedStatus) {
    this.setState({
      positionsSelectedStatus:
        Object.assign({}, this.state.positionsSelectedStatus, positionsSelectedStatus),
    })
  }

  _handleClearAll() {
    this.setState({ positionsSelectedStatus: this._getAllPositionsSelectedStatusAs(false) })
  }

  render() {
    return (
      <div className="sidebar">
        <Header onClickClearAll={this._handleClearAll} />
        <DepartmentList
          positions={this.props.positions}
          positionsSelectedStatus={this.state.positionsSelectedStatus}
          toggleSelectPositions={this._handleToggleSelectPositions}
        />
      </div>
    )
  }
}
