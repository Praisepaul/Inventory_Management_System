import React, { useState } from 'react';
import '../assets/stylesheets/login.css';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import user_icon from '../assets/icons/person.png';
import email_icon from '../assets/icons/email.png';
import password_icon from '../assets/icons/password.png';
import back from '../assets/icons/back_button.png';

const LoginSignup = () => {
    const navigate = useNavigate();
    const [action,setAction] = useState("Login");
    const goBack = () => {
        navigate('/');
      };    
  return (
    <div className='container'>
        <button onClick={goBack} className="back-button">
          <img className='back-button-icon' src={back}></img>
      </button>
              <div className='header'>
                  <div className="text">{action}</div>
                  <div className="underline"></div>
              </div>
              <div className="inputs">
                  {action === "Login" ? <div></div> : <div className="input">
                      <img src={user_icon} alt="" />
                      <input type="text" placeholder='Name' />
                  </div>}

                  <div className="input">
                      <img src={email_icon} alt="" />
                      <input type="email" placeholder='Email Id' />
                  </div>
                  <div className="input">
                      <img src={password_icon} alt="" />
                      <input type="password" placeholder='Password' />
                  </div>
                  {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
                  <Link to={'/dashboard'}>
              <div className="submit-container">
                  <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login"); } }>Login</div>
              </div>
              </Link>
              </div>
                
          </div>
  )
}

export default LoginSignup