import React, {Component} from 'react';
import {render} from 'react-dom';

import View from './view';

import Home from './home';

import Add from './add';

import './styles/vars.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    todos: [],
    activePage: 'home'
  };

  id = 0;

  updateLocalStorage = (currentState, newState, localStorageKey = 'checktodo') => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(Object.assign({}, currentState, newState)));
  }

  // Updater
  updateStore = (currentState = this.state, newState) => {
    console.log(newState);
    this.updateLocalStorage(currentState, newState);
    this.setState(newState);
  }

  // actions
  generateTodo = (title, note, dueDate, createdDate = new Date(), id = this.id++) => {
    this.addTodo({
      id,
      title,
      note,
      dueDate,
      createdDate,
      completed: false
    });
  }

  addTodo = (todo) => {
    let newState = {
      todos: [...this.state.todos, todo]
    };
    this.updateStore(this.state, newState);
  }

  markTodoAsDone = (todo) => {
    let newState = {
      todos: this.state.todos.map(t => {
        if (t.id !== todo.id) {
          return t;
        }

        return Object.assign({}, t, {
          completed: !t.completed
        });
      })
    }
    this.updateStore(this.state, newState);
  }

  changeView = (toView) => {
    this.updateStore(this.state, {
      activePage: toView
    });
  }

  componentWillMount = () => {
    if (window.localStorage) {
      let localStore = JSON.parse(window.localStorage.getItem('checktodo'));
      if (localStore !== {} ) {
        this.updateStore(this.state, localStore);
      }
    }
  }

  render = () => {
    let {
      todos,
      activePage
    } = this.state;
    return (
      <div>
        <View visible={activePage === 'home'}>
          <Home todos={todos} navigate={this.changeView} updateTodo={this.markTodoAsDone} />
        </View>
        <View visible={activePage === 'add'}>
          <Add addTodo={this.generateTodo} navigate={this.changeView} />
        </View>
      </div>
    )
  }
}

render(
  <App />,
  document.querySelector('#mount')
);