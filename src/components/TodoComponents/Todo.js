import React from "react";

class Todo extends React.Component {
  render() {
    return <div>{this.props.itemOnProps.task}</div>;
  }
}
export default Todo;
