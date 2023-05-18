import React from "react"
// import { list } from "../../data/Data"

import { useState, useEffect } from "react"

import axios from 'axios';

const RecentCard = () => {

  const [data, setData] = useState([]);
  const firstTenItems = data.slice(0,12);

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
    {console.log(data)}
    {/* <div>
      <h1>Data Display</h1>
      {firstTenItems.map((item) => (
        <p key={item._id}>
          Name: {item.name}, Price: {item.price}
        </p>
      ))}
    </div> */}
      <div className='content grid3 mtop'>
        {firstTenItems.map((val, index) => {
          const {Name, price, Milage, Engine,Fuel_type, sitting_capacity, body_type,
            //  transmission, feutures,
              Brand, Image } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={Image} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: body_type === "For Sale" ? "#25b5791a" : "#ff98001a", color: body_type === "For Sale" ? "#25b579" : "#ff9800" }}>{body_type}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{ Brand}</h4>
                
                  {/* <i className='fa fa-location-dot'></i> */}
                  <span>{Milage} </span> 
                  <span> sitting_capacity: {sitting_capacity} </span> <br />
                  <span>{Fuel_type}</span> <br />
                <span>{Name}</span>
                {/* <span>{transmission}</span> */}
                
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button>
                  {/* <span>{feutures}</span> */}
                </div>
                <span>{Engine}</span>
                
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
