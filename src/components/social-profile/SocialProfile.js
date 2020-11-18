import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 
import './SocialProfile.scss';

export default function SocialProfile (props){
    return (
        <div className="card">
            <img src={props.imgSrc} alt={props.name} className="card__photo" width="128" height="128"/>
            <div className="card__meta">
                <h3 className="card__name">{props.name}</h3>
                <p className="card__tag">@{props.tag}</p>
                <p className="card__location">{props.location}</p>

                <ul className="card__info-list info-list">
                <li className="info-list__item">
                    <p className="info-list__item-placeholder">Followers</p>
                    <p className="info-list__item-value">{props.activity.followers}</p>
                </li>
                <li className="info-list__item">
                    <p className="info-list__item-placeholder">Views</p>
                    <p className="info-list__item-value">{props.activity.views}</p>
                </li>
                <li className="info-list__item">
                    <p className="info-list__item-placeholder">Likes</p>
                    <p className="info-list__item-value">{props.activity.likes}</p>
                </li>
                </ul>
            </div>
        </div>
    )
}

SocialProfile.propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    activity:PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
    
}

SocialProfile.defaultProps = {
    imgSrc: './img/no-profile-img.png',
    tgLink: '#',
    tgLinkCaption: 'no-link',
    location: 'Location unknown',
    activity: {
        followers: 0,
        views: 0,
        likes: 0
      }
  };