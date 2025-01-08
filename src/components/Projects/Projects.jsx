import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import bookheap from '../images/bookheap.png';
import chess from '../images/chess.png';
import shopping from '../images/shopping-app.png';
import travel from '../images/travel-log.png';
import definition from '../images/definition.png';
import memes from '../images/memes.png';
import superhero from '../images/superhero.png';
import monorepo from '../images/monorepo.png';
import kodecraft from '../images/kodecraft.png';
import courseApp from '../images/courseApp.png';
import chatGPT from '../images/chatGPT.png';
import challenges from '../images/frontend-challenges.png';
import github from '../images/github.png';
import pizzatime from '../images/pizzatime.png';
import solanaaid from '../images/solanaaid.png';
import jumpstart from '../images/jumpstart.png';

// Web projects
const webItem = [
  {
    link: 'https://pizza-time-with-react-rana.vercel.app/',
    title: 'Pizza Time',
    techStack: 'Technology used: React Js, Leaflet Maps API, Context API, UUID, Turso, Express Js',
    desc: 'Pizza Time is an e-commerce pizza delivery platform for a restaurant featuring an interactive menu with variety of opitons' ,
    image: pizzatime,
    color: '#E5E483',
    githubLink: 'https://github.com/cskfanbase43606/pizza-time-with-react/tree/main/my-project'
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
    image: jumpstart,
    color: '#FEA1A1'
    // githubLink: 'https://github.com/mittalsam98'
  },
  {
    link: 'https://chess-web-online.netlify.app/',
    title: 'Realtime Online Chess',
    techStack: 'Tech Stack- ReactJs, NodeJS, Express, Socket.io.',
    desc: 'Play real time chess with your friends online by sharing a link.',
    image: chess,
    color: '#d5ebda',
    githubLink:
      'https://github.com/mittalsam98?tab=repositories&q=chess&type=&language=javascript&sort=stargazers'
  },
  {
    link: 'https://solanaaid.now.sh/',
    title: 'Solana Aid',
    techStack: 'Tech Stack- Web3, React Js, Tailwind',
    desc: 'Solana web tools',
    image: solanaaid,
    color: '#f3e4f1',
    githubLink: 'https://github.com/mittalsam98/solanaaid'
  },
  {
    link: 'https://www.youtube.com/watch?v=Dlxz9RnltMA&ab_channel=SachinMittal',
    title: 'E-Commerce app',
    techStack: 'Tech Stack: Monorepo, Typescript, MERN',
    desc: 'It is a e-commerce app built in a MERN stack using Monorepo. This is 100% typescript.',
    image: monorepo,
    color: '#FEA1A1',
    githubLink: 'https://github.com/mittalsam98/E-commerce-app'
  },
  {
    link: 'https://courses-portal.netlify.app/',
    title: 'Course Selling App',
    techStack: 'Tech Stack: React JS, Tailwind CSS, Node JS, MongoDB, Razorpay for payments',
    desc: 'Separate User and Admin panels, User can purchase courses',
    image: courseApp,
    color: '#C1A4AA',
    githubLink: 'https://github.com/mittalsam98/Course-Selling-App'
  },

  {
    link: 'https://travel-log-frontend-two.vercel.app/',
    title: 'Travel Log',
    techStack: 'Tech Stack- MERN Stack, Mapbox',
    desc: 'A full stack application to store / list places you have visited. You can log every visit on map.',
    image: travel,
    color: '#EEA47F',
    githubLink:
      'https://github.com/mittalsam98?tab=repositories&q=travel&type=&language=javascript&sort=stargazers'
  },
  {
    link: 'https://chit-chat-gpt-app.vercel.app/',
    title: 'ChatGPT clone',
    techStack:
      'Tech Stack: Next.js 13, Tailwind CSS, Prisma, ZOD for validation, Recoil for state managements, TypeScript, OpenAI',
    desc: 'Chat GPT clone with signup and signin, previous chat save functionality',
    image: chatGPT,
    color: '#FFA6C9',
    githubLink: 'https://github.com/mittalsam98/chat-gpt-clone'
  },
  {
    link: 'https://bookheap-app.netlify.app/',
    title: 'Online Book Store',
    techStack: 'Tech Stack: MERN Stack',
    desc: 'It is a book selling web app built in a MERN stack . You can sell books by uploading images and can also see what others are selling.',
    image: bookheap,
    color: '#f3e4f1',
    githubLink:
      'https://github.com/mittalsam98?tab=repositories&q=bookheap&type=&language=javascript&sort=stargazers'
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
