/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';
import './todoitemstyle.css';

class TodoItem extends React.PureComponent {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const { completed, id, title } = this.props.todo;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    return (
      <li className="item">
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            className="checkbox"
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button
            type="button"
            onClick={() => this.props.deleteTodoProps(id)}
          >
            Delete
          </button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className="textInput"
          value={title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}
export default TodoItem;
