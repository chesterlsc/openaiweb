import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Unleashing the Power of AI: GPT-3 Explained',
    text: 'Discover how GPT-3 advanced natural language processing capabilities are revolutionizing industries and streamlining workflows.',
  },
  {
    title: 'Transforming Communication: GPT-3 Language Generation',
    text: ' Experience the future of communication with GPT-3 language generation, enhancing productivity and automating repetitive tasks.',
  },
  {
    title: 'Empowering Creativity: GPT-3 Content Creation',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'The Future of Problem Solving: GPT-3 Applications',
    text: 'Explore how GPT-3 assists with problem-solving across industries, reshaping approaches and paving the way for new opportunities.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;