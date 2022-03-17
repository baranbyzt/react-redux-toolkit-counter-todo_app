


import React,{useState} from 'react'
import style from '../styles/Counter.module.css'
import { useSelector,useDispatch } from 'react-redux';
import {increase,decrement,selecCounter} from '../redux/CounterReducer'

const Counter = () => {
    const count = useSelector(selecCounter);
    const dispatch = useDispatch();
   
    return ( 
        <div className={style.wrapper}>
       
    <h1>{count}</h1>
    <div className={style.inner_p}>
        <p  onClick={() => dispatch(increase())}>increase</p>
        <p onClick={() => dispatch(decrement())}>decrement</p>
    </div>

        </div>
     );
}
 
export default Counter;