import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Products = () => {
  const data = useLoaderData()
  const productData = data.data ;
  console.log(productData)


  return (

    <div>Productsjhjhh   </div>
  )
}

export default Products