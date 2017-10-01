import React, { Component } from 'react';
import './Grid.css';

const ClueNumber = (props) => {
    if (props.hasClueNumber) {
      return(
        <div className='clue-number' >
          { props.clueNumber }
        </div>
      )
    }
    return null
  }

const Row = (props) => {
  return (
    <div className='grid-row'>
      {props.row.map((square, index) =>
        <GridSquare
        square={square}
        rowIndex={props.rowIndex}
        columnIndex={index}
        parentGrid={props.parentGrid}
        key={`column-${index}`}
        />
      )}
    </div>
  )
}

const GridSquare = (props) => {
  return(
      <div
        className='grid-column'
        style={{backgroundColor:props.square.color}}
        onClick={() => props.parentGrid.handleClick(props.rowIndex, props.columnIndex)}
        >
         <ClueNumber
          hasClueNumber={props.square.hasClueNumber}
          clueNumber={props.square.clueNumber}
          />
      </div>
  )
}

class Grid extends Component {

  createRenderGrid(grid) {
    let result = Array()
    let currentClueNumber = 1
    grid.forEach(function(row, rowIndex) {
      let renderRow = Array()
      row.forEach(function(square, columnIndex) {
        let squareHasClueNumber = this.hasClueNumber(rowIndex, columnIndex)
        renderRow.push({
          color: square == 1 ? 'white' : 'black',
          hasClueNumber: squareHasClueNumber,
          clueNumber: squareHasClueNumber ? currentClueNumber++ : null
        })
      }, this)
      result.push(renderRow)
    }, this)
    return result
  }

  handleClick(row, column) {
    this.props.onClick(row, column)
  }

  hasClueNumber(row, column) {
    const grid = this.props.grid
    if (grid[row][column] == 1) {  // Is square white?
      if (row == 0 ||  // Is square in top row?
        column == 0 ||  // Is square in first column?
        grid[row - 1][column] == 0 ||  // Is the square above black?
        grid[row][column - 1] == 0) {  // Is the square to the left black?
          return true
        }
    }
    return false
  }

  render() {
    const renderGrid = this.createRenderGrid(this.props.grid)
    return (
      <div className='grid'>
        {renderGrid.map((row, index) =>
         <Row
         key={`row-${index}`}
         rowIndex={index}
         parentGrid={this}
         row={row}
         />
        )}
      </div>
    )
  }
}

export default Grid;
