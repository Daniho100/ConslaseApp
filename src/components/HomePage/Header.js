import React from 'react'
import client1 from '../../assets/client1.svg'
import './header.css'
import Popular from './Popular.js'
import Recommended from './Recommended.js'
import HowItWorks from './HowItWorks.js'
import paystac from '../../assets/paystac.svg'
import kpmg from '../../assets/kpmg.svg'
import minigoogle from '../../assets/minigoogle.svg'
// import bg from '../../assets/bg.svg'


const Header = () => {
  return (
    <div className='kontainer'>
        <div className='container header-img'>
            <div className='row'>
                <div className='col-lg-6 header-text'>
                <h1 className='text-title'>Find a <span className='job-style'>job</span> easily</h1>
                <p className='text-body'>With verified, up-to-date job listings directly from employer websites,
                 we create a premium experience for job seekers, employers, and data seekers alike.</p>

                 <div className="input-group search-input">
                <input type="text"  placeholder="Enter text here" className='search'/>
                <input type="text"  placeholder="Location" className='search-double'/>
                
                <span className="input-group-text center" style={{ backgroundColor: '#06942A', color: 'white', fontSize: '25px', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', cursor: 'pointer', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center'   }}>
                  {/* <i><BiSearchAlt /></i> */}
                </span>

                <div className='brand' style={{ cursor: 'pointer'}}>

                <p className='title'>Trusted by:</p>
                        <img className='me-5' src={paystac} alt='paystack' />
                        <img className='me-5' src={minigoogle} alt='google' />
                        <img className='me-5' src={kpmg} alt='kpmg' />
                  </div>
              </div>
          </div>

                <div className='col-lg-6'>
                <img src={client1} className='clientimg' alt='client' />

                
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header