import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 
import './Friend-list.scss';

function makeJsxMarkup(arr){
    return arr.map(el => 
        <li className="friend-list__item" key={el.id}>
            {
            el.isOnline ? <span className="friend-list__status friend-list__status--active"></span> :
                <span className="friend-list__status"></span>
            }
            <img className="friend-list__avatar" src={el.avatar} alt={el.name} width="48" />
            <p className="friend-list__name">{el.name}</p>
        </li>    
    )
}

export default function FriendList(props){
    const markup = makeJsxMarkup(props.friends)
    return (
        <ul className="friend-list">
            {markup}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        "avatar": PropTypes.string,
        "name": PropTypes.string,
        "isOnline": PropTypes.bool,
        "id": PropTypes.number
    })).isRequired
};