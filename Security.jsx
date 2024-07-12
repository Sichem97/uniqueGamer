import React from 'react'
import './css/terms.css'
import Header from '../common/header/Header';
import Footer from "../common/footer/Footer";
import { useUser } from './UserProvider';
import { useNavigate } from 'react-router-dom';

export default function Security() {
  const {user}=useNavigate()
  const navigate=useNavigate()

  if (user){
    return (
      <>
      <Header/>
      <>
      <div className='content_foot'>
          <h1>Security</h1>
        <p>At Unique Gamer, we take the security of your personal information seriously and have implemented various measures to protect it from unauthorized access, disclosure, alteration, and destruction. These measures include:</p>
  
        <div className="cls">
        <p><b>Encryption:</b> We use industry-standard encryption protocols to secure data transmission over the internet, such as Transport Layer Security (TLS) technology, to ensure that your information is transmitted securely between your browser and our servers.</p>
        </div>
  
        <div className="cls">
        <p><b>Access Controls:</b> Access to your personal information is restricted to authorized personnel who need to know that information in order to operate, develop, or improve our Service. These individuals are bound by confidentiality obligations and may be subject to disciplinary action, including termination and criminal prosecution, if they fail to meet these obligations.</p>
        </div>
  
        <div className="cls">
        <p><b>Firewalls and Intrusion Detection Systems:</b> We employ firewalls and intrusion detection systems to monitor and block unauthorized access attempts to our servers and network infrastructure.</p>
        </div>
  
        <div className="cls">
        <p><b>Regular Security Audits:</b> We conduct regular security audits and assessments of our systems, processes, and infrastructure to identify and address any vulnerabilities or weaknesses that may pose a risk to the security of your personal information.</p>
        </div>
  
        <div className="cls">
        <p><b>Data Minimization:</b> We only collect and retain the personal information that is necessary for the purposes outlined in this Privacy Policy, and we do not store your personal information for longer than is required or permitted by law.</p>
        </div>
  
        <div className="cls">
        <p><i>Despite our best efforts, no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</i></p>
        </div>
  
        <p><i>If you have any concerns about the security of your personal information or if you believe that your privacy has been compromised, <b>please <p><a href="mailto:djaffozpubg@gmail.com">contact us immediately</a></p>.</b></i></p>
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
