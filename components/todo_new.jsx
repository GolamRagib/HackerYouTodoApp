import React from 'react';

var TodoNew = React.createClass({
  getInitialState: function() {
    return {
      newTodo: "",
    }
  },
  
  render: function() {
    return <div className="row">
      <div className="col-xs-12">
        <hr />
        <div className="input-group">
          <input type="text"
                 className="form-control"
                 placeholder="Add Something New"
                 value={this.state.newTodo}
                 onChange={this.updateNewTodo} />
          <span className="input-group-btn">
            <button type="button"
                    className="btn btn-primary"
                    value={this.state.newTodo}
                    onClick={this.onAddNewButtonClick} >
              <span className="glyphicon glyphicon-plus"></span>
            </button>
          </span>
        </div>
      </div>
    </div>
  },
  
  updateNewTodo: function(evt) {
    this.setState({newTodo: evt.target.value});
  },

  onAddNewButtonClick: function(evt) {
    this.props.onAddNewButtonClick(this.state.newTodo);
    this.setState({newTodo: ""});
  },

});

export default TodoNew;
