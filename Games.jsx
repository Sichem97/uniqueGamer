import React from 'react'
import GameM from '../components/Games/GameM'
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';

export default function Games() {
  const {user}=useUser()
  const navigate=useNavigate()
  
  if (user){
    
  return (
    <>
    <Header/>
    <div>
      <GameM/>
    </div>
    <Footer/>
    </>
  )
  }else{
    navigate('/Login')
    return null
  }
}
