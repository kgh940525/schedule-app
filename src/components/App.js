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

  handleChange = (e) =>{
    // 변화한 타겟의 값이 되는것을 value에 넣는다.
    const { value } = e.target;
    this.setState({
      input: value
    })
  }
  render() {
    const{input,todos} = this.state;
    const {
      handleChange
    } = this;

    return (
      <div>
        <PageTemplate>
        <TodoInput onChange={handleChange} value={input}/>
        <TodoList todos={todos}/>
        </PageTemplate>
      </div>
    )
  }
}
