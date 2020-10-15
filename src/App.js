import React from 'react';
import Navbar from './navbar/navbar'
import Jumbotron from'./jumbotron/jumbotron'
import Whystock from'./body/whystock'
import Whyus from './body/whyus'
import Carousel from './carousel/carousel'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron/>
      <Whystock />
      <Carousel />
      <Whyus />
    </React.Fragment>
  );
}

export default App;
