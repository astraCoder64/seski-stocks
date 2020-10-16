import React, { Component } from 'react'
import './wus.css'

export default class Whyus extends Component {
    render() {
        return (
            <div id="wus" className="container section scrollspy">
                <p id="whyus" className="center">Now the question arises, why should you trust us with your money ?</p>
                <br/>
                <div className="row center">
                    <div className="col s12 m4">
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card hoverable">
                                <div className="card-image">
                                <img alt="free pic" src="https://i.ibb.co/d6fF3YG/free.jpg"/>
                                <span className="card-title" id="free">We are free</span>
                                </div>
                                <div className="card-content">
                                <p>We don't charge any brokerage for keeping a watch over your stocks.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card hoverable">
                                <div className="card-image">
                                <img alt="free pic" src="https://i.ibb.co/nckt2cL/automate.jpg"/>
                                <span className="card-title">Automated</span>
                                </div>
                                <div className="card-content">
                                <p>Let our system monitor your stocks while you do something else.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card hoverable">
                                <div className="card-image">
                                <img alt="free pic" src="https://i.ibb.co/HPGJ95p/Digital-Encryption-Lock-Conceptual-Illustration-Data-Safety-in-IT-Technology.jpg"/>
                                <span className="card-title">Secured</span>
                                </div>
                                <div className="card-content">
                                <p>No financial data collected and data is stored on cloud servers.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
