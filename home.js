import React, {Component} from 'react';
import * as cx from 'classnames';

import styles from './styles/todo.css';

import todoWrapperStyles from './styles/home.css';

const Todo = ({todo, updateTodo}) => {
  let wrapper;
  return (
    <li ref={node => wrapper = node} className={styles.todoWrapper}>
      <h4 className={styles.todo__title}>{todo.title}</h4>
      <date className={styles.todo__dueDate} dateTime={todo.dueDate}>{todo.dueDate}</date>
      <p className={styles.todo__note}>{todo.note}</p>
      <button type="button" className={styles.todo__updateTodo} onClick={() => {
        updateTodo(todo);
        wrapper.classList.toggle('is-completed');
      }}>Mark as Done</button>
    </li>
  )
};

class Home extends Component {
  render() {
    const {
      todos,
      navigate,
      updateTodo
    } = this.props;
    return (
      <div>
        <h1>Simple Todo App:</h1>
        <a href="/add" onClick={(e) => {
         e.preventDefault();
         navigate('add');
        }}>Add a Todo</a>
        <ul className={todoWrapperStyles.home__todosWrapper}>
          {todos.map(todo => (<Todo key={todo.id} todo={todo} updateTodo={updateTodo} />))}
        </ul>
      </div>
    )
  }
}


export default Home;