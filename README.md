# Simple React Mark-Up Tool
This is my second attempt at making a simple mark up app with React.

Or should it be mark down?

On the first iteration, I had the MarkIt component be a child component of the TypeInText component where the latter held the state.

Now after reading and reading more, I have it closer to best practices by having these 2 components be siblings and the state is now kept in their common parent component which is then passed down as props.

I have also read that using dangerouslySetInnerHTML is not safe. I could have used some library to render it for me and I'll look into that but for the mean time I'll keep the complexity down to a minimum.

Reading can be a bummer because they also say that regular expressions are a no go for parsing mark-up (or mark-down), probably doesn't scale well.

## Demo: [react-markup-garrick.surge.sh]

## The main code
```javascript
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

```
