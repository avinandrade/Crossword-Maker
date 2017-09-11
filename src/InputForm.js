import React, { Component } from 'react';


class InputForm extends Component {
  handleChange(event) {
    this.props.onChange(parseInt(event.target.value))
  }

  render() {
    return (
      <form>
        <label>
          {this.props.labelName}:
          <input
            type="number"
            value={this.props.value}
            onChange={(event) => this.handleChange(event)} />
        </label>
      </form>
    );
  }
}

export default InputForm;