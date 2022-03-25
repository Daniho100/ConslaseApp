import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Recommended from './Recommended'
import HowItWorks from './HowItWorks'
import Popular from './Popular'
import OurPartners from './OurPartners'
import Customers from './Customers'
import Banner from './Banner'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <NavBar />
        {/* <Header /> */}
        <Recommended />
        <HowItWorks />
        <Popular />
        <OurPartners />
        <Customers />
        <Banner />
        <Footer />
    </div>
  )
}

export default Home