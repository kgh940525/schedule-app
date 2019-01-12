import {Map,List,fromJS} from 'immutable';
import {handleActions,createActions} from 'redux-actions';

//! 1. 타입액션 지정
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

//! 2. 액션 함수 생성

export const insert = createActions(INSERT);
export const toggle = createActions(TOGGLE);
export const remove = createActions(REMOVE);

//! 3. 초기화
const initialState = fromJS([
    {
        id:0,
        text: '리액트공부하기',
        done: true
    },
    {
        id:1,
        text: '컴포넌트 스타일링 해보기',
        done: false
    }
])
//! 4. 리듀스 생성

export default handleActions({
    [INSERT]:(state,action) => {
        //? payload안에 있는 id,text,done의 레퍼런스를 만들어준다.
        //? 레퍼런스를 만들지 않고 바로 push를 해도되지만 나중에 이코드를 보았을때, 이액션이 어떻게 처리하는지 보려고
        const {id,text,done} = action.payload;
        return state.push(fromJS({
            id,
            text,
            done
        }));  
    },
    [TOGGLE] :(state,action) =>{
        const {payload : id } = action;
        const index= state.findIndex(todo=> todo.get('id') === id)

        return state.updateIn([index,'done'],done => !done);
    },[REMOVE] : (state,action) => {
        const {payload :id} = action;
        const index =state.findIndex(todo=> todo.get('id') ===id)
        return state.delete(index);
    }
},initialState)


