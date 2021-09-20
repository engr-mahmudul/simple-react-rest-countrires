import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
     
      <Header></Header>
      <Countries></Countries>
      
    </div>
  );
}
function Header(){
  return(
    <div className='header'>
      <h1>You are wellcomed traveling the world</h1>
    </div>
  )
}
// function Countries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[]);
//   // countries.forEach(x=> console.log(x));
//   return(
//    <div className= "main">
//      {
//        countries.map( x => <Showdata name={x.name} capital= {x.capital} flag={x.flag} ></Showdata>)
//      }
//    </div> 
//   )
// }
// // trying
// function Showdata(props){
  

//   return(
//     <div className='single-country'>
//       <img src={props.flag} alt="" />
//       <h3>{props.name}</h3>
//       <h4>{props.capital}</h4>
//     </div>
//   )
// }

export default App;
