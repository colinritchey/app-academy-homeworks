import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, num1: '', num2: ''};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);

    this.reset = this.reset.bind(this);
  }

  setNum1(e) {
    let num1 = "";
    if (e.target.value){
      num1 = parseInt(e.target.value);
    }
    this.setState({ num1 });
  }

  setNum2(e) {
    let num2 = "";
    if (e.target.value){
      num2 = parseInt(e.target.value);
    }
    this.setState({ num2 });
  }

  add(event) {
    event.preventDefault();
    this.setState({ result: this.state.num1 + this.state.num2 });
  }

  subtract(event) {
    event.preventDefault();
    this.setState({ result: this.state.num1 - this.state.num2 });
  }

  multiply(event) {
    event.preventDefault();
    this.setState({ result: this.state.num1 * this.state.num2 });
  }

  divide(event) {
    event.preventDefault();
    this.setState({ result: this.state.num1 / this.state.num2 });
  }

  reset(event) {
    event.preventDefault();
    this.setState({ result: 0, num1: '', num2: '' });
  }

  render() {
    let {result, num1, num2 } = this.state;
    return (
      <div>
        <input onChange={this.setNum1} value={num1}></input>
        <input onChange={this.setNum2} value={num2}></input>
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <br />
        <button onClick={this.reset}>Reset</button>
        <h1>{result}</h1>
      </div>
    );
  }
}

export default Calculator;
