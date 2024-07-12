import React from 'react';
import Header from '../common/header/Header';
import Footer from "../common/footer/Footer";
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';

export default function Resource() {
  const {user}=useUser()
  const navigate = useNavigate()

  if (user){
    return (
      <>
      <Header/>
      <>
      <div className='content_foot'>
        <h1>Resource Center</h1>
    
          <div className='cls'>
            <strong>Game Guides and Walkthroughs :</strong> Comprehensive guides and walkthroughs for popular games to help you navigate challenging levels, complete quests, and unlock achievements.
          </div>
          <div className='cls'>
            <strong>Tips and Tricks :</strong> Pro tips and strategies to improve your gameplay, master advanced techniques, and dominate the competition.
          </div>
          <div className='cls'>
            <strong>Gaming News and Updates :</strong> Stay informed about the latest gaming news, updates, and announcements from the world of gaming. Discover new releases, patch notes, and industry trends.
          </div>
          <div className='cls'>
            <strong>Hardware and Accessories :</strong> Reviews and recommendations for gaming hardware and accessories, including controllers, headsets, keyboards, mice, and more.
          </div>
          <div className='cls'>
            <strong>Indie Games Showcase :</strong> Explore our curated selection of indie games, showcasing innovative gameplay, captivating storytelling, and unique art styles from indie developers around the world.
          </div>
          <div className='cls'>
            <strong>Esports Coverage :</strong> Follow the exciting world of esports with coverage of tournaments, matches, and highlights from popular esports titles.
          </div>
          <div className='cls'>
            <strong>Game Development Resources :</strong> Resources and tools for aspiring game developers, including tutorials, software recommendations, and communities to help you kickstart your game development journey.
          </div>
          <div className='cls'>
            <strong>Community Forums :</strong> Join our vibrant community forums to connect with fellow gamers, share tips and strategies, ask questions, and discuss your favorite games.
          </div>
          <div className='cls'>
            <strong>Gaming Events Calendar :</strong> Stay up to date with upcoming gaming events, conventions, and conferences in our comprehensive events calendar. Plan your gaming calendar and never miss out on the latest happenings.
          </div>
          <div className='cls'>
            <strong>Gaming Charity Initiatives :</strong> Learn about gaming charity initiatives and organizations making a positive impact in the gaming community and beyond. Discover ways to get involved and support meaningful causes.
          </div>
      </div>
      </>
      <Footer/>
      </>
    );
  }else{
    navigate('/Login')
    return null
  }
}

