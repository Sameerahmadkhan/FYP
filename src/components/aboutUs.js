import React from 'react'
import './about.css'
import { Navbar } from './Navbar'
function aboutUs() {
    const user = localStorage.getItem('userEmail')
  return (
    <div>
        < Navbar user={user} />
         <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-paragraph">
        
      In our final year project, we, a team of three enthusiastic individuals, embarked on a remarkable
       journey. With a blend of modesty and eagerness, we pooled our strengths to make our project 
      come to life.  Our project reflects not only our technical prowess but also
 the close bond we've formed as a team.Through collaboration and shared dedication, we've woven our diverse 
      skills into a project that truly shines.

{/* From countless discussions and brainstorming sessions to long hours of coding and testing, we've 
poured our hearts into every aspect. Our project reflects not only our technical prowess but also
 the close bond we've formed as a team. As we introduce our project on this platform, 
we invite you to explore the fruit of our labor—a testament to unity, creativity, and the unyielding pursuit of our goal.
    <br></br> */}
    If you ever have any questions or encounter any issues while browsing or
  making a purchase, please don't hesitate to reach out to us. Your satisfaction
   is of uor most importance to us, and we are dedicated to providing top-notch
    customer service and support.
      </p>
      <p className="about-us-paragraph">
        If you have any questions or need assistance, feel free to{' '}
        <a href="/contactUs">contact our customer support team</a>. Thank you for
        choosing us for your shopping needs!
      </p>
      <p className="about-us-paragraph">Happy shopping!</p>
      {/* <p className="about-us-footer">© 2023 Your eCommerce Store. All rights reserved.</p> */}
    </div>
    </div>
  )
}

export default aboutUs