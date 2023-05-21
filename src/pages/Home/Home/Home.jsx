import React from 'react'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'
import Category from '../Category/Category'
import 'react-tabs/style/react-tabs.css';
import useTitle from '../../../hooks/useTitle';
import AOS from 'aos';
import Features from '../Features/Features';
import Facility from '../Facility/Facility';
const Home = () => {
  useTitle('Home')
  AOS.init();
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <Features></Features>
      <Facility></Facility>
    </div>
  )
}

export default Home