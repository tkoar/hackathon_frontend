import React, { Component } from 'react';
import GridRow from './GridRow'

class Matrix extends Component {

  state = {
    rows: [1,2,3,4,5,6,7,8,9,10],
    cells: [1,2,3,4,5,6,7,8,9,10]
  }

  componentDidMount() {
    let arr = Array.apply(null, Array(500)).map((el, idx) => idx)
    this.setState({ rows: arr, cells: arr })
  }

  makeRows = () => this.state.rows.map((cell, idx) => <GridRow key={idx} row={idx} cells={this.state.cells}/>)

  render() {
    return (
      <div className="matrix">
        {this.makeRows()}
      </div>
    );
  }
}

export default Matrix;
