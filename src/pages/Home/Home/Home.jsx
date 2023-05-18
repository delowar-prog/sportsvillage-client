import React from 'react'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'
import Category from '../Category/Category'
import 'react-tabs/style/react-tabs.css';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
    </div>
  )
}

export default Home