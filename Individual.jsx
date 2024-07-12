import React from 'react'
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';

export default function Individual() {
  const {user}=useUser()
  const navigate=useNavigate()

  if (user){
    return (
      <>
      <Header/>
      <>
      <div className='content_foot'>
        <h1>Individual</h1>
  
      <p>Welcome to the Individual section of Unique Gamer! Here, we provide personalized features and services to enhance your gaming experience based on your unique preferences and interests. Here's how we tailor our offerings just for you:</p>
  
      <div className="cls">
      <h2>1. Personalized Recommendations</h2>
  
      <p>Based on your gaming history, preferences, and interactions with our website, we curate personalized game recommendations to help you discover new titles that you'll love.</p>
      </div>
  
      <div className="cls">
      <h2>2. Customized Profiles</h2>
  
      <p>Create a personalized profile where you can showcase your gaming achievements, share your favorite games, and connect with other members of the Unique Gamer community who share your interests.</p>
      </div>
  
      <div className="cls">
      <h2>3. Exclusive Offers and Discounts</h2>
  
      <p>Receive exclusive offers and discounts on games, merchandise, and other products based on your gaming preferences and activity on our website.</p>
      </div>
  
      <div className="cls">
      <h2>4. Tailored Content</h2>
  
      <p>Enjoy customized content recommendations, including articles, videos, and news updates, that align with your gaming interests and preferences.</p>
      </div>
  
      <div className="cls">
      <h2>5. Community Engagement</h2>
  
      <p>Participate in personalized community events, challenges, and tournaments tailored to your gaming interests and skill level.</p>
      </div>
  
      <div className="cls">
      <h2>6. Feedback and Suggestions</h2>
  
      <p>Share your feedback and suggestions with us so we can continue to improve our services and provide a more personalized experience for you and other members of our community.</p>
      </div>
  
      <div className="cls">
      <h2>7. Privacy and Data Protection</h2>
  
      <p>Rest assured that we respect your privacy and protect your personal information. Your data is used solely to personalize your experience and will not be shared with third parties without your consent.</p>
      </div>
  
      <h2>Contact Us</h2>
  
      <p>If you have any questions, feedback, or suggestions regarding the Individual features and services offered by Unique Gamer, please don't hesitate to <p><a href="mailto:djaffozpubg@gmail.com">contact us</a></p>. We're here to ensure that your gaming experience is truly unique and enjoyable.</p>
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
