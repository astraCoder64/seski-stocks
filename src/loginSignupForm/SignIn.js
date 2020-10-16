import React from 'react'
import './form.css'

class SignIn extends React.Component {
  constructor(){
    super()
    this.state={
    email:'',
    password:''
    }
  }

  handleSubmit=e=>{
    e.preventDefault()
    console.log(this.state)
    this.setState({
      email:'',
      password:''
    })
  }

  handleChange=e=>{
    const {name,value}=e.target
  this.setState({
   [name]:value
  })
  }
 render(){
  return (
    <React.Fragment>
       <form className="sign-in-form" onSubmit={this.handleSubmit}>
            <h2 className="tit">Sign in</h2>
            <div className="in-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" name="email" 
              onChange={this.handleChange} value={this.state.email}/>
            </div>
            <div className="in-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password"
              onChange={this.handleChange} value={this.state.password}/>
            </div>
            <input type="submit" value="Login" className="buton soli" />
            <p className="social-text">Or Sign in Google</p>
            <div className="social-media">
              <a href="#!" className="social-icon">
                <i className="fas fa-google"></i>
              </a>
            </div>
          </form>
    </React.Fragment>
  )
}
 }

export default SignIn
