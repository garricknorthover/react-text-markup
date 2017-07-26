import React, {Component} from 'react';
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
      <div className="container">
<div className="row">
<div className="col"><textarea value={value} onChange={this.handleChange} /></div>
<div className="col"><MarkIt value={value} /></div>
</div>
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
        <div dangerouslySetInnerHTML={outValueHTML} />
    )
  }

}

class App extends Component {




  render() {
    return (
      <div className="App">
        <TypeInText />

      </div>
    );
  }
}

export default App;
