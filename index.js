import React, {Component} from 'react';
import {render} from 'react-dom';

import Header from './header';
import View from './view';
import Home from './home';
import Add from './add';
import Todo from './todo.js';

import './styles/vars.css';


class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    todos: [],
    activePage: 'home',
    viewData: {},
    id: 0
  };

  updateLocalStorage = (currentState, newState, localStorageKey = 'checktodo') => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(Object.assign({}, currentState, newState)));
  }

  // Updater
  updateStore = (currentState = this.state, newState) => {
    console.log(newState);
    this.updateLocalStorage(currentState, newState);
    window.setTimeout(() => {
      this.setState(newState);
    }, 50);
  }

  // actions
  generateTodo = (title, note, dueDate, tag, createdDate = new Date(), id = this.state.id++) => {
    this.addTodo({
      id,
      title,
      note,
      dueDate,
      tag,
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

  removeTodo = (todo) => {
    let newState = {
      todos: this.state.todos.filter(t => {
        return t.id !== todo.id;
      })
    };
    this.updateStore(this.state, newState);
  }

  changeView = (toView, viewData = {}) => {
    this.updateStore(this.state, {
      activePage: toView,
      viewData: viewData
    });
  }

  componentWillMount = () => {
    if (window.localStorage) {
      if (window.localStorage.getItem('checktodo') !== '') {
        let localStore = JSON.parse(window.localStorage.getItem('checktodo'));
        if (localStore !== {} ) {
          this.updateStore(this.state, localStore);
        }
      }
    }
  }

  render = () => {
    let {
      todos,
      activePage,
      viewData
    } = this.state;
    return (
      <div>
        <Header navigate={this.changeView} />
        <View visible={activePage === 'home'}>
          <Home todos={todos} navigate={this.changeView} updateTodo={this.markTodoAsDone} removeTodo={this.removeTodo} />
        </View>
        <View visible={activePage === 'add'}>
          <Add addTodo={this.generateTodo} navigate={this.changeView} />
        </View>
        <View visible={activePage === 'todo'}>
          <Todo todo={viewData} navigate={this.changeView} />
        </View>
      </div>
    )
  }
}

render(
  <App />,
  document.querySelector('#mount')
);