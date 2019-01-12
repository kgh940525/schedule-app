import React, { Component } from 'react';
import TodoInput from '../components/TodoInput'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as inputActions from '../modules/input'
import * as todosActions from '../modules/todos'



class TodoInputContainer extends Component {
    render() {
        return (
            <TodoInput></TodoInput>
        );
    }
}


export default connect(
    (state) => ({
        value:state.input.get('value'),
    }),
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions,dispatch),
        TodoActions: bindActionCreators(todosActions,dispatch)

    })

)(TodoInputContainer);