import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  render() {
    return (

      <div className="card" >
        <img src={this.props.src}/>
        <h2>{this.props.country}</h2>
        <a href={this.props.link}> {this.props.tourism}</a>
      </div>
      
   
    );
  }
}


export default Cards;