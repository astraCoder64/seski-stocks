import React, { Component } from 'react'
import './ws.css'

export default class Whystock extends Component {
    render() {
        return (
            <div id="wss" className="container section scrollspy">
                <div className="row">
                    <div className="col center m6 hide-on-med-and-down">
                    <img id="sgif" src="https://s.wsj.net/public/resources/images/ON-DE793_201909_G_20190830121038.gif"/>
                    </div>
                    <div className="col s12 l6">
                    <p className="why">Thinking of investing in stocks but afraid of loss ? Take the leap of faith and start investing in the stock market with us....</p>
                    <p className="why">But why should you invest in stock market ?</p>
                    <li>Win the race against inflation</li>
                    <li>Grants the user the super power of compunding</li>
                    <li>Enjoy the power of long term investment</li>
                    <p className="why">And lots of other things to learn and explore to earn money and get one step closer to your dream</p>
                    </div>
                </div>            
            </div>
        )
    }
}
