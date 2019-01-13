import React, { Component } from 'react';
import TodoList from '../components/TodoList/TodoList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as todosActions from '../modules/todos'
import TodoProgress from '../components/TodoProgress/TodoProgress';

// import TodoProgressContainer from './TodoProgressContainer';

class TodoListContainer extends Component {
    handleToggle = (id) =>{
        const {TodosActions} = this.props;
        TodosActions.toggle(id);

    }
    handleRemove = (id) => { 
        const {TodosActions} = this.props;
        TodosActions.remove(id)
    }
    render() {
        const {todos} = this.props;
        const {handleToggle, handleRemove} = this;

        return (
            <div>
            <TodoList
            todos={todos}
            onToggle={handleToggle}
            onRemove={handleRemove}
            />
            
            <TodoProgress onToggle={handleToggle}></TodoProgress>
            </div>
        );
    }
}

export default connect(
    (state) =>({
        todos: state.todos

    }),
    (dispatch) =>({
        TodosActions: bindActionCreators(todosActions,dispatch)
    })
)(TodoListContainer);

