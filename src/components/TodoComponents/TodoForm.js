import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <form>
        {/* Event - onChange */}
        <input
          placeholder="Item"
          onChange={this.props.handleChanges}
          value={this.props.stateObject.task}
        />

        {/* Event Handler - onClick */}
        <button onClick={this.props.addMethod}>Add Todo Item</button>
        <button onClick={this.props.removeItem}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
