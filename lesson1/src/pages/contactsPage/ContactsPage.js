import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

function ContactsPage() {

    const [input, setInput] = useState('')

    const title = useSelector(state => state.contactTitle)
    const dispatch = useDispatch()

    const withParams = () => {
        dispatch({
            type: 'WITH_PARAMS',
            payload: 'Front-end Developer'
        })
    }

    const addInput = () => {
        dispatch({
            type: 'FROM_INPUT',
            payload: input
        })
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={withParams}>Change title with params</button>
            <h2>--------------------------------------</h2>
            <input type='text' onChange={(event) => setInput(event.target.value)} />
            <button onClick={addInput}>Add</button>
        </div>
    )
}

export default ContactsPage