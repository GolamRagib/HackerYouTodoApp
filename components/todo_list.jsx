import React from 'react';

var TodoList = React.createClass({
  render: function() {
    return <div className="row">
      { this.props.todos.map((todo, i) => {
        if((todo.completed) && [0,1].includes(this.props.selector))
        return this.createList(todo, i);
        else if(!(todo.completed) && [0,2].includes(this.props.selector))
        return this.createList(todo, i)
      })}
      </div>;
  },
  
  createList: function(todo, i) {
    return <div className="col-xs-12 half-buffer" key={i}>
      <div className="">
        <div className="input-group">
          <span className="input-group-addon">
            <input type="checkbox"
                   checked={todo.completed}
                   onChange={() => this.props.onComplete(i)} />
          </span>
          <input type="text"
                 className="form-control"
                 onChange={(evt) => this.props.onUpdateText(i, evt.target.value)}
                 value={todo.text}/>
          <span className="input-group-btn">
            <button type="button"
                    className="btn btn-primary"
                    onClick={() => this.props.onDelete(i)}>
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </span>
        </div>
      </div>
    </div>
  },
  
});

export default TodoList;
