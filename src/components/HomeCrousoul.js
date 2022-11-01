import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class HomeCrousoul extends Component {
  static propTypes = {

  }

  render() {
    return (
        <>
        <section class="banner_main">
        <div id="banner1" class="carousel slide" data-ride="carousel">
           <ol class="carousel-indicators">
              <li data-target="#banner1" data-slide-to="0" class="active"></li>
              <li data-target="#banner1" data-slide-to="1"></li>
              <li data-target="#banner1" data-slide-to="2"></li>
           </ol>
           <div class="carousel-inner">
              <div class="carousel-item active">
                 <div class="container-fluid">
                    <div class="carousel-caption">
                       <div class="row">
                          <div class="col-md-6">
                             <div class="text-bg">
                                <h1>Welcome</h1>
                                <span>car repair services</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                                <a href="#">More Info </a> <a href="#">Contact Us</a>
                             </div>
                          </div>
                          <div class="col-md-6">
                             <div class="text_img">
                                <figure><img src="assets/images/car.png" alt="#"/></figure>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="carousel-item">
                 <div class="container-fluid">
                    <div class="carousel-caption">
                       <div class="row">
                          <div class="col-md-6">
                             <div class="text-bg">
                                <h1>Welcome</h1>
                                <span>car repair services</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                                <a href="#">More Info </a> <a href="#">Contact Us</a>
                             </div>
                          </div>
                          <div class="col-md-6">
                             <div class="text_img">
                                <figure><img src="assets/images/car.png" alt="#"/></figure>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div class="carousel-item">
                 <div class="container-fluid">
                    <div class="carousel-caption">
                       <div class="row">
                          <div class="col-md-6">
                             <div class="text-bg">
                                <h1>Welcome</h1>
                                <span>car repair services</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                                <a href="#">More Info </a> <a href="#">Contact Us</a>
                             </div>
                          </div>
                          <div class="col-md-6">
                             <div class="text_img">
                                <figure><img src="assets/images/car.png" alt="#"/></figure>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
           <i class="fa fa-chevron-left mycss" aria-hidden="true"></i>
           </a>
           <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
           <i class="fa fa-chevron-right mycss" aria-hidden="true"></i>
           </a>
        </div>
    </section>
    <div class="three_box">
    <div class="container">
       <div class="row">
          <div class="col-md-4">
             <div class="box_text">
                <h3>AUTO DIAGNOSE</h3>
                <i><img src="assets/images/thr.png" alt="#"/></i>
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed d veniam, adipiscing elit, sed d veniam</p>
             </div>
          </div>
          <div class="col-md-4">
             <div class="box_text">
                <h3>AUTO DIAGNOSE</h3>
                <i><img src="assets/images/thr1.png" alt="#"/></i>
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed d veniam, adipiscing elit, sed d veniam</p>
             </div>
          </div>
          <div class="col-md-4">
             <div class="box_text">
                <h3>AUTO DIAGNOSE</h3>
                <i><img src="assets/images/thr2.png" alt="#"/></i>
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed d veniam, adipiscing elit, sed d veniam</p>
             </div>
          </div>
       </div>
    </div>
 </div>
 <br />
  </>
    )
  }
}

export default HomeCrousoul
