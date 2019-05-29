import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.addMethod}>
        {/* Event - onChange */}
        <input
          placeholder="Item"
          onChange={this.props.handleChanges}
          value={this.props.stateObject.task}
          id={Date.now()}
        />

        {/* Event Handler - onClick */}
        <button>Add Todo Item</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
