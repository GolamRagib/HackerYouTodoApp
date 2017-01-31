import React from 'react';

var TodoHeader = React.createClass( {
  render: function() {
    return <div className="row">
      <header className="todo-header">
        <h2>{ this.headerMessages() }</h2>
      </header>
    </div>;
  },
  
  headerMessages: function() {
    var k = this.props.selector;
    var itemCounts = [ 0, 0, 0 ];
    var headerMessage = [ "in the list", "completed", "incomplete" ];
    
    itemCounts[ 0 ] = this.props.todos.length;
    for( var j = 0; j < itemCounts[0]; j++ ) {
      if( this.props.todos[ j ].completed )
        itemCounts[ 1 ]++;
      else
        itemCounts[ 2 ]++;
    }
    
    var message  = itemCounts[ k ] ? itemCounts[ k ]+" " : "No ";
    message     += [ 0, 1 ].includes( itemCounts[ k ] ) ? "task " : "tasks ";
    message     += headerMessage[ k ];
    
    return message;
  },

});

export default TodoHeader;