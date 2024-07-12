import React from 'react'
import SuscribPremium from '../components/SuscribPremium/SuscribPremium'
import PremiumPopular from '../components/PopularPremium/PremiumPopular'
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';

export default function Premium() {
  const {user} = useUser()
  const navigate = useNavigate()

  if (user){
    return (
      <>
      {/* <form action="#" class="search-form">
        <input type="text" placeholder="Search for any game..." required/>
        <button class="material-symbols-outlined" type="sumbit">search</button>
      </form> */}
  
      <Header/>
      <>
      <div>
          <PremiumPopular />
          
          <SuscribPremium />
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
