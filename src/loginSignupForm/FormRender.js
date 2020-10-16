import React from 'react'
import './form.css'
import SignIn from './SignIn'
import SignUp from './SignUp'

function FormRender() {
  return (
    <div className="forms-container">
      <div className="signin-signup">
        <SignIn/>
        <SignUp/>
      </div>
    </div>
  )
}

export default FormRender
