import React from "react"
// import Awards from "./awards/Awards"
// import Featured from "./featured/Featured"
// import Recent from "./recent/Recent"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Team from "./team/Team"
import { useState, useEffect } from "react"

import axios from 'axios';

const Home = () => {


const [data, setData] = useState([]);

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:4000/data', {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/'
      }
    });
    setData(response.data);
  } catch (error) {
      console.error('Error retrieving data:', error);
    }
  }

useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <>
{console.log('data f home.jsx',data)}
      <Hero />
      {/* <Featured /> */}
      {/* <Recent /> */}
      <Location />
      <Team />
      {/* <Awards /> */}
      <Price />
    </>
  )
}

export default Home