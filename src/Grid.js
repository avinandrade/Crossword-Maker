import React, { Component } from 'react';
import logo from './logo.svg';
import './Grid.css';


class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRows : 15,
      numberOfColumns : 15
    }
  }
  render() {
  const rows = Array.apply(null, {length: this.state.numberOfRows}).map(Number.call, Number)
  const squares = Array.apply(null, {length: this.state.numberOfColumns}).map(Number.call, Number)
    return (
    <div className='grid'>
      {rows.map(function(i) {
        return(
          <div key={`row-${i}`} className='grid-row'>
            {squares.map(function(j) {
              return(
                <div key={`square-${j}`} className='grid-square'>
                  {[i].map(function(i) {
                    if (i == 1){
                    return(
                      <div className='clue-number'>
                          {'hi'}
                      </div>
                      )
                    }
                    })}
                </div>
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
