import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      job: ''
    }

    this.state = this.initialState
  }
  /**
   * @desc - 输入框变化事件
   */
  handleChange = event => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }
  /**
   * @desc - 表单提交
   */
  submitForm = event => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const {name, job} = this.state

    return (
      <form>
        <label>Name</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <label>Job</label>
        <input 
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <button type="button" onClick={this.submitForm}>submit</button>
      </form>
    )
  }
}

export default Form