import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { generate } from "./Pdf"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={generate}>Generate PDF</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
