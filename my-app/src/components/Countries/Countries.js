import './Countries.css'
import React, { useEffect, useState } from 'react';
import ShowItems from '../ShowItems/ShowItems';

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    // console.log(countries);
    return (
        <div className='main'>
            
            {
                countries.map(country => <ShowItems country={country} ></ShowItems>)
            }
        </div>
    );
};

export default Countries;