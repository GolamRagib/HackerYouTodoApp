import React from 'react';

var TodoSelector = React.createClass({
  getInitialState: function() {
    return {
      selectors: [ "All", "Complete", "Incomplete" ]
    }
  },

  render: function() {
    return <div className="row mytag">
        <div className="col-xs-12">
          <ul className="nav nav-tabs">
            { this.state.selectors.map((selectors, i) => {
              if( i == this.props.selector)
                return <li role="presentation" className="active" key={i}>
                         <a onClick={ (evt) => this.props.onUpdateSelector(i) }>{selectors}</a>
                       </li>
              else
                return <li role="presentation" key={i}>
                         <a onClick={ (evt) => this.props.onUpdateSelector(i) }>{selectors}</a>
                       </li>
            })}
          </ul>
        </div>
      </div>;
  },

});

export default TodoSelector;
