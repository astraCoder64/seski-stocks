import React, { useState } from 'react';
import './form.css'
import FormRender from './FormRender';
import Panel from './Panel';

function App() {
  const [signupmode,setSignupmode]=useState(false)

  const signupOn=()=>{
  setSignupmode(true)
  }

  const signupOff=()=>{
  setSignupmode(false)
  }

  return (
    <div className={signupmode===false?"cont":"cont sign-up-mode"}>
      <FormRender/>
      <Panel signupOn={signupOn} signupOff={signupOff}/>
    </div>
  );
}

export default App;