import React, { useState } from 'react';
import VData from '../components/ToolsPage/VData';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserProvider';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer'
import './css/profile.css';

export default function Profile() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [showUpgradeInput, setShowUpgradeInput] = useState(false);
  const [upgradeStatus, setUpgradeStatus] = useState('');
  const [updateCode, setUpdateCode] = useState()
  
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };
  
  const handleUpgrade = () => {
    setShowUpgradeInput(true);
  };
  console.log(user);
  
  const handleUpgradeSubmit = (event) => {
    event.preventDefault();
  
    const isValidCode = VData.some((data) => data.cd === updateCode);
    
    if (isValidCode) {
      setUpgradeStatus('Upgrade succeeded');
      setUser((prevUser) => {
        const updatedUser = { ...prevUser, account: 'premium' };
        localStorage.setItem('user', JSON.stringify(updatedUser));

        return updatedUser;
      });
    } else {
      setUpgradeStatus('Invalid code. Please try again.');
    }
  
    setShowUpgradeInput(false);
  };

   const handleInputChange = (e) =>{
       setUpdateCode(e.target.value)
   }


return (
  <>
    
      {user ? (
        <>
        <Header/> 
        <div className='hook'>
        <div className="content-show">
          <div className={`box ${user.account}`}>
            <h1>Profile</h1>
            <p>Welcome {user.pseudo}</p>
            <p>ID: {user.ID}</p>
            <p>Clan: {user.clan}</p>
            <p>Profile: {user.account}</p>

            {user.account === "standard" && (
              <>
                {!showUpgradeInput && (
                  <button onClick={handleUpgrade}>Upgrade Profile</button>
                )}
                {showUpgradeInput && (
                  <>
                    <form onSubmit={handleUpgradeSubmit}>
                      <input type="text" name="account" placeholder="Enter validation code" onChange={handleInputChange} />
                      <button type="submit">Submit Code</button>
                    </form>
                  </>
                )}
                <p>{upgradeStatus}</p>
              </>
            )}

            
            {user.account === "premium" && (
              <>
              
              </>
            )}
          </div>
          <button onClick={handleLogout}>Log out</button>
        </div>
        </div>
        <Footer/>
        </>
      ) : (
        navigate("/Login")
      )}
  </>
);

}