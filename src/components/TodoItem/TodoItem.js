import React, { Component } from 'react'
import './TodoItem.scss';
import Progress from 'react-progressbar'

const num =0;
class TodoItem extends Component {
    cnt =0;
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.done !== nextProps.done;
        
    }
    
    render() {
        const {done, children, onToggle, onRemove} = this.props;
        const style={
            textDecoration : "line-through"
        }
    if(done){
        this.cnt = this.cnt + 100
        return (
            
            <div>
            
            <Progress completed={this.cnt}></Progress>
            <div>

            </div>
            {/*  */}
            <div className="todo-item" onClick={onToggle}>
            <input className="tick" type="checkbox" checked={done} readOnly/>
            <div className="text" style={style} done>{children}</div>
            <div className="delete" onClick={(e)=>{
                onRemove();
                e.stopPropagation();
            }
            }>[지우기]</div>
            </div>
            </div>
        );
        }else{
            this.cnt = this.cnt - 100
            return(
            <div>
            <div>
            
            <Progress completed={this.cnt}></Progress>
            </div>
            <div className="todo-item" onClick={onToggle}>
            <input className="tick" type="checkbox" checked={done} readOnly/>
            <div className="text" done>{children}</div>
            <div className="delete" onClick={(e)=>{
                onRemove();
                e.stopPropagation();
            }
            }>[지우기]</div>
            </div>
            </div>
            );
            
        }
        
        
    }
}

export default TodoItem;

