import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';
import InputForm from './InputForm';


class App extends Component {
  constructor(props) {
    super(props);
    const numberOfRows = 10
    const numberOfColumns = 5
    const grid = this.updateGrid(numberOfRows, numberOfColumns)
    this.state = {
      numberOfRows : numberOfRows,
      numberOfColumns : numberOfColumns,
      grid : grid
    }
  }

  handleRowChange(i) {
    const grid = this.updateGrid(i, this.state.numberOfColumns)
    this.setState({
      grid: grid,
      numberOfRows: i});

  }

  handleColumnChange(i) {
    const grid = this.updateGrid(this.state.numberOfRows, i)
    this.setState({
      grid: grid,
      numberOfColumns: i});

  }

  handleOnClick(i, j) {
    const grid = this.state.grid.slice()
    console.log(grid)

    var nextValue = grid[i][j]
    if (nextValue == 1) {
      nextValue = 0
    } else {
      nextValue = 1
    }
    grid[i][j] = nextValue
    this.setState({grid: grid});
  }

  updateGrid(rows, columns) {
    const grid =  Array.apply(null, Array(rows)).map(
      function (x, i) {
        console.log(x)
        return Array.apply(null, Array(columns))
      }
    )
    return grid
  }

  render() {
    return (
      <center>
      <InputForm
        labelName="Rows"
        onChange={(x) => this.handleRowChange(x)}
        value={this.state.numberOfRows} />
      <InputForm
        labelName="Columns"
        onChange={(x) => this.handleColumnChange(x)}
        value={this.state.numberOfColumns}/>
      <Grid
        grid={this.state.grid}
        onClick={(x, y) => this.handleOnClick(x, y)}/>
      </center>
    );
  }
}

export default App;
