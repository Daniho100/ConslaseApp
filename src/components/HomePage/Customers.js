import React from 'react'
// import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import testimonial from '../../assets/testimonial.svg'
import NextArrow from '../../assets/NextArrow.svg'
import PrevArrow from '../../assets/PrevArrow.svg'
import './customers.css'


const Customers = () => {
  return (
      <div className='customer-container'>
    <div className='container text-heading'>
        <div className='row'>
            <div className='col-lg-5'>
                    <h5 className=' head-text'>What are our customers </h5>
                    <h5 className=' mb-2 header-text'>saying</h5>
                    <img src={testimonial} className='customer-img' alt='Testimonial' />
                </div>

            
                    <div className='col-lg-7'>
                         <p className='customer-text'>
                        The platform is really convenient to reach out to companies
                        & I have managed <br /> to secure 2 interviews already! 
                        can also track my application status instead of <br /> 
                        wondering whether the company has seen or shortlisted me.
                        </p>
                     <h4 className='customer-texts'>Irma Black</h4>
                    <h5 className='text-muted custom-texts'>HR Manager at MasterCard</h5>
                
                </div> 
                </div>
            </div>
            </div>
            
       
       
  )
}

export default Customers