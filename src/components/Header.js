import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Header extends Component {
  render() {
    return (
        <>
    <header>
        <div class="header">
           <div class="container-fluid">
              <div class="row">
                 <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                    <div class="full">
                       <div class="center-desk">
                          <div class="logo">
                             <a href="index.html"><img src="assets/images/logo.png" alt="#" /></a>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                    <nav class="navigation navbar navbar-expand-md navbar-dark ">
                       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span>
                       </button>
                       <div class="collapse navbar-collapse" id="navbarsExample04">
                          <ul class="navbar-nav mr-auto">
                             <li class="nav-item active">
                               <Link to='/'><a class="nav-link">Home</a></Link>
                             </li>
                             <li class="nav-item">
                               <Link to="/About"><a class="nav-link">About</a></Link>
                             </li>
                             <li class="nav-item">
                               <Link to="/Furnitures"><a class="nav-link">Furnitures</a></Link>
                             </li>
                             <li class="nav-item">
                             <Link to="/testimonial"><a class="nav-link" href="testimonial.html">Testimonial</a></Link>
                             </li>
                             <li class="nav-item">
                             <Link to="/contectus"><a class="nav-link" href="contact.html">Contact Us</a></Link>
                             </li>
                             <li class="nav-item d_none">
                                <a class="nav-link" href="#"><i class="fa fa-user-circle padd_right" aria-hidden="true"></i>Login/Register</a>
                             </li>
                             <li class="nav-item d_none">
                                <a class="nav-link" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
                             </li>
                          </ul>
                       </div>
                    </nav>
                 </div>
              </div>
           </div>
        </div>
     </header>
     </>
    )
  }
}

export default Header
