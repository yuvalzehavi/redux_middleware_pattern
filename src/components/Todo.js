import React from 'react';

export const TODO = ({ userId, id, title, completed }) => {
    return (
        <li>
            <span>userId: {userId} </span>
            <span>id: {id} </span>
            <span>title: {title} </span>
            <span>completed: {completed} </span>
        </li>
    )
}