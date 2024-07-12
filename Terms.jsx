import React from 'react'
import './css/terms.css'
import Header from '../common/header/Header';
import Footer from "../common/footer/Footer";
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';

export default function Terms() {
  const {user}=useUser()
  const navigate=useNavigate()

  if (user){
    return (
      <>
      <Header/>
      <>
      <div className='content_foot'>
        <h1>Terms and Conditions</h1>
  
      <p>Welcome to Unique Gamer! These Terms and Conditions ("Terms") govern your access to and use of our website ("Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not access or use the Service.</p>
  
      <div className="cls">
      <h2>1. Use of the Service</h2>
  
      <p><i>1.1. You must be at least 13 years old to use the Service. By using the Service, you represent that you are at least 13 years old.</i></p>
  
      <p><i>1.2. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</i></p>
  
      <p><i>1.3. You agree to use the Service only for lawful purposes and in accordance with these Terms and all applicable laws and regulations.</i></p>
      </div>
  
      <div className="cls">
      <h2>2. Intellectual Property</h2>
  
      <p><i>2.1. The content on the Service, including text, graphics, images, videos, and other materials, is owned by Unique Gamer or its licensors and is protected by copyright and other intellectual property laws.</i></p>
  
      <p><i>2.2. You may not reproduce, distribute, modify, or create derivative works of the content without our prior written consent.</i></p>
      </div>
  
      <div className="cls">
      <h2>3. User Content</h2>
  
      <p><i>3.1. You may submit content to the Service, such as comments, reviews, or other user-generated material ("User Content").</i></p>
  
      <p><i>3.2. By submitting User Content, you grant Unique Gamer a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in any form, media, or technology.</i></p>
      </div>
  
      <div className="cls">
      <h2>4. Disclaimer of Warranties</h2>
  
      <p><i>4.1. The Service is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy, reliability, completeness, or timeliness of the content or the Service.</i></p>
  
      <p><i>4.2. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</i></p>
      </div>
  
      <div className="cls">
      <h2>5. Limitation of Liability</h2>
  
      <p><i>5.1. In no event shall Unique Gamer or its affiliates, directors, officers, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or goodwill, arising out of or in connection with your use of the Service.</i></p>
      </div>
  
      <div className="cls">
      <h2>6. Governing Law</h2>
  
      <p><i>6.1. These Terms shall be governed by and construed in accordance with the laws of Your Country, without regard to its conflict of law principles.</i></p>
      </div>
  
      <div className="cls">
      <h2>7. Changes to these Terms</h2>
  
      <p><i>7.1. We reserve the right to modify or update these Terms at any time without prior notice. Any changes will be effective immediately upon posting on this page.</i></p>
      </div>
  
      <div className="cls">
      <h2>8. Contact Us</h2>
  
      <p><i>8.1. If you have any questions or concerns about these Terms, please <p><a href="mailto:djaffozpubg@gmail.com">contact us</a></p>.</i></p>
      </div>
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
