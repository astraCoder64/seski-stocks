import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Contact from "../forms/contact";

export default class Navbar extends Component {
  componentDidMount() {
    const M = window.M;
    M.AutoInit();

    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".scrollSpy");
      var instances = M.ScrollSpy.init(elems, { throttle: 150 });
    });
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="black">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">
              <img
                alt="logo"
                width="30%"
                height="50px"
                src="https://i.ibb.co/9nfFKCq/stockertrans.png"
              />
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="left"></ul>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#welcome" className="waves-effect waves-light">
                  Welcome
                </a>
              </li>
              <li>
                <a href="#wss" className="waves-effect waves-light">
                  Why invest?
                </a>
              </li>
              <li>
                <a href="#wus" className="waves-effect waves-light">
                  Why us?
                </a>
              </li>
              <li>
                <Link to="/getstarted">
                  <button className="waves-effect waves-light btn">
                    Sign Up / Login
                  </button>
                </Link>
              </li>
              <li>
                <Contact />
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="#welcome" className="waves-effect waves-light">
              Welcome
            </a>
          </li>
          <li>
            <a href="#wss" className="waves-effect waves-light">
              Why invest?
            </a>
          </li>
          <li>
            <a href="#wus" className="waves-effect waves-light">
              Why us?
            </a>
          </li>
          <li>
            <Link to="/getstarted">
              <button className="waves-effect waves-light btn">
                Sign Up / Login
              </button>
            </Link>
          </li>
          <li>
            <Contact />
          </li>
        </ul>
      </div>
    );
  }
}
