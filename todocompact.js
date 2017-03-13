import React from 'react';

import styles from './styles/todocompact.css';

const TodoCompact = ({todo, updateTodo, removeTodo, navigate}) => {
  let wrapper, check;
  return (
    <li ref={node => wrapper = node} className={styles.todoWrapper}>
      <h4 className={styles.todo__title}>{todo.title}</h4>
      <button type="button" className={styles.todo__updateTodo} onClick={() => {
        updateTodo(todo);
        wrapper.classList.toggle('is-completed');
        check.src = check.src === 'https://icon.now.sh/check' ? 'https://icon.now.sh/refresh' : 'https://icon.now.sh/check';
      }}><img ref={node => check = node} src="https://icon.now.sh/check" alt="Mark as Done" /></button>
      <button type="button" className={styles.todo__updateTodo} onClick={() => {
        removeTodo(todo)}}
      ><img src="https://icon.now.sh/trash/ffffff" alt="Remove Todo"/></button>
      <a href="#" className={styles.todo__link} onClick={(e) => {
        e.preventDefault();
        navigate('todo', todo);
      }}>Expand Todo</a>
    </li>
  )
};

export default TodoCompact;