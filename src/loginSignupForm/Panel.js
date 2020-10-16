import React from 'react'
import './form.css'

function Panel({signupOn,signupOff}) {
  
  return (
    <div className="panels-container">
        <div className="pan left-pan">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Get started and access all your favourite stocks in one go! 
            </p>
            <button className="buton transparent" id="sign-up-btn" onClick={signupOn}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="imge" alt="" />
        </div>
        <div className="pan right-pan">
          <div className="content">
            <h3>Already have an account ?</h3>
            <p>
              Login to get access to your stock services!
            </p>
            <button className="buton transparent" id="sign-in-btn" onClick={signupOff}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="imge" alt="" />
        </div>
      </div>
  )
}

export default Panel