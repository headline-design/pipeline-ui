import React, { Component } from 'react'
import Checkbox from '../Checkbox'
import Pipeline from '../Pipeline'

class SwitchNet extends Component {
  constructor(props) {
    super(props)
    this.state = { main: true }
  }

  handleCheckChange = () => {
    this.setState(
      { main: !this.state.main },
      () => (Pipeline.main = this.state.main)
    )
  }

  render() {
    return (
      <Checkbox
        label="MainNet"
        required={true}
        checked={this.state.main}
        onChange={this.handleCheckChange}
      />
    )
  }
}

export default SwitchNet
