import React, {Component} from 'react';
import TodoCompact from './todocompact.js';

import todoWrapperStyles from './styles/home.css';

class Home extends Component {
  render() {
    const {
      todos,
      navigate,
      updateTodo,
      removeTodo
    } = this.props;
    return (
      <div>
        <ul className={todoWrapperStyles.home__todosWrapper}>
          {todos.map(todo => (
            <TodoCompact 
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
              navigate={navigate}
            />)
          )}
        </ul>
      </div>
    )
  }
}


export default Home;