import React from 'react'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import './css/terms.css'
import { useUser } from './UserProvider'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const {user} = useUser()
  const navigate = useNavigate()

  if (user){
    return (
      <>
      <Header/>
      <>
  
      <div className='content_foot'>
        <h1>About Unique Gamer</h1>
  
      <p>Welcome to Unique Gamer, your portal to a world of laughter, challenge, and camaraderie in the gaming community. At Unique Gamer, we're dedicated to providing a unique and enjoyable gaming experience for players of all ages and skill levels.</p>
  
      <div className="cls">
      <h2>Our Mission</h2>
  
      <p>Our mission is to create a vibrant and inclusive gaming community where players can connect, discover new games, and share their passion for gaming with others. We believe that gaming is more than just entertainment. It's a way to foster friendships, stimulate creativity, and challenge ourselves to reach new heights.</p>
      </div>
  
      <div className="cls">
      <h2>Our Vision</h2>
  
      <p>Our vision is to be the go-to destination for gamers seeking laughter, challenge, and camaraderie. We strive to be a trusted source of gaming content, providing high-quality reviews, recommendations, and resources to help players make informed decisions about their gaming experiences.</p>
      </div>
  
      <div className="cls">
      <h2>Our Values</h2>
  
      <p><b>Passion:</b> We are passionate about gaming and dedicated to delivering the best possible experience for our community members.</p>
      <p><b>Inclusivity:</b> We welcome gamers of all backgrounds, identities, and abilities and strive to create a safe and welcoming space for everyone.</p>
      <p><b>Integrity:</b> We operate with honesty, transparency, and integrity in everything we do, earning the trust and respect of our community.</p>
      <p><b>Innovation:</b> We embrace innovation and creativity, constantly seeking new ways to enhance the gaming experience for our users.</p>
      </div>
  
      <div className="cls">
      <h2>Our History</h2>
      <p>Unique Gamer was founded in 2023 by Sichem, Neville, and Djaffoz with a vision to create a gaming community that celebrates diversity, creativity, and friendship. Since then, we have grown into a thriving community of passionate gamers from around the world, united by our love for gaming and our commitment to making unforgettable memories together.</p>
      </div>
  
      <div className="cls">
      <h2>Join Us</h2>
  
      <p>Whether you're a casual gamer looking for laughter and fun or a competitive player seeking new challenges, there's a place for you at Unique Gamer. Join us today and become part of our growing community!</p>
      </div>
  
      <h2>Contact Us</h2>
  
      <p>If you have any questions, feedback, or suggestions, please don't hesitate to <p><a href="mailto:djaffozpubg@gmail.com">contact us</a></p>. We're here to make your gaming experience truly unique and unforgettable.</p>
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
