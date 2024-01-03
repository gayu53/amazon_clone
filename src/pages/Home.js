import React from 'react'
import Banner from '../components/Home/Banner'
import Products from '../components/Home/Products'
import HomeCard from '../components/Home/HomeCard'

function Home() {
  return (
    <div>
        <Banner/>
        <div className='home_comHomeCard w-full -mt-[340px]'>
          <HomeCard/>
        </div>
        <Products/>
    </div>
  )
}

export default Home

