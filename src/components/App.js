import React, { Component } from 'react';
import { connect } from "react-redux";

import * as sdkActions from "../redux/actions/sdk";
import '../assets/css/App.css';
import { TODO } from './Todo'

class App extends Component {

  todosCounter = 0;

  buttonClick1 = (e) => {
    this.props.getFirstTodo();
  }

  buttonClick2 = (e) => {
    this.props.getSecondTodo();
  }

  getTodos() {
    return this.props.todos.map(todo => (<TODO {...todo} key={++this.todosCounter} />))
  }

  render() {
    console.log(this.props.todos);
    return (
      <div className="App">
        <div className="buttonsWrapper">
          <button onClick={this.buttonClick1}>Get first todo via mock SDK</button>
          <button onClick={this.buttonClick2}>Get second todo via mock SDK</button>
        </div>
        {this.getTodos()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { ...sdkActions })(App);
