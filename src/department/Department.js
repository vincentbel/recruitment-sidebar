/**
 * Author: VincentBel
 * Date: 16/4/1
 */

import React, { PropTypes, Component } from 'react'

import Position from '../position/Position'
import './style.css'

/**
 * department detail
 */
export default class Department extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    positions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })).isRequired,
    toggleSelectPositions: PropTypes.func,
    positionsSelectedStatus: PropTypes.object,
  };

  constructor(props) {
    super(props)
    this._handleToggleSelectPosition = this._handleToggleSelectPosition.bind(this)
    this._handleToggleSelectAllPositions = this._handleToggleSelectAllPositions.bind(this)
    this._isAllPositionSelected = this._isAllPositionSelected.bind(this)
    this._getAllPositionsSelectedStatusAs = this._getAllPositionsSelectedStatusAs.bind(this)
  }

  _handleToggleSelectPosition(positionId, selected) {
    if (this.props.toggleSelectPositions) {
      this.props.toggleSelectPositions({
        [positionId]: selected,
      })
    }
  }

  _handleToggleSelectAllPositions() {
    if (this.props.toggleSelectPositions) {
      if (this._isAllPositionSelected()) {
        this.props.toggleSelectPositions(this._getAllPositionsSelectedStatusAs(false))
      } else {
        this.props.toggleSelectPositions(this._getAllPositionsSelectedStatusAs(true))
      }
    }
  }

  /**
   * 根据当前部门的所有职位的将状态全部设为已经选择了(selected === true) 或者全部设为未选择了(selected === false)
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

  /**
   * 判断当前部门所有职位是否全部处在选择状态
   * @returns {Boolean} 当前部门所有职位是否全部处在选择状态
   * @private
   */
  _isAllPositionSelected() {
    const { positions, positionsSelectedStatus } = this.props
    return positions.every(position => positionsSelectedStatus[position.id])
  }

  render() {
    const { title, positions, positionsSelectedStatus } = this.props
    const totalCount = positions.reduce((pre, cur) => pre + cur.count, 0)
    const allSelected = this._isAllPositionSelected()
    return (
      <li className="department clearfix">
        <div className="department-header clearfix">
          <input
            type="checkbox"
            className="department-checkbox"
            checked={allSelected}
            onChange={this._handleToggleSelectAllPositions}
          />
          <h3 className="department-title">{title}</h3>
          <div className="department-total-count">{totalCount}</div>
        </div>
        <ul className="position-list clearfix">
          {positions.map(({ id, name, count }, index) => (
            <Position
              key={index}
              id={id}
              name={name}
              count={count}
              selected={positionsSelectedStatus[id]}
              toggleSelect={this._handleToggleSelectPosition}
            />
          ))}
        </ul>
      </li>
    )
  }
}
