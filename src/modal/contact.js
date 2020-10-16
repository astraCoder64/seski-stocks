import React, { Component } from "react";
import './contact.css'

export default class Contact extends Component {

    constructor(){
        super()
        this.state={
            name:"",
            query:"",
            message:""
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
    M.toast({html: 'Happy to here from you. Will contact you shortly !'})
  }

  render() {
    return (
      <div>
        <a className="waves-effect waves-light btn modal-trigger tooltipped" data-position="bottom" data-tooltip="hola Señor !" href="#contactus">
          Contact Us
        </a>

        <div id="contactus" className="modal">
          <div className="modal-content">
          <div className="navbar">
            <a className="waves-effect waves-red btn-flat tooltipped" data-position="bottom"
            data-tooltip="Close" id="close" onClick={this.handleClose}>
              <i className="material-icons">close</i></a>
              <h4 className="center" id="modhead">Contact Us!</h4>
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
