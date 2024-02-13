import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './counter.module.css'

function Counter() {

    const number = useSelector(state => state.number)
    const dispatch = useDispatch()

    const minus = () => {
        dispatch({
            type: 'MINUS'
        })
        console.log(number)
    }

    const plus = () => {
        dispatch({
            type: 'PLUS'
        })
    }

    const plusTen = () => {
        dispatch({
            type: 'PLUS_TEN'
        })
    }

    const clean = () => {
        dispatch({
            type: 'CLEAN'
        })
    }

    return (
        <div>
            <h1 className={classes.number}>{number}</h1>
            <div className={classes.buttons}>
                <button onClick={minus} className={classes.btn}>-</button>
                <button onClick={plus} className={classes.btn}>+</button>
                <button onClick={plusTen} className={classes.btn}>+10</button>
                <button onClick={clean} className={classes.btn}>Очистить</button>
            </div>
        </div>
    )
}

export default Counter