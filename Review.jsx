import React from 'react'
import ReviewM from "../components/Review/ReviewM"
import Header from '../common/header/Header';
import Footer from "../common/footer/Footer";
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';

export default function Review() {
  const {user}=useUser()
  const navigate=useNavigate()

  if (user){
    return (
      <>
      <Header/>
      <>
      <div>
        <ReviewM/>
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
