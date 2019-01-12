import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem'

class TodoList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    
  render() {
      const {todos,onToggle,onRemove} = this.props;
      const todoList = todos.map(
          todo=> (
              <TodoItem
              key={todo.id}
              done={todo.done}
              onToggle={()=> onToggle(todo.id)}
              onRemove={()=> onRemove(todo.id)}>
              {todo.text}
              </TodoItem>

          )
      )
    return (
      <div>
          {todoList}
          {/* <TodoItem done>리액트 공부하기</TodoItem>
          <TodoItem>컴포넌트 스타일링해보기 </TodoItem> */}
      </div>
    )
  }
}

export default TodoList;