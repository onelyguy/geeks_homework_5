import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAction } from '../../redux/actions'
import UserCard from '../../components/UserCard'

function AboutPage() {

    const users = useSelector(state => state.titleReducer.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserAction())
    }, [])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            {users && users.map(user => <UserCard key={user.id} cardInfo={user} />)}
        </div>
    )
}


export default AboutPage