/**
 * Author: VincentBel
 * Date: 16/4/1
 */

import React, { PropTypes } from 'react'

import './style.css'

/**
 * recruitment sidebar header
 */

const Header = ({ onClickClearAll }) => (
  <div className="header clearfix">
    <h2 className="header-title">招聘职位</h2>
    <button className="clear-button" onClick={onClickClearAll}>清空</button>
  </div>
)

Header.propTypes = {
  onClickClearAll: PropTypes.func,
}

export default Header
