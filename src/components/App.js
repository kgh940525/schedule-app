import React, { Component } from 'react'
import PageTemplate from './PageTemplate/PageTemplate';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';
import { Button } from 'reactstrap';
const initialTodos = new Array(500).fill(0).map(
  (foo,index)=> ({id:index, text:`일정 ${index}`, done:false})
);
export default class App extends Component {
  
  state = {
    input: '', // input 입력값
    // todos:[
      // {id:0, text:'리액트공부하기',done:true},
      // {id:1, text:'컴포넌트스타일링해보기',done:false}
      todos:initialTodos,
    // ]
  }
  id =1
  getId =(e) =>{
    return ++this.id;
  }
  handleToggle = (id) =>{
    const{todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    }
    this.setState({
      todos:[
        ...todos.slice(0,index),
        toggled,
        ...todos.slice(index+1,todos.length)
      ]
    })
  }

// 1. Change
  handleChange = (e) =>{
    // 변화한 타겟의 값이 되는것을 value에 넣는다.
    const { value } = e.target;
    this.setState({
      input: value
    })
  }
// 2.handleInsert
  handleInsert = () => {
    const {todos, input} =this.state;
    const newTodo = {
      text : input,
      done : false,
      id: this.getId()
    }
    this.setState({
      todos: [...todos, newTodo],
      input: ''
    })
  }
  // 3. handleRemove
  handleRemove =(id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    // todos.splice(index,1)
    this.setState({
      todos: [
        
// slice(0,index) => index = 2

        // ...todos,
        ...todos.slice(0,index),
        ...todos.slice(index+1,todos.length)
      ]
    });
  }
  render() {
    const{input,todos} = this.state;
    const {
      handleChange,
      handleInsert,
      handleToggle,
      handleRemove
    } = this;

    return (
      <div>
        <PageTemplate>
        
        <Button>감자 Schedule List </Button>
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </PageTemplate>
      </div>
    );
  }
}
