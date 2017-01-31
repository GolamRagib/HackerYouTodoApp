import React from 'react';

var TodoNew = React.createClass({
  getInitialState: function() {
    return {
      newTodo: "",
    }
  },
  
  render: function() {
    return <div className="row">
      <div className="bottom-buffer">
        <div className="input-group">
          <span className="input-group-btn">
            <button type="button" className="btn" disabled="true">
              <span className="fa fa-check-none"></span>
            </button>
          </span>
          <input   type="text"
              className="form-control"
            placeholder="Add Something New"
                  value={ this.state.newTodo }
             onKeyPress={ this.onPressEnterKey }
               onChange={ this.updateNewTodo } />
          <span className="input-group-btn">
            <button type="button"
               className="btn btn-primary"
                   value={ this.state.newTodo }
                 onClick={ this.onAddNewButtonClick } >
              <span className="fa fa-plus"></span>
            </button>
          </span>
        </div>
      </div>
    </div>
  },
  
  updateNewTodo: function( evt ) {
    this.setState( { newTodo: evt.target.value } );
  },

  onAddNewButtonClick: function( evt ) {
    this.props.onAddNewButtonClick( this.state.newTodo );
    this.setState( { newTodo: "" } );
  },
  
  onPressEnterKey: function( evt ) {
    if ( evt.key === "Enter" )
      this.onAddNewButtonClick();
  },

});

export default TodoNew;