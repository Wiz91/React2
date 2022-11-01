import './App.css';
import Header from './components/Header';
import HomeCrousoul from './components/HomeCrousoul';
import About from './components/About';
import Furnitures from './components/Furnitures';
import Testimonial from './components/Testimonial';
import Contectus from './components/Contectus';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import React from 'react'

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
       <Route exact path='/' render={props =>
  <div>
    <Header />
    <HomeCrousoul />
  </div>} />
  <Route exact path='/About' render={props =>
  <div>
    <Header />
    <About/>
  </div>} />
  <Route exact path='/Furnitures' render={props =>
  <div>
    <Header />
    <Furnitures />
  </div>} /> 
  <Route exact path='/testimonial' render={props =>
  <div>
    <Header />
    <Testimonial/>
  </div>} />
     <Route exact path='/contectus' render={props =>
     <div>
        <Header />
       < Contectus/>
     </div>} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
