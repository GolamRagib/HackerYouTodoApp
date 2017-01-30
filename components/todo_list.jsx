import React from 'react';

var TodoList = React.createClass( {
  render: function() {
    return <div className="row bottom-buffer-list">
      <div className=" bottom-buffer-list">
        { this.props.todos.map( ( todo, i ) => {
          if( ( todo.completed ) && [ 0, 1 ].includes( this.props.selector ) )
            return this.createList( todo, i );
          else if( !( todo.completed ) && [ 0, 2 ].includes( this.props.selector ) )
          return this.createList( todo, i )
        } ) }
      </div>
    </div>;
  },
  
  createList: function( todo, i ) {
    return <div className="half-buffer" key={ i }>
      <div className="input-group">
        <span className="input-group-btn">
          <button type="button"
                  className="btn btn-primary"
                  onClick={ () => this.props.onComplete( i ) } >
            <span className={ todo.completed ? "glyphicon glyphicon-ok" : "glyphicon glyphicon-none" } >
            </span>
          </button>
        </span>
        <input type="text"
               className="form-control"
               onChange={ ( evt ) => this.props.onUpdateText( i, evt.target.value ) }
               value={ todo.text }/>
        <span className="input-group-btn">
          <button type="button"
                  className="btn btn-danger"
                  onClick={ () => this.props.onDelete( i ) }>
            <span className="glyphicon glyphicon-trash"></span>
          </button>
        </span>
      </div>
    </div>
  },
  
} );

export default TodoList;