import logo from './logo.svg';
import mole from './mole.jpg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'


class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.solution = "ABC";
    this.coordinates = `41°27'53"N 81°53'13"W`
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value == this.solution) {
      alert(`You Solved the puzzle! Please call the supplied phone number, then navigate to the following coordinates: ${this.coordinates}`)
    }
    else {
      alert("I'm sorry, that answer is incorrect. Please try again.")
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mole} className="App-logo" alt="logo" />
        <p>
        <header>Please Enter the Secret Word</header>
        <FormComponent/>
        </p>
      </header>
    </div>
  );
}

export default App;
