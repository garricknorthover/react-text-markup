import React, {Component} from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class TypeInText extends Component {

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render() {

    const {value} = this.state

    return (
      <div>
        
          <textarea value={value} onChange={this.handleChange}/>
          <div className="display-linebreak col">
          <MarkIt value={value}/>
        </div >
      </div>
    )
  }
}

class MarkIt extends Component {

  render() {

    const outValue = this
      .props
      .value
      .replace(/#(.\S+)#/ig, '<b>$1</b>')

    const outValueHTML = {__html: outValue} 

    return (
        <div dangerouslySetInnerHTML={outValueHTML} />     
    )
  }

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <TypeInText/>
      </div>
    );
  }
}

export default App;
