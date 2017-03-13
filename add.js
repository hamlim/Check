import React, {Component} from 'react';

class Add extends Component {
  render () {
    const {
      addTodo,
      navigate
    } = this.props;
    let title, note, dueDate;
    return (
      <div>
        <h1>Add a Todo:</h1>
        <div>
          <label htmlFor="title">
            Todo Title:
            <input id="title" type="text" ref={node => title = node}/>
          </label>
          <label htmlFor="note">
            Todo Note:
            <textarea id="note" ref={node => note = node}></textarea>
          </label>
          <label htmlFor="dueDate">
            Due Date:
            <input type="date" ref={node => dueDate = node} id="dueDate" />
          </label>
          <button type="button" onClick={() => {
            addTodo(title.value, note.value, dueDate.value);
            title.view = note.view = dueDate.value = '';
            navigate('home');
          }}>Add Todo</button>
        </div>
      </div>
    )
  }
}



export default Add;