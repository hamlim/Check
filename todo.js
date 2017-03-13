import React, {Component} from 'react';

// import styles from './styles/todo.css';

const Todo = ({todo, navigate}) => {
  return (
    <section className={styles.todoWrapper}>
      <div className={styles.todo}>
        <h1 className={styles.todo__title}>{todo.title}</h1>
        <date className={styles.todo__dueDate} dateTime={todo.dueDate}>{todo.dueDate}</date>
        <p className={styles.todo__note}>{todo.note}</p>
        <p className={styles.todo__status}>Status: {todo.completed ? 'Completed' : 'ToDo'}</p>


        <date className={styles.todo__created} dateTime={todo.createdDate}>{todo.createdDate}</date>
      </div>
      <a href="#" className={styles.todo__navLink} onClick={(e) => {
        e.preventDefault();
        navigate('home');
      }}>Go Back</a>
    </section>
  )
}

export default Todo;