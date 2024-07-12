import React from 'react'
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';

export default function Health() {
  const {user}=useUser()
  const navigate = useNavigate()

  if (user){
    return (
      <>
      <Header/>
      <>
      <div className='content_foot'>
        <h1>Health Plan</h1>
  
      <p>Welcome to the Unique Gamer Health Plan! We care about the well-being of our community members and believe that maintaining good physical and mental health is essential for enjoying gaming to the fullest. Here are some tips and resources to help you stay healthy while gaming:</p>
  
      <div className="cls">
      <h2>1. Physical Health</h2> <br />
  
      <p><b>Take Regular Breaks:</b> Remember to take frequent breaks from gaming to stretch, move around, and give your eyes a rest. Aim for a 5 to 10-minute break every hour. </p> <br />
      
      <p><b>Stay Hydrated:</b> Drink plenty of water to stay hydrated, especially during long gaming sessions. Avoid excessive consumption of sugary or caffeinated beverages.</p> <br />
  
      <p><b>Practice Good Posture:</b> Maintain proper posture while gaming to prevent strain on your back, neck, and shoulders. Sit up straight with your feet flat on the floor and use ergonomic furniture if possible.</p><br />
  
      <p><b>Exercise Regularly:</b> Incorporate physical activity into your daily routine to counteract the sedentary nature of gaming. Even short walks or workouts can have a positive impact on your overall health.</p>
      </div>
  
      <div className="cls">
      <h2>2. Mental Health:</h2><br />
  
      <p><b>Manage Screen Time:</b> Set limits on your gaming sessions and avoid excessive screen time, which can lead to fatigue and eye strain. Balance gaming with other activities that promote relaxation and social connection.</p> <br />
  
      <p><b>Take Breaks for Self-Care:</b> Prioritize self-care activities such as meditation, relaxation exercises, or hobbies unrelated to gaming. Engage in activities that help you recharge and reduce stress.</p> <br />
  
      <p><b>Seek Support:</b> If you're experiencing stress, anxiety, or other mental health challenges, don't hesitate to reach out for support. Talk to friends, family members, or a mental health professional who can provide guidance and assistance.</p>
      </div>
  
      <div className="cls">
      <h2>3. Resources:</h2> <br />
  
      <p><b>Online Communities:</b> Connect with fellow gamers who share your interest in health and wellness. Join online communities or forums where you can exchange tips, support each other, and share your experiences.</p> <br />
  
      <p><b>Health Apps:</b> Explore health and wellness apps that can help you track your physical activity, monitor your screen time, and practice mindfulness or relaxation techniques.</p> <br />
  
      <p><b>Educational Materials:</b> Stay informed about health-related topics by reading articles, watching videos, or listening to podcasts about gaming health and wellness.</p>
      </div>
  
      <div className="cls">
      <h2>4. Disclaimer:</h2> <br />
  
      <p>The information provided in the Unique Gamer Health Plan is for educational purposes only and should not be considered medical advice. Consult with a qualified healthcare professional before making any changes to your health or gaming habits.</p>
      </div>
  
      <h2>Contact Us</h2>
  
      <p>If you have any questions or concerns about health and wellness while gaming, please <p><a href="mailto:djaffozpubg@gmail.com">contact us</a></p>. Your health and well-being are important to us, and we're here to support you on your gaming journey.</p>
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
