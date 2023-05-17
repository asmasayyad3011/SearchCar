import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Dream Car ' subtitle="Let's keep it simple when it comes to your dream car." />

          <form className='flex'>
            <div className='box'>
              <span>Brand</span>
              <input type='text' placeholder='Brand' />
            </div>
            <div className='box'>
              <span>Car Type</span>
              <input type='text' placeholder='Car Type' />
              {/* <select name="cars" id="cars">
  <option value="Petrol">Petrol</option>
  <option value="Diesel">Diesel</option>
  <option value="CNG">CNG</option>
  <option value="EV">EV</option>
</select> */}
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4><label for="cars">Fuel Type:</label></h4>

<select name="cars" id="cars">
  <option value="Petrol">Petrol</option>
  <option value="Diesel">Diesel</option>
  <option value="CNG">CNG</option>
  <option value="EV">EV</option>
</select>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
