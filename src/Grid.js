import React, { Component } from 'react';
import logo from './logo.svg';
import './Grid.css';


class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRows : 15,
      numberOfColumns : 20
    }
  }
  const rows = Array.apply(null, {length: this.state.numberOfRows}).map(Number.call, Number)
  const squares = Array.apply(null, {length: this.state.numberOfColumns}).map(Number.call, Number)
  render() {
    return (
    <div className='grid'>
      {rows.map(function(i) {
        return(
          <div key={`row-${i}`} className='grid-row'>
            {squares.map(function(j) {
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
