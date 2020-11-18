import React from 'react';
import PropTypes from 'prop-types'; 
import './Statistics.scss';

function formOutputArr(arr){
    if (arr.length%4) {  //check for 4 in row
        while(arr.length%4){
            let mockObj = {
                "id": Date.now() + Math.random() + '', 
                "label": "", 
                "percentage": 0
            }
            arr.push(mockObj)
        }
    }
    return arr.map(el => <li className="stat-list__item" key={el.id}>
        <span className="stat-list__item-label">{el.label}</span>
        {el.percentage !== 0 && <span className="stat-list__item-percentage"> {el.percentage}%</span>}
    </li>);
}

export default function Statistics(props){
    const outputData = formOutputArr(props.stats) 
    return (
        <section className="statistics">
        {props.title && <h2 className="statistics__title">{props.title}</h2>}

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