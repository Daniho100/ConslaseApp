import React from 'react'
import './popular.css'
import Health from '../../assets/Health.svg'
import Oil from '../../assets/Oil.svg'
import Account from '../../assets/Account.svg'
import Edu from '../../assets/Edu.svg'
import Laptop from '../../assets/Laptop.svg'
import DAM from '../../assets/DAM.svg'
import Security from '../../assets/Security.svg'
import Data from '../../assets/Data.svg'


const Popular = () => {
  return (
    <div className='kontainer'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                <h1 className='text-header-recommended'>Popular Categories</h1>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 product-cards'>
                    <img src={Oil} className='product-Img' alt='Oil' />
                <p className='product-text'>Oil and Gas</p>
                <p className='new-jobs'>(20 new jobs)</p>
                </div>

                <div className='col-lg-3 product-cards'>
                <img src={Health} className='product-Img' alt='health' />
                <p className='product-text'>HealthCare</p>
                <p className='new-jobs'>(10 new jobs)</p>
                </div>

                <div className='col-lg-3 product-cards'>
                <img src={Edu} className='product-Img' alt='edu' />
                <p className='product-text'>Education</p>
                <p className='new-jobs'>(10 new jobs)</p>
                </div>

                <div className='col-lg-3 product-cards'>
                <img src={Account} className='product-Img' alt='account' />
                <p className='product-text'>Accounting</p>
                <p className='new-jobs'>(10 new jobs)</p>
                </div>

            </div>
        </div>

        <div className='popular-container'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 product-cards'>
                    <img src={DAM} className='product-Img' alt='Oil' />
                    <p className='product-text'>Design, Art and Multimedia</p>
                    <p className='new-jobs'>(20 new jobs)</p>
                </div>

                <div className='col-lg-3 product-cards'>
                    <img src={Laptop} className='product-Img' alt='Oil' />
                    <p className='product-text'>Technology</p>
                    <p className='new-jobs'>(10 new jobs)</p>
                </div>
                
                <div className='col-lg-3 product-cards'>
                    <img src={Security} className='product-Img' alt='Oil' />
                    <p className='product-text'>Security</p>
                    <p className='new-jobs'>(10 new jobs)</p>
                </div>

                <div className='col-lg-3 product-cards'>
                    <img src={Data} className='product-Img' alt='Oil' />
                    <p className='product-text'>Data Analyst</p>
                    <p className='new-jobs'>(10 new jobs)</p>
                </div>
                </div>

            </div>
        </div>

</div>
  )
}

export default Popular
