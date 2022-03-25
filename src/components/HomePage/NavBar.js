import React from 'react'
import jobLogo from '../../assets/jobLogo.png'
import './Nav.css'
import client1 from '../../assets/client1.svg'
import {Link} from 'react-router-dom'
// import Popular from './Popular.js'
// import Recommended from './Recommended.js'
// import HowItWorks from './HowItWorks.js'
import paystac from '../../assets/paystac.svg'
import kpmg from '../../assets/kpmg.svg'
import minigoogle from '../../assets/minigoogle.svg'

const NavBar = () => {
  return (
    <div >
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <Link to='' className="navbar-brand" href="#"><img src={jobLogo} alt='logo'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
        <li className="nav-item">
          <Link to='' className="nav-link active" aria-current="page" >Company</Link>
        </li>
        <li className="nav-item">
          <Link to='' className="nav-link" href="#">Candidates</Link>
        </li>
        <li className="nav-item">
          <Link to='/Todos' className="nav-link" >Assesment</Link>
        </li>
        <li className="nav-item">
          <Link to='' className="nav-link" href="#">Post A Job</Link>
        </li>
        <li className="nav-item">
          <Link to='' className="nav-link" href="#">Career Advice</Link>
        </li>
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
        <button className="btn btn-light me-2" type="submit">Sign in</button>
        <button className="btn btn-success button" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>



        <div className='container '>
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

export default NavBar