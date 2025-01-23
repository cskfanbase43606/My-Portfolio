import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import bookheap from '../images/bookheap.png';
import travel from '../images/travel-log.png';
import definition from '../images/definition.png';
import memes from '../images/memes.png';
import superhero from '../images/superhero.png';
import monorepo from '../images/monorepo.png';
import kodecraft from '../images/kodecraft.png';
import courseApp from '../images/courseApp.png';
import challenges from '../images/frontend-challenges.png';
import github from '../images/github.png';
import pizzatime from '../images/pizzatime.png';
import solanaaid from '../images/solanaaid.png';
import xbeat from '../images/xbeat.png';

// Web projects
const webItem = [
  {
    link: 'https://pizza-time-with-react-rana.vercel.app/',
    title: 'Pizza Time',
    techStack: 'Technology used: React Js, Leaflet Maps API, Context API, UUID, Turso, Express Js',
    desc: 'Pizza Time is an e-commerce pizza delivery platform for a restaurant featuring an interactive menu with variety of opitons' ,
    image: pizzatime,
    color: '#E5E483',
    //githubLink: 'https://github.com/cskfanbase43606/pizza-time-with-react/tree/main/my-project'
  },
  {
    link: 'https://kodecraft-rana.vercel.app/',
    title: 'KodeCraft Solutions',
    techStack: 'Tech Stack: Next JS, Tailwind',
    desc: 'KodeCraft Solutions is a software solutions comapny providing business solutions through its cutting edge apps',
    image: kodecraft,
    color: '#0FFFFF'
    //githubLink: 'https://github.com/mittalsam98/profilee'
  },
  {
    link: 'https://xbeat-rana.vercel.app/',
    title: 'XBeat App',
    techStack: 'Technology used: Javascript, Reactjs, Prisma, SASS, Context API',
    desc: 'Audio Store eCommerce Website, built with React JS, state management using Context API.',
    image: xbeat,
    color: '#FEA1A1'
    // githubLink: ''
  }
  
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      
      {/* </ScrollAnimation> */}
    </div>
  );
}
