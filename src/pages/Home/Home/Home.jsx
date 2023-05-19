import React from 'react'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'
import Category from '../Category/Category'
import 'react-tabs/style/react-tabs.css';
import useTitle from '../../../hooks/useTitle';
import AOS from 'aos';
const Home = () => {
  useTitle('Home')
  AOS.init();
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
    </div>
  )
}

export default Home