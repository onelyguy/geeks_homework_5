import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFunctionAction, fetchUserAction } from '../../redux/actions'
import UserCard from '../../components/UserCard'

function AboutPage() {

    const users = useSelector(state => state.titleReducer.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserAction())
    }, [])

    console.log(users, 'users');

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {users[0] && users[0].map(item => <UserCard cardInfo={item} />)}
        </div>
    )
}


export default AboutPage