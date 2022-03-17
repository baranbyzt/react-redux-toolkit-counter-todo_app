





import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {addTodo,selectTodos} from '../redux/ToDoReducer';
import style from '../styles/TodoApp.module.css';



const TodoApp = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState();

    return ( 
        <div className={style.wrapper}>

      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={() => dispatch(addTodo({name: inputValue}))}>Add</button>
      <hr/>
      
           {todos.map((todo, key) => (
        <div key={key}>{todo.name}</div>
      ))}
        </div>
     );
}
 
export default TodoApp;