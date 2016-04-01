/**
 * Author: VincentBel
 * Date: 16/4/1
 */
import React, { PropTypes } from 'react'
import groupBy from 'lodash.groupby'

import Department from '../department/Department'
import './style.css'

/**
 * department list
 */

const DepartmentList = ({ positions, toggleSelectPositions, positionsSelectedStatus }) => {
  const departments = groupBy(positions, position => position.department)
  return (
    <ul className="department-list">
      {Object.keys(departments).map((departmentName, index) => (
        <Department
          key={index}
          title={departmentName}
          positions={departments[departmentName]}
          toggleSelectPositions={toggleSelectPositions}
          positionsSelectedStatus={positionsSelectedStatus}
        />
      ))}
    </ul>
  )
}

DepartmentList.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
  toggleSelectPositions: PropTypes.func,
  positionsSelectedStatus: PropTypes.object.isRequired,
}

DepartmentList.defaultProps = {}

export default DepartmentList
