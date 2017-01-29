import React from 'react';

var TodoSelector = React.createClass({
  getInitialState: function() {
    return {
      selectors: [ "All", "Complete", "Incomplete" ]
    }
  },

  render: function() {
    return <div className="row bottom-buffer">
        <div className="col-xs-12">
          <ul className="nav nav-tabs">
            { this.state.selectors.map((selectors, i) => {
              if( i == this.props.selector)
                return <li role="presentation" className="active" key={i}>
                         <a onClick={ (evt) => this.props.onUpdateSelector(i) }>
                           {selectors}&nbsp;
                           <span className="badge">{ this.countItems(this.props.todos, i) }</span>
                         </a>
                       </li>
              else
                return <li role="presentation" key={i}>
                         <a onClick={ (evt) => this.props.onUpdateSelector(i) }>
                          {selectors}&nbsp;
                          <span className="badge">{ this.countItems(this.props.todos, i) }</span>
                         </a>
                       </li>
            })}
          </ul>
        </div>
      </div>;
  },
  
  countItems: function(todoItems, i) {
    var todoCount = todoItems.length;
    var todoComplete = 0;
    var todoIncomplete = 0;
    var message;
    var j;
    for(j = 0; j < todoItems.length; j++){
      if(this.props.todos[j].completed)
      todoComplete++;
      else todoIncomplete++;
    }
    switch(i) {
      case 0:
        message = todoCount;
        break;
      case 1:
        message = todoComplete;
        break;
      case 2:
        message = todoIncomplete;
        break;
    }
    return message;
  }

});

export default TodoSelector;
