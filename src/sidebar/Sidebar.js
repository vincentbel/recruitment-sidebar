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

  render() {
    return (
      <div className="sidebar">
        <Header />
        <DepartmentList positions={this.props.positions} />
      </div>
    )
  }
}
