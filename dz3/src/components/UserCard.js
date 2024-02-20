import React from 'react'
import classes from './userCard.module.css'

function UserCard({ cardInfo }) {
    return (
        <div className={classes.card}>
            <img src={cardInfo.avatar} className={classes.img} />
            <h1>{cardInfo.first_name}</h1>
            <h2>{cardInfo.last_name}</h2>
            <p>{cardInfo.email}</p>
        </div>
    )
}

export default UserCard