import        React from 'react';
import   TodoHeader from './todo_header.jsx';
import     TodoList from './todo_list.jsx';
import      TodoNew from './todo_new.jsx';
import TodoSelector from './todo_selector.jsx';

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        { text: "Mow the lawn"  , completed: false },
        { text: "Do the dishes" , completed: true  },
        { text: "Do more dishes", completed: false }
      ],
      selector: 0,
      columns: "\"col-xs-12\"",
    }
  },

  render: function() {
    return <div className="todo-list">
      
      <TodoHeader todos={ this.state.todos }
               selector={ this.state.selector }
                columns={ this.state.columns }/>
      
      <TodoSelector selector={ this.state.selector }
            onUpdateSelector={ (i) => this.setState({ selector: i }) }
                     columns={ this.state.columns }/>
      
      <TodoList todos={ this.state.todos }
             selector={ this.state.selector }
             onDelete={ (i) => this.deleteTodo(i) }
           onComplete={ (i) => this.toggleComplete(i) }
         onUpdateText={ (i, newText) => this.updateTodoText(i, newText) }
              columns={ this.state.columns }/>
      
      <TodoNew onAddNewButtonClick={ (newTodo) => this.addNewTodo(newTodo) }
                           columns={ this.state.columns }/>
      
    </div>
  },
  
  updateTodoText: function(i, newText) {
    var todoItems = this.state.todos;
    todoItems[i].text = newText;
    this.setState({ todos: todoItems });
  },
  
  addNewTodo: function(newTodo) {
    if (!newTodo)
      return;
    var todos = this.state.todos;
    var newTodoItem = {
           text: newTodo,
      completed: false
    }
    this.setState({ todos: todos.concat( [newTodoItem] ) });
  },
  
  toggleComplete: function(i) {
    var todoItems = this.state.todos;
    todoItems[i].completed = !todoItems[i].completed;
    this.setState({ todos: todoItems });
  },
  
  deleteTodo: function(i) {
    var todoItems = this.state.todos;
    todoItems.splice(i, 1);
    this.setState({ todos: todoItems });
  },
    
});

export default TodoApp;
