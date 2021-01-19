import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {


  genRow = (vals) => {
    return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
    return vals.map(val => <Cell value={val} />)
  }


  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }


  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }


}
Matrix.defaultProps = {
  values: (() => {
const board = Array(10).fill(0).map(row => new Array(10).fill('#F00'))
return board
  })()
}
