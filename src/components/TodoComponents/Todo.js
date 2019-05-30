import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div
        className="list-item"
        onClick={() => this.props.toggleItem(this.props.itemOnProps.id)}
      >
        {this.props.itemOnProps.task}
      </div>
    );
  }
}
export default Todo;
