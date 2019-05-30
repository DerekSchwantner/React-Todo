import React from "react";
import { data } from "./data";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemData: data,
      task: "",
      id: null,
      completed: false
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addItem = e => {
    e.preventDefault();
    console.log(e);
    // immutability in react/javascript
    const newItem = {
      task: this.state.task,
      id: Date.now(),
      completed: this.state.completed
    };
    this.setState({
      itemData: [...this.state.itemData, newItem],
      task: ""
    });
  };

  handleChanges = event => {
    this.setState({
      task: event.target.value
    });
  };

  toggleItem = id => {
    this.setState(prevState => {
      return {
        itemData: prevState.itemData.map(item => {
          if (item.id === id) {
            return {
              ...item,

              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    });
  };

  removeItem = e => {
    e.preventDefault();
    console.log(e);
    this.setState({
      itemData: this.state.itemData.filter(task => task.completed !== true)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleItem={this.toggleItem} toDoItem={this.state} />
        <TodoForm
          addMethod={this.addItem}
          removeItem={this.removeItem}
          stateObject={this.state}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
