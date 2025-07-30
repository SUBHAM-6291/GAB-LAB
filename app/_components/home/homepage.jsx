import React from 'react'
import HeroSection from './heroSection/HeroSection'
import Ranked from './ranked/Ranked'
import LiveFlamencoShows from './liveFlamencoShows/LiveFlamencoShows'
import Discover from './discover/Discover'
import ContactUs from './contactUs/ContactUs'
import Testimonial from './testimonial/Testimonial'
import PaellaCookingClass from './paellaCookingClass/PaellaCookingClass'
import DelightTheSenses from './delightTheSenses/DelightTheSenses'
import LeaveUsReview from './leaveUsReview/LeaveUsReview'

const homepage = () => {
  return (
    <div>
      <HeroSection/>
      <Ranked/>
      <LiveFlamencoShows/>
      <PaellaCookingClass/>
      <Discover/>
      <DelightTheSenses/>
      <LeaveUsReview/>
      <Testimonial/>
      <ContactUs/>
      
    </div>
  )
}

export default homepage
