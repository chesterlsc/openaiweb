import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
    <h1 className="Chester">Hello, Chester Web Developer</h1>
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Discover the limitless possibilities of GPT-3 through our platform. Whether you're a seasoned developer or new to AI technology, we provide the resources and support for you to create something extraordinary. Join our community and embark on a journey of innovation and creativity. Let's build something amazing together with GPT-3 from OpenAI.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    
  </div>
);

export default Header;