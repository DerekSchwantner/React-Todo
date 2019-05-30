import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
  render() {
    return (
      <div className="class-list">
        {this.props.toDoItem.itemData.map(itemFromMap => (
          <Todo
            key={itemFromMap.id}
            toggleItem={this.props.toggleItem}
            itemOnProps={itemFromMap}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
