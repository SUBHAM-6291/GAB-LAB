import React from 'react'
import HeroSection from './heroSection/HeroSection'
import Ranked from './ranked/Ranked'
import LiveFlamencoShows from './liveFlamencoShows/LiveFlamencoShows'
import Discover from './discover/Discover'

const homepage = () => {
  return (
    <div>
      <HeroSection/>
      <Ranked/>
      <LiveFlamencoShows/>
      <Discover/>
      
    </div>
  )
}

export default homepage
