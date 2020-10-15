import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./jumbo.css";

export default class Jumbotron extends Component {
  render() {
    return (
      <div id="welcome" className="container center hide-on-small section scrollspy">
        <div className="row hide-on-med-and-down">
          <img id="bigpic" width="90%" height="575px" src="https://i.ibb.co/9nfFKCq/stockertrans.png" />
        </div>
        <div className="row center">
          <p id="openpara">
            One app to
            <Typewriter
              className="typer"
              options={{
                strings: ["Track", "Notify", "Predict"],
                autoStart: true,
                loop: true,
                wrapperClassName: "typer",
                cursorClassName: "typecursor",
              }}
            />
          </p>
        </div>
      </div>
    );
  }
}
