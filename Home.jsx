import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeM from '../components/ToolsPage/HomeM';
import Publicity from '../components/annocument/Publicity';
import Wrapper from '../components/wrapper/Wrapper';
import { useUser } from './UserProvider';
import './css/home.css';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  if (user) {
    return (
      <>
        <Header />
        <div className="hero-section">
          <div className="content row">
            <div className="column right">
              <h1>Find the right Game service, right away</h1>
              <p>
                Welcome to Unique, your portal to a world of laughter,
                challenge, and camaraderie! Tired of the same old games?
                Craving hilarious moments and rewarding discoveries? At Unique,
                you'll unearth a treasure trove of the funniest and most
                rewarding games, guaranteed to tickle your funny bone and push
                your skills to the limit. Not only can you delve into
                walkthroughs, esports highlights, and indie gems, but Unique
                fosters a vibrant community. Post or discover challenges, test
                your mettle against other players, and share experiences that
                fuel your passion for gaming. So, grab your controller, unleash
                your inner gamer, and join the fun! Let's make unforgettable
                memories together at Unique.
              </p>
              <div className="popular-tags">
                Popular:
                <ul className="tags">
                  <li>
                    <Link to="/Challenges" className="StartLink">
                      Tournaments
                    </Link>
                  </li>
                  <li>
                    <Link to="/Games" className="StartLink">
                      Games
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column left">{/* Add content here if needed */}</div>
          </div>
        </div>

        <HomeM />
        
        <Publicity />
        
        <Wrapper />
        
        <Footer />
      </>
    );
  } else {
    navigate('/Login'); 
    return null;
  }
}
