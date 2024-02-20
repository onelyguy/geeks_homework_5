import React from 'react'
import './user.css'

function UserCard({ cardInfo }) {
    return (
        <div>
            <img src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' />
            <h1>{cardInfo.name}</h1>
            <p>{cardInfo.username}</p>
            <p>{cardInfo.email}</p>
        </div>
    )
}

export default UserCard