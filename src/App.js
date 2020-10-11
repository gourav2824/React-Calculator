import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1 id="heading">Calculator</h1>
      <Form />
    </div>
  );
}

class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      input_one: '',
      input_two: '',
      output: ''
    };

    this.handleInputOne = this.handleInputOne.bind(this);
    this.handleInputTwo = this.handleInputTwo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleInputOne(event){
    this.setState({input_one: Number(event.target.value)});
  }

  handleInputTwo(event){
    this.setState({input_two: Number(event.target.value)});
  }

  handleClick(id){
    if(this.state.input_one === '' || this.state.input_two === ''){
      alert('Please provide valid input');
      return;
    }

    if(id === 'plus'){
      let ans = this.state.input_one + this.state.input_two;
      this.setState({output: ans});
    }

    else if(id === 'minus'){
      let ans = this.state.input_one - this.state.input_two;
      this.setState({output: ans});
    }

    else if(id === 'multiply'){
      let ans = this.state.input_one * this.state.input_two;
      this.setState({output: ans});
    }

    else {
      if(this.state.input_two === 0){
        alert('Error: Divided by zero');
        return;
      }
      let ans = this.state.input_one / this.state.input_two;
      this.setState({output: ans});
    }
  }

  handleClear(){
    this.setState({
      input_one: '',
      input_two: '',
      output: ''
    });
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <input id="input_one" type="number" value={this.state.input_one} onChange={this.handleInputOne}
        placeholder="Input One"/>
        <br/>
        <input id="input_two" type="number" value={this.state.input_two} onChange={this.handleInputTwo}
        placeholder="Input Two"/>
        <br/>
        <button id="plus" onClick={e => this.handleClick(e.target.id)}>+</button>
        <button id="minus" onClick={e => this.handleClick(e.target.id)}>-</button>
        <button id="multiply" onClick={e => this.handleClick(e.target.id)}>x</button>
        <button id="divide" onClick={e => this.handleClick(e.target.id)}>&divide;</button>
        <br/>
        <button id="clear" onClick={this.handleClear}>Clear</button>
        <br/>
        <input id="output" type="number" value={this.state.output} placeholder="Output" readOnly/>
      </form>
    );
  }
}

export default App;
