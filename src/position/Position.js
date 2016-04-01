/**
 * Author: VincentBel
 * Date: 16/4/1
 */

import React, { PropTypes, Component } from 'react'
import './style.css'

/**
 * recruitment position detail
 */

export default class Position extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    toggleSelect: PropTypes.func,
  };

  constructor(props) {
    super(props)
    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange() {
    if (this.props.toggleSelect) {
      this.props.toggleSelect(this.props.id, this.refs.positionCheckbox.checked)
    }
  }

  render() {
    const { selected, name, count } = this.props
    return (
      <li className="position clearfix">
        <input
          className="position-checkbox"
          type="checkbox"
          ref="positionCheckbox"
          checked={selected}
          onChange={this._handleChange}
        />
        <div className="position-title">{name}</div>
        <div className="position-count">{count}</div>
      </li>
    )
  }
}
