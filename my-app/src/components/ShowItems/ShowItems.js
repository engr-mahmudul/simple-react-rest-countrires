import './showItems.css'
import React from 'react';

const ShowItems = (props) => {
    // console.log(props.country);
    const {name,capital,flag} = props.country;
    return (
        <div className='single-country'>
            <img src={flag} alt="" />
            <h2>{name} </h2>
            <h3>{capital}</h3>
        </div>
    );
};

export default ShowItems;