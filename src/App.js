import React, {Component} from 'react';
import './App.css';



class TypeInText extends Component { // this is where you type in the text
  //which triggers the onChange function which was passed down as a prop

  render() {

    return (

      <div>

<textarea value={this.props.value} onChange={this.props.onChange} />

      </div>
    );
  }
}



class MarkIt extends Component {// any changes in the value state are reflected here
  // and passed through a regular expression  .replace(/#(.*?)#/ig, '<b>$1</b>')
  // the resulting value is then passed to jsx through the dangerouslySetInnerHTML method

  render() {

    const value = this
      .props
      .value
      .replace(/#(.*?)#/ig, '<b>$1</b>')

    const returnedHtml = {__html: value}

    return (

        <div dangerouslySetInnerHTML={returnedHtml}  className="Marked" />
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

  state = {
    value: 'This text is #bold#'
  }

  handleChange = (e) => {  // this function is passed around as a prop to the child components
    this.setState({value: e.target.value})
  }



  render() {
    return (
      <div className="App">

        <Welcome />
        <TypeInText value={this.state.value} onChange={this.handleChange} />
        <MarkIt value={this.state.value} />

      </div>
    );
  }
}



export default App;
