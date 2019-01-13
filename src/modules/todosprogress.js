import {Map,List} from 'immutable';

import {handleActions,createAction } from 'redux-actions';

//! 1.액션 설정
const PROGRESS = 'todosprogress/PROGRESS';

//! 2.액션함수

export const progress = createAction(PROGRESS);

//! 3. 초기화

const initualState = Map({
    value : ''
})

//! 4. 리듀스

export default handleActions({
    [PROGRESS] : (state,action) =>{
        return state.set('value', action.payload)
    }

},initualState)

