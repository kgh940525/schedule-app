import React, { Component } from 'react'
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class App extends Component {

  state = {
    input: '', // input 입력값
    todos:[
      {id:0, text:'리액트공부하기',done:true},
      {id:1, text:'컴포넌트스타일링해보기',done:false}
    ]
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


  handleChange = (e) =>{
    // 변화한 타겟의 값이 되는것을 value에 넣는다.
    const { value } = e.target;
    this.setState({
      input: value
    })
  }
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
  handleRemove =(id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    this.setState({
      todos: [
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
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </PageTemplate>
      </div>
    );
  }
}
