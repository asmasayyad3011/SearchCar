import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Package ' subtitle='Select Your Package for the best deals, offers and discounts on your dream car behalfs of choosen our system.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
