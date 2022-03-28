import React from 'react'
import paystack from '../../assets/paystack.png'
import google from '../../assets/google.png'
import hr from '../../assets/hr.png'
import access from '../../assets/access.png'
import './recommended.css'

const Recommended = () => {
  return (
<div className='kontainer'>
    <div className='container'>
    <div className='row'>
        <div className='col-lg-12'>
        <h1 className='text-header-recommended'>Recommended Jobs</h1>
        </div>
    </div>
    </div>


<div className='container'>
    <div className='row'>
        <div className='col-lg-3 cards'>
        <button className='btn btn-light time-buttons-paystack'>Full Time</button>
            <img src={paystack} className='paystack' alt='paystack' />
            <p className='titles'>QA Engineer</p>

                <h5 className='titles'> Paystack</h5>
                <p className='address'>Lagos, Nigeria <a href className='apply'>Apply Now</a></p>
            </div>
            

            <div className='col-lg-3 cards'>
            <button className='btn btn-light time-buttons'>Part Time</button>
                <img src={google} className='Popular-img-google' alt='google' />
                <p className='titles'>Product Analyst</p>

                <h5 className='titles'> Paystack</h5>
                <p className='address'>Lagos, Nigeria <a href className='apply'>Apply Now</a></p>
            </div>

            <div className='col-lg-3 cards'>
            <button className='btn btn-light time-buttons'>Full Time</button>
                <img src={hr} className='Popular-img-hr' alt='hr' />
                <p className='titles'>HR Manager</p>

                <h5 className='titles'> Paystack</h5>
                <p className='address'>Lagos, Nigeria <a href className='apply'>Apply Now</a></p>
            </div>

            <div className='col-lg-3 cards'>
            <button className='btn btn-light time-buttons-access'>Full Time</button>
            <img src={access} className='Popular-img' alt='access' />
            <p className='titles'>QA Engineer</p>

            <h5 className='titles'> Paystack</h5>
            <p className='address'>Lagos, Nigeria <a href className='apply'>Apply Now</a></p>
        </div>
    </div>
</div>

 </div>
  )
}

export default Recommended