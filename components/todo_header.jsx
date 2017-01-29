import React from 'react';

var TodoHeader = React.createClass({
  render: function() {
    return <div className="row">
        <div className="col-xs-12">
          <header className="todo-header">
            <h1>{ this.headerMessages() }</h1>
          </header>
        </div>
      </div>;
  },
  
  headerMessages: function() {
    var todoItems = this.props.todos;
    var todoCount = todoItems.length;
    var todoComplete = 0;
    var todoIncomplete = 0;
    var message;
    var i;
    for(i = 0; i < todoItems.length; i++){
      if(this.props.todos[i].completed)
      todoComplete++;
      else todoIncomplete++;
    }
    switch(this.props.selector) {
      case 0:
        message  = todoCount ? todoCount+" " : "No ";
        message += [0,1].includes(todoCount) ? "task " : "tasks ";
        message += "in the list";
        break;
      case 1:
        message  = todoComplete ? todoComplete+" " : "No ";
        message += [0,1].includes(todoComplete) ? "task " : "tasks ";
        message += "completed";
        break;
      case 2:
        message  = todoIncomplete ? todoIncomplete+" " : "No ";
        message += [0,1].includes(todoIncomplete) ? "task " : "tasks ";
        message += "incomplete";
        break;
    }
    return message;
  },

});

export default TodoHeader;