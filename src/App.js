import React, {Component} from 'react';
import './App.css';

class TypeInText extends Component {

  state = {
    value: 'This text is #bold#'
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render() {

    const {value} = this.state

    return (
      <div>

<textarea value={value} onChange={this.handleChange} className="In"/>
<div><MarkIt value={value} /></div>

      </div>
    );
  }
}

class MarkIt extends Component {



  render() {
    const outValue = this
      .props
      .value
      .replace(/#(.*?)#/ig, '<b>$1</b>')



    const outValueHTML = {__html: outValue}

    return (
          // <div>{outValue}</div>
        <div dangerouslySetInnerHTML={outValueHTML}  className="Marked" />
    )
  }

}

class Welcome extends Component {
  render(){
    return (
      <div>
      <div className="App-header">
        <h1>Simple Mark Up Tool</h1>
      </div>
      <div className="App-intro">
        <a href="https://github.com/garricknorthover/react-text-markup">https://github.com/garricknorthover/react-text-markup</a>
      </div>
      </div>
    );
  }
}

class App extends Component {




  render() {
    return (
      <div className="App">
        <Welcome />
        <TypeInText />

      </div>
    );
  }
}

export default App;
