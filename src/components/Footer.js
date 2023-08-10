import React from 'react'
// import './about.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

function Footer() {
  return (
    <div className='text-center bg-dark text-light h-100 border border-primary mt-5'>
      <div className="footer-content">
        <h4 className='mt-4'>
         <a href='https://linkedin.com/'target='blank'> <BsLinkedin className='text-light'/></a> &nbsp; &nbsp;
         <a href='https://github.com/'target='blank'><BsGithub className='text-light'/></a> &nbsp; &nbsp;
         <a href='https://facebook.com/'target='blank'><FaFacebookSquare className='text-light'/></a>
        </h4>
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer