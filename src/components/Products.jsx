import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <p>this is prodcuts page</p><Link to="/" className='underline'>Got to dashboard</Link>
    </div>
  )
}

export default Products
