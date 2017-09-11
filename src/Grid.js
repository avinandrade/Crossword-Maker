import React, { Component } from 'react';
import './Grid.css';


class Grid extends Component {

  handleClick(row, column) {
    this.props.onClick(row, column)
  }

  render() {
    const y = this
    return (
    <div className='grid'>
      {this.props.grid.map(function(row, i) {
        return(
          <div key={`row-${i}`} className='grid-row'>
            {row.map(function(column, j) {
              const color = column==0 ? 'black' : 'white'
              return(
                <div
                  key={`column-${j}`}
                  className='grid-column'
                  style={{backgroundColor:color}}
                  onClick={() => y.handleClick(i, j)}
                  >
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
