import React from 'react';
import './css/terms.css'
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const {user}=useUser()
  const navigate = useNavigate()
  
  if (user){
    return (

      <>
      <Header/>
        <div className='content_foot'>  
          <p>Got a question or suggestion? We'd love to hear from you! Feel free to reach out to us using the form below. Whether it's feedback on our website, inquiries about our services, or simply sharing your gaming experiences, we're here to listen and assist you. Your input matters to us, and we are committed to providing the best gaming experience possible. Let's connect and make our gaming community even stronger</p>
  
            <div className="form_cont">
            <p><a href="mailto:djaffozpubg@gmail.com"><h1>Contact Us</h1></a></p>
            </div>
      </div>
      <Footer/>
      </>
    );
  }else{
    navigate('Login')
    return null
  }
}
