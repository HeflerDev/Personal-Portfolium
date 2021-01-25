import inView from '../inView';
import render from './render';

const scrollListeners = () => {

  const containers = {
    about: document.getElementById('presentation-container'),
    skills: document.getElementById('skill'),
    portfolio: document.getElementById('github-container'),
    talkTo: document.getElementById('talk-to-container')
  }

  window.addEventListener('scroll', () => {
    (inView.isFullyInViewPort(containers.about)) ? 
      render.listeners.about.classList.add('active') :
      render.listeners.about.classList.remove('active');

    (inView.isFullyInViewPort(containers.skills)) ?
      render.listeners.skills.classList.add('active') :
      render.listeners.skills.classList.remove('active');

    (inView.isPartiallyInViewPort(containers.portfolio)) ?
      render.listeners.portfolio.classList.add('active') :
      render.listeners.portfolio.classList.remove('active');

    (inView.isFullyInViewPort(containers.talkTo)) ?
      render.listeners.contact.classList.add('active') :
      render.listeners.contact.classList.remove('active');
  });

  
   

};

export default scrollListeners;
