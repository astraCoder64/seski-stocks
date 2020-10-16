import React, { Component } from "react";
import './contact.css'

export default class Contact extends Component {

    constructor(){
        super()
        this.state={
            name:"",
            query:"",
            message:"",
            email:""
        }
    }

    handleChange=e=>{
        const {name,value}=e.target
     this.setState({
        [name]:value
     });
    }

  componentDidMount() {
    const M = window.M;
    M.AutoInit();
  }

  handleClose = () => {
    const M = window.M;
    const elem = document.querySelector("#contactus");
    let instance = M.Modal.getInstance(elem);
    instance.close();
  }

  handleSubmit = async() =>{
    // add post method here
    const M = window.M
    M.toast({html: 'Happy to hear from you. Will contact you shortly !'})
    this.setState({
      name:"",
      query:"",
      message:"",
      email:""
    })
    this.handleClose()
  }

  render() {
    return (
      <div>
        <a className="waves-effect waves-light btn modal-trigger tooltipped" data-position="bottom" data-tooltip="hola Señor !" href="#contactus">
          Contact Us
        </a>

        <div id="contactus" className="modal">
          <div className="modal-content">
            <h4 id="modhead" className="center">Contact us!</h4>
            <div className="row">
              <form className="col s12">
              <div class="input-field col s12">
                <input id="name" type="text" class="validate" required/>
                <label for="name">Name</label>
              </div>
              </form>
              <br/>
              <h5 id="toc" className="center">Type of communication</h5>
              <label className="col s12 m4">
                <input name="group1" type="radio" required/>
                <span>Suggestion</span>
              </label>
              <label className="col s12 m4">
                <input name="group1" type="radio" required/>
                <span>Request</span>
              </label>
              <label className="col s12 m4">
                <input name="group1" type="radio" required/>
                <span>Complaint</span>
              </label>
              <form className="col s12">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate" required/>
                <label for="email">Email-ID</label>
                <span class="helper-text" data-error="Wrong" data-success="Right">Hello!</span>
              </div>
              </form>
              <form className="col s12">
              <div class="input-field col s12">
                <input id="msg" type="text" class="validate" data-length="250" required/>
                <label for="msg">Message</label>
              </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <a className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleSubmit}>Submit
                <i className="material-icons right">send</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
