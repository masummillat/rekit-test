import React, { Component } from 'react';

const  Hero =() =>{


    return (
        <div id="hero" className="Hero" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
          <div className="content">
            <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
            <h2>Season 2 now available</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
            <div className="button-wrapper">
              <HeroButton primary={true} text="Watch now" />
              <HeroButton primary={false} text="+ My list" />
            </div>
          </div>
          <div className="overlay"></div>
        </div>
    );

}

const HeroButton = ({primary,text}) => {

  return (
      <a href="#" className="Button" data-primary={primary}>{text}</a>
  );
}
export  default Hero ;
