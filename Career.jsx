import React from 'react'
import './css/terms.css'
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';


export default function Career() {
  const {user}=useUser()
  const navigate = useNavigate()

  if (user){
    return (
      <>
      <Header/>
      <>
     
     <div className='content_foot'>
       <h1>Join Our Team</h1>
     
     <p>Are you passionate about gaming and looking to turn your hobby into a career? Join the Unique Gamer team and become part of a dynamic and innovative company that's shaping the future of gaming!</p>
     
     <div className="cls">
     <h2>Why Work With Us?</h2> <br />
     
     <p><b>Passionate Community:</b> Join a passionate community of gamers who share your love for gaming and are committed to creating unforgettable experiences for players around the world.</p> <br />
     
     <p><b>Opportunity for Growth:</b> Take your career to the next level with opportunities for growth and advancement within our organization. We believe in investing in our employees and providing them with the resources and support they need to succeed.</p> <br />
     
     <p><b>Innovative Environment:</b> Work in a fast-paced and collaborative environment where your ideas are valued, and innovation is encouraged. We're always looking for new ways to push the boundaries of gaming and provide our users with the best possible experience.</p>
     </div>
     
     <div className="cls">
     <h2>Current Openings</h2>
     <br />
     <p><span>Clan Validator : Validating Chef Clan</span></p>
     <br />
     <h3>Internship Opportunities</h3> <br />
     
     <p><span>- : -</span></p><br />
     
     <h3>How to Apply</h3> <br />
     
     <p>If you're interested in joining the Unique Gamer team, please send your resume and cover letter to [email address]. Be sure to include the position you're applying for in the subject line of your email.</p>
     </div>
     
     <div className="cls">
     <h2>Career Development</h2> <br />
     
     <p>At Unique Gamer, we're committed to helping our employees grow and develop their skills. We offer a range of professional development opportunities, including training programs, workshops, and mentorship initiatives, to help you reach your full potential.</p>
     </div>
     
     <h2>Contact Us</h2>
     
     <p>If you have any questions about career opportunities at Unique Gamer or would like more information, please don't hesitate to <p><a href="mailto:djaffozpubg@gmail.com">contact us</a></p>. We look forward to hearing from you!</p>
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
