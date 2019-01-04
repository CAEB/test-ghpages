import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characterData: [],
    data: []
  }
  /**
   * @desc - 获取wiki数据
   */
  componentDidMount() {
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*"

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        })
      })
  }
  /**
   * @desc - 根据index 删除角色数据
   */
  removeCharacter = index => {
    const { characterData } = this.state

    this.setState({
      characterData: characterData.filter((character, i) => i !== index)
    })
  }
  /**
   * @desc - 添加角色信息
   */
  handleSubmit = character => {
    this.setState({
      characterData: [...this.state.characterData, character]
    })
  }

  render() {
    const { characterData, data } = this.state
    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })
    return (
      <div className="App">
        <Table 
          characterData={characterData}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
        <ul>{result}</ul>
      </div>
    )
  }
}

export default App