import React from 'react';

import styles from './styles/todocompact.css';

const TodoCompact = ({todo, updateTodo, removeTodo, navigate}) => {
  let wrapper;
  return (
    <li ref={node => wrapper = node} className={styles.todoWrapper}>
      <label
        htmlFor={todo.id}
        className={styles.todo}
        data-project={todo.tag}
      >
        <input 
          type="checkbox"
          className={styles.todo__checkbox}
          id={todo.id}
          onChange={() => {
            updateTodo(todo);
            wrapper.classList.toggle('is-completed');
          }}
        />
        <h4 className={styles.todo__title}>{todo.title}</h4>
        <a href="#" className={styles.todo__link} onClick={(e) => {
          e.preventDefault();
          navigate('todo', todo);
        }}>Expand Todo</a>
      </label>
    </li>
  )
};

export default TodoCompact;