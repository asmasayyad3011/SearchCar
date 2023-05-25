import React from "react"
// import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./signin.css"

const Signin = () => {
    return (
        <>
          <section className='signin'>
            <Back className='back' name='Register' title='Register yourself for best offers'  />
            <div className='container' >
              <form className='shadow' >
                <h4>Fillup The Form</h4> <br />
                <div> 
                  <input type='text' placeholder='Name' />
                  <input type='text' placeholder='Email' />
                  <input type='password' placeholder='Password' />
                  <input type='password' placeholder='Confirm Password' />
                </div>
                <button>Submit</button>
              </form>
            </div>
          </section>
        </>
      )

}

export default Signin