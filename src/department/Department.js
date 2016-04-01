/**
 * Author: VincentBel
 * Date: 16/4/1
 */

import React, { PropTypes } from 'react'

import Position from '../position/Position'
import './style.css'

/**
 * department detail
 */

const Department = ({ title, positions }) => {
  const totalCount = positions.reduce((pre, cur) => pre + cur.count, 0)
  return (
    <li className="department clearfix">
      <div className="department-header clearfix">
        <input type="checkbox" className="department-checkbox"/>
        <h3 className="department-title">{title}</h3>
        <div className="department-total-count">{totalCount}</div>
      </div>
      <ul className="position-list clearfix">
        {positions.map(({ id, name, count }, index) => (
          <Position key={index} id={id} name={name} count={count} />
        ))}
      </ul>
    </li>
  )
}

Department.propTypes = {
  title: PropTypes.string.isRequired,
  positions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
}

Department.defaultProps = {}

export default Department
