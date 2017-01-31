import React from 'react';

var TodoSelector = React.createClass({
  getInitialState: function() {
    return {
      selectors: [ "All", "Complete", "Incomplete" ]
    }
  },

  render: function() {
    return <div className="row bottom-buffer">
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
    </div>;
  },
  
  countItems: function(todoItems, i) {
    var itemCounts = [ 0, 0, 0 ];
    
    itemCounts[0] = todoItems.length;
    for(var j = 0; j < itemCounts[0]; j++){
      if(this.props.todos[j].completed)
        itemCounts[1]++;
      else
        itemCounts[2]++;
    }
    
    return itemCounts[i];
  }

});

export default TodoSelector;
