/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </ul>
    );
  }
}
export default TodosList;
