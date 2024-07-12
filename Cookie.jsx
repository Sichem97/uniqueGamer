import React from 'react'
import './css/terms.css'
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';

export default function Cookie() {
  const {user}=useUser()
  const navigate = useNavigate()

  if (user){
    return (
      <>
      <Header/>
      <>
      <div className='content_foot'>
        <h1>Cookie Declaration</h1>
      <p>When you visit Unique Gamer, we use cookies and similar tracking technologies to enhance your browsing experience and provide personalized content. This Cookie Declaration explains what cookies we use, why we use them, and how you can manage your cookie preferences.</p>
  
      <div className="cls">
      <h2>1. Essential Cookies</h2>
  
      <p>These cookies are necessary for the operation of our website and enable core functionalities such as page navigation and access to secure areas of the website. You cannot opt out of these cookies as they are essential for the proper functioning of our website.</p>
      </div>
  
      <div className="cls">
      <h2>2. Performance Cookies</h2>
  
      <p>We use performance cookies to analyze how visitors use our website, which helps us improve its performance. These cookies collect information anonymously and do not identify individual users. We may use tools such as Google Analytics to track and report website traffic.</p>
      </div>
  
      <div className="cls">
      <h2>3. Functionality Cookies</h2>
  
      <p>Functionality cookies enable us to personalize your experience by remembering your preferences and settings. For example, we may use cookies to remember your language preferences or login credentials for future visits.</p>
      </div>
  
      <div className="cls">
      <h2>4. Targeting/Advertising Cookies</h2>
  
      <p>We may use targeting or advertising cookies to deliver advertisements that are relevant to your interests. These cookies may be placed by third-party advertising networks or social media platforms. We do not control the placement of these cookies, so please refer to the privacy policies of the relevant third parties for more information.</p>
      </div>
  
      <div className="cls">
      <h2>Managing Your Cookie Preferences</h2>
  
      <p>You can manage your cookie preferences and opt out of certain types of cookies by adjusting your browser settings. Most web browsers allow you to control cookies through their settings. Please note that blocking or deleting cookies may affect your browsing experience and functionality of our website.</p>
      </div>
  
      <h2>Consent</h2>
  
      <p><i> By continuing to use our website, you consent to the use of cookies as described in this Cookie Declaration. If you have any questions or concerns about our use of cookies, please <p><a href="mailto:djaffozpubg@gmail.com">contact us</a></p>.</i></p>
      </div>
      </>
      <Footer/>
      </>
    )
  }else{
    navigate ('/Login')
    return null
  }
}
