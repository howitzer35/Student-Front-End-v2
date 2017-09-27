import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (

  <div>
      {/* // <!---Carousel-----------------> */}

      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
          <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          <li data-target="#carousel-example-generic" data-slide-to="3"></li>
          <li data-target="#carousel-example-generic" data-slide-to="4"></li>
          </ol>

      {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="/images/T-I-China1-copy.jpg" alt="WHOA! That's a TEMPLE!" />
          </div>
          <div className="item">
              <img src="/images/Reykjavik-snjor-jan-2012-102-1-litil.jpg" alt="A bunch of tall buildings!" />
          </div>
          <div className="item">
            <img src="/images/pic2.jpg" alt="Some rocks! Love the rocks! Love them now." />
          </div>
          <div className="item">
              <img src="/images/ChugachMountains.jpg" alt="Mountains, Gandalf! Mountains!"/>
          </div>
          <div className="item">
              <img src="/images/OneWorldTrade.jpg" alt="A bunch of tall buildings!"/>
          </div>
        </div>

        {/* <!-- Controls --> */}
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      <div className="main-text hidden-xs">
        <div className="col-md-12 text-center">
          <div className="carousel-caption">
            <h1>Welcome to my Travel Site</h1>
            <p>There are lots of places in the world, and I haven't been to most.</p>
            <h2>Here are some of the ones I'd like to see.</h2>
          </div>
        </div>
      </div> 

  </div>
    );
  }
}

export default Hero;



