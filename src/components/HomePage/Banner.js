import React from 'react'
// import Bannerimg from '../../assets/banner.svg'
import './banner.css'

const Banner = () => {
  return (
          <div className='job-banner'>
              <div className='container'>
                 <div className='row'>
                <div className='col-lg-12 banner-img'>
                  <h5 className='banner-text'>Get a Job you actually like</h5>
                  <h5 className='banner-subtext'>Create an account and start applying</h5>
                  <button className='btn banner-button'>Get started</button>

                    </div>
                </div>
              </div>
          </div>
  )
}

export default Banner