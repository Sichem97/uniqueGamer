import React from 'react'
import './css/terms.css'
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';

export default function Privacy() {
  const {user}=useUser()
  const navigate = useNavigate()
  if (user){
    return (
      <>
      <Header/>
      <>
      <div className='content_foot'>
      <h1>Privacy Policy</h1>
  
      <p>Welcome to Unique Gamer! We value your privacy and want you to be familiar with how we collect, use, and protect your personal information. This Privacy Policy explains what information we collect, why we collect it, and how we use it when you use our website ("Service").</p>
  
      <div className="cls">
      <h2>Information We Collect</h2>
  
      <p>When you visit Unique Gamer, If you choose to register an account or participate in our community features, we may also collect personal information such as your Pseudo, clan, and other contact details.</p>
      </div>
  
      <div className="cls">
      <h2>How We Use Your Information</h2>
  
      <p>We use the information we collect to provide and improve our Service, personalize your experience, communicate with you, and analyze how our website is used. We may also use your information to send you promotional or marketing communications, but you can opt out of these at any time.</p>
      </div>
  
      <div className="cls">
      <h2>Sharing Your Information</h2>
  
      <p>We may share your personal information with third-party service providers who assist us in operating our website, conducting our business, or serving you. We may also disclose your information in response to legal requirements, enforce our policies, or protect our rights.</p>
      </div>
  
      <div className="cls">
      <h2>Data Security</h2>
  
      <p>We take the security of your personal information seriously and take reasonable measures to protect it from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
      </div>
  
      <div className="cls">
      <h2>Your Choices</h2>
  
      <p>You have the right to access, update, or delete your personal information at any time. You can also choose to opt out of receiving promotional communications from us by following the instructions provided in those communications.</p>
      </div>
  
      <div className="cls">
      <h2>Changes to This Privacy Policy</h2>
  
      <p>We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      </div>
  
      <h2>Contact Us</h2>
  
      <p>If you have any questions or concerns about our Privacy Policy or our practices regarding your personal information, please <p><a href="mailto:djaffozpubg@gmail.com">contact us</a></p></p>
      </div>
      </>
      <Footer/>
      </>
    )
  }else{
    navigate('/Login')
    return null
  }
}
