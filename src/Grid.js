import React, { Component } from 'react';
import logo from './logo.svg';
import './Grid.css';


class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRows : 4,
      numberOfColumns : 2
    }
  }
  render() {
  const rows = Array.apply(null, {length: this.state.numberOfRows}).map(Number.call, Number)
  const columns = Array.apply(null, {length: this.state.numberOfColumns}).map(Number.call, Number)
    return (
    <div className='grid'>
      {rows.map(function(i) {
        return(
          <div key={`row-${i}`} className='grid-row'>
            {columns.map(function(j) {
              return(
                <div key={`square-${j}`} className='grid-square'/>
              )
            })}
          </div>
        )
      }
    )
  }
    </div>
  )}
}

export default Grid;
