import React from 'react'
import Trader from '../../assets/Trader.svg'
import Analyst from '../../assets/Analyst.svg'
import HrManager from '../../assets/HrManager.svg'
import checkbox from '../../assets/checkbox.svg'
import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <div className='kontainer'>
      <div className='container'>
            <div className='row'>
                <div className='col-lg-6 column1'>
                  <div className='analyst'>
                    <img src={Analyst} className='how-it-works-img' alt='Trader' />
                    </div>

                    <div className='manager'>
                    <img src={HrManager} className='how-it-works-img' alt='analyst' />
                    </div>

                    <div className='trader'>
                    <img src={Trader} className='how-it-works-img' alt='Manager' />
                    </div>
                </div>

                <div className='col-lg-6 column2'>
                <p className='text-titles'>How it works</p>
                <p className='text-body'>Get a job helps you find the right job easily. Getajob helps you find the right job easily.
                   Get a job helps you find the right job easily.</p>
                    
                   <p className='text-subtitles'>
                     <span>
                       <img src={checkbox}className='checkbox' alt=''/>
                       </span>Search Jobs</p>
                <p className='text-body'>We have jobs in the most popular industries and with top  companies.
                   Plus, you can create alerts so you never miss a job  opportunity.</p>

                   <p className='text-subtitles'>
                     <span>
                       <img src={checkbox}className='checkbox' alt=''/>
                     </span>Create a profile and Get noticed</p>

                <p className='text-body'>Create a profile to showcase your skills and  experience so recruiters can find you.
                   Upload your CV so you can apply for jobs quickly and easily.</p>

                   <p className='text-subtitles'>
                   <span>
                       <img src={checkbox}className='checkbox' alt=''/>
                     </span>Apply for jobs</p>
                <p className='text-body'>Find the training you need to improve your skills, 
                  or visit our Career Center for tips and advice to build your career.</p>
                </div>
                </div>
                </div>
    </div>
  )
}

export default HowItWorks