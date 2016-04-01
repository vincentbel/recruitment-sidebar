/**
 * Author: VincentBel
 * Date: 16/4/1
 */

import React from 'react'
import ReactDOM from 'react-dom'

import Sidebar from './sidebar/Sidebar'

// the mock data
const recruitmentPositions = [
  { id: 'ea21321', name: 'Mac 开发工程师', department: '工程研发部门', count: 9 },
  { id: 'ea21322', name: 'iOS App 测试工程师', department: '工程研发部门', count: 17 },
  { id: 'ea21323', name: 'Android 远程控制工程师', department: '工程研发部门', count: 61 },
  { id: 'ea21324', name: 'Web 前端工程师', department: '工程研发部门', count: 31 },
  { id: 'ea21325', name: 'Android 多媒体软件开发工程师', department: '工程研发部门', count: 2 },
  { id: 'ea21326', name: '网页设计师', department: '产品设计部门', count: 47 },
  { id: 'ea21327', name: 'ID / 工业设计师', department: '产品设计部门', count: 39 },
  { id: 'ea21328', name: '视觉设计师 / GUI 界面设计师', department: '产品设计部门', count: 42 },
  { id: 'ea21329', name: '平面设计师', department: '产品设计部门', count: 8 },
]

ReactDOM.render(<Sidebar positions={recruitmentPositions} />, document.getElementById('root'))
