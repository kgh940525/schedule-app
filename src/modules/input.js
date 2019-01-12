import {Map} from "immutable";
import {handleActions, createAction} from 'redux-actions';

//! 1.액션타입정의 액션을 정의 할때는 문자열의 앞부분에 리듀서의 이름을 적어준다
const SET_INPUT = 'input/SET_INPUT';

//! 2. 액션함수 생성
export const setInput = createAction(SET_INPUT);

//! 3.초기 상태정의
const initialState = Map({
    value: ''

});
//! 4.리듀서 생성 
export default handleActions({
    [SET_INPUT] : (state,action) =>{
        return state.set('value', action.payload)
    }
},initialState);