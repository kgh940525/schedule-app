import React from 'react'
import './TodoInput.scss';


const TodoInput = ({value,onChange, onInsert}) =>{

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onInsert();
        }
    }
    return (
      <div className="todo-input">
      <input onChange={onChange} value={value} onKeyPress={handleKeyPress}></input>
      <div className="add-button" onClick={onInsert}>추가하기</div>
      </div>
    );

};
export default TodoInput;
