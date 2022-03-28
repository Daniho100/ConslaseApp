import React from 'react'
import './OurPartners.css'
import Flutterwav from '../../assets/Flutterwav.svg'
import Uber from '../../assets/Uber.svg'
import Zapier from '../../assets/Zapier.svg'
import Airtel from '../../assets/Airtel.svg'
import etisalat from '../../assets/9mobile.svg'
import Accenture from '../../assets/Accenture.svg'
import Mckinsey from '../../assets/Mckinsey.svg'
import Googl from '../../assets/Googl.svg'



const OurPartners = () => {
  return (
    <div className='partner'>
       <div className='container partners'>
            <div className='row'>
                <div className='col-lg-6'>

                    <p className='text-title'>Over  1000+  jobs from top companies in our network</p>

                    <p className='text-body'>Every day we index millions of jobs directly from employer websites. We’re committed to accurate,
                     high-quality jobs so you won’t find old, duplicated, or spammy listings here.</p>

                     <p className='text-body'>Organize and automate your job search while at home or on the go. We’ll deliver new,
                      relevant jobs of interest straight to your inbox.</p>

                      <button className='btn btn-light learn-button'>Learn More</button>
                </div>

                
            
             <div className='col-lg-6 '>
             <div className='row'>
                <div className='col-sm-3'>
                     <img src={Flutterwav} className='how-it-works-img' alt='flutter' />
                    </div>
                    <div className='col-sm-3'>
                      <img src={Uber} className='how-it-works-img' alt='uber' />
                      </div>
                      <div className='col-sm-3'>
                     <img src={Zapier} className='how-it-works-img' alt='Zapier' />
                     </div>
                     </div>
    
                     <div className='row'>
                        <div className='col-sm-3'>
                     <img src={Airtel} className='how-it-works-img' alt='Airtel' />
                     </div>
                        <div className='col-sm-3'>
                     <img src={etisalat} className='how-it-works-img' alt='etisalat' />
                     </div>
                        <div className='col-sm-3'>
                     <img src={Accenture} className='how-it-works-img' alt='Accenture' />
                     </div>
                     </div>

                     <div className='row'>
                        <div className='col-sm-6'>
                     <img src={Mckinsey} className='partners-img1' alt='Mckinsey' />
                     </div>
                     <div className='col-sm-6'>
                     <img src={Googl} className='partners-img2' alt='GOOGLE' />
                     </div>
                     </div>
                 </div>
          </div>
       </div>
    </div>
  )
}

export default OurPartners