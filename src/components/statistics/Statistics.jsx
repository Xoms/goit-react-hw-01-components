import React from 'react';
import PropTypes from 'prop-types'; 
import './Statistics.scss';

export default function Statistics({title, stats}){

    if (stats.length%4) {  //check for 4 in row
        while(stats.length%4){
            let mockObj = {
                "id": Date.now() + Math.random() + '', 
                "label": "", 
                "percentage": 0
            }
            stats.push(mockObj)
        }
    }

    const outputData = stats.map(el => {
            return ( 
            <li className="stat-list__item" key={el.id}>
                <span className="stat-list__item-label">{el.label}</span>
                {el.percentage !== 0 && <span className="stat-list__item-percentage"> {el.percentage}%</span>}
            </li>
            )
        }); 


    return (
        <section className="statistics">
        {!!title && <h2 className="statistics__title">{title}</h2>} {/*Это чтоб не рендерился h1 совсем, если ничего не передано*/ }

        <ul className="stat-list">
            {outputData}
        </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })).isRequired    
}

Statistics.defaultProps = {
    title: ''
};