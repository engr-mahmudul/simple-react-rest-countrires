import './showItems.css'
import React from 'react';

const ShowItems = (props) => {
    return (
        <div className='single-country'>
            <img src={props.flag} alt="" />
            <h2>{props.name} </h2>
            <h3>{props.capital}</h3>
        </div>
    );
};

export default ShowItems;