import React, { Component } from 'react'

export default class Carousel extends Component {

    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {height:800, duration: 2000, interval: 8000});
          });
    }


    render() {
        return (
            <div>
                <div className="slider">
                <ul className="slides">
                <li>
                    <img alt="peter_lynch" src="https://i.ibb.co/7XJw2tP/Peter-Lynch.jpg"/>
                    <div className="caption center-align">
                    <h3>The key to making money in stocks is not to get scared of them.</h3>
                    <h5 className="light grey-text text-lighten-3">- Peter Lynch</h5>
                    </div>
                </li>
                <li>
                    <img alt="benjamin_graham" src="https://i.ibb.co/z6YGTZj/ben-graham.jpg"/>
                    <div className="caption left-align">
                    <h3>Investors should purchase stocks like they purchase groceries, not like they purchase perfumes.</h3>
                    <h5 className="light grey-text text-lighten-3">- Benjamin Graham.</h5>
                    </div>
                </li>
                <li>
                    <img alt="warren_buffet" src="https://i.ibb.co/8jgPkNy/op090420-Warren-Buffett.jpg"/>
                    <div className="caption right-align">
                    <h3>The stock market is a device for transferring money from the impatient to the patient.</h3>
                    <h5 className="light grey-text text-lighten-3">- Warren Buffet</h5>
                    </div>
                </li>
                <li>
                    <img alt="walter_schloss" src="https://i.ibb.co/F5HBf9Q/The-Ultimate-Guide-to-Walter-Schloss-Investing-cover-min.jpg"/>
                    <div className="caption center-align">
                    <h3>Have patience. Stocks don't go up immediately.</h3>
                    <h5 className="light grey-text text-lighten-3">- Walter Schloss</h5>
                    </div>
                </li>
                </ul>
            </div>
        </div>
        )
    }
}
