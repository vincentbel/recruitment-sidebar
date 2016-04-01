/**
 * Author: VincentBel
 * Date: 16/4/1
 */

import React, { PropTypes } from 'react'

import './style.css'

/**
 * recruitment position detail
 */

const Position = ({ id, name, count }) => {
  return (
    <li className="position clearfix">
      <input className="position-checkbox" type="checkbox" />
      <div className="position-title">{name}</div>
      <div className="position-count">{count}</div>
    </li>
  )
}

Position.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}

Position.defaultProps = {}

export default Position
