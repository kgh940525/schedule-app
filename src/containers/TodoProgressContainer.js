import React, { Component } from 'react';
import TodoProgress from '../components/TodoProgress/TodoProgress'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as todosprogressActions from '../modules/todosprogress';

class TodoProgressContainer extends Component {

    handleProgress =(value)=>{
        const {TodosProgressActions} = this.props;
        TodosProgressActions.progress(value);
    }

    render() {
        const {todosprogress} = this.props;
        // const {handleProgress} = this;
        

        return(
            <div>
                <TodoProgress
                TodoProgress={TodoProgress}
                
                >

                </TodoProgress>
                
            </div>
        );
    }
}

export default connect(
    (state) =>({
        todosprogress: state.todosprogress
    }),
    (dispatch) =>({
        TodosProgressActions: bindActionCreators(todosprogressActions,dispatch)
    })
)(TodoProgressContainer);