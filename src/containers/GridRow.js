import React, { Component } from 'react';
import GridCell from '../components/GridCell'

class GridRow extends Component {

  makeCells = () => this.props.cells.map((cell, idx) => <GridCell key={idx} col={idx}/> )

  render() {
    return (
      <div className='gridRow'>
        {this.makeCells()}
      </div>
    );
  }
}

export default GridRow;
