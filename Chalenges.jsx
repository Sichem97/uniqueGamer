import React from "react"
import Header from '../common/header/Header'
import Footer from "../common/footer/Footer";
import StandardPopular from "../components/PopularStandard/StandardPopular"
import SuscribStandard from "../components/SuscribStandard/SuscribStandard"
import { useUser } from "./UserProvider";
import { useNavigate } from "react-router-dom";


const Chalenges = () => {
  const {user} = useUser()
  const navigate = useNavigate()

  if (user){
    return (
      <>
      <Header/>
        <>
        {/* <form action="#" class="search-form">
                      <input type="text" placeholder="Search for any game..." required/>
                      <button class="material-symbols-outlined" type="sumbit">search</button>
        </form> */}
    
          <StandardPopular />
          
          <SuscribStandard/>
        </>
      <Footer/>
      </>
      )
  }else{
    navigate('/Login')
    return null
  }
}

export default Chalenges
