import React, { Component } from 'react'
import Navbar from "../components/navbar/navbar";
import Jumbotron from "../components/jumbotron/jumbotron";
import Whystock from'../components/body/whystock'
import Whyus from '../components/body/whyus'
import Carousel from '../components/carousel/carousel'

export class home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
      <Jumbotron/>
      <Whystock />
      <Carousel />
      <Whyus />
      </React.Fragment>
    )
  }
}

export default home