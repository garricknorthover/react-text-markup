This is my second attempt at making a simple mark up app with React.

On the first iteration, I had the MarkIt component be a child component of the TypeInText component where the latter held the state.

Now after reading and reading more, I have it closer to best practices by having these 2 components be siblings and the state is now kept in their common parent component.



```javascript
import React, {Component} from 'react';
import './App.css';



class TypeInText extends Component {

  render() {

    return (

      <div>

<textarea value={this.props.value} onChange={this.props.onChange} />

      </div>
    );
  }
}



class MarkIt extends Component {

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

  handleChange = (e) => {
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

```
