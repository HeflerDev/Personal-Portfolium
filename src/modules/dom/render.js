import Chart from 'chart.js';
import pageTxt from '../../assets/txt/pageTxt';
import validations from './validations';

import githubSvg from '../../assets/vectors/github_logo.svg';
import gmailSvg from '../../assets/vectors/gmail.svg';

import profilePic from '../../assets/img/profile_pic_round.png';

const render = (() => {
  const listeners = {
    about: document.getElementById('btn-about'),
    skills: document.getElementById('btn-skills'),
    portfolio: document.getElementById('btn-portfolio'),
    contact: document.getElementById('btn-contact'),
    start: document.getElementById('btn-start'),
    text: document.getElementById('change')
  };

  setTimeout(() => {
    setInterval(() => { 
      const array = [
        ' build solutions',
        ' create apps',
        ' solve problems',
        ' form ideas',
        ' improve concepts'
      ]
      const result = Math.floor((array.length - 0) * Math.random());
      listeners.text.innerHTML = array[result];
    }, 2000);
  }, 3000);

  const _createElement = (elId = null, elParent = 'content', elType = 'div', elClass = 'board') => {    
    const el = document.createElement(elType);
    if (Array.isArray(elClass) && elClass) {
      elClass.forEach((item) => {
        el.classList.add(item);
      });
    } else {
      el.classList.add(elClass);
    }
    if (elId) {
      el.id = elId
    };
    document.getElementById(elParent).appendChild(el); 
    return el;
  };

  const _textContainer = (elId, elParent, title, txt, img = null) => { 
    _createElement(`big-container-${elId}`, elParent, 'div', ['big-container', 'stack', 'center']);
    _createElement(elId, `big-container-${elId}`, 'div', ['small-container', 'board']); 

    _createElement(`asset-container-${elId}`, elId, 'div', ['col-12', 'col-l-4', 'queue']);
    const image = _createElement(`asset-${elId}`, `asset-container-${elId}`, 'img', 'asset');
    if (img) { image.src = img;}

    _createElement(`text-container-${elId}`, elId, 'div', ['col-12', 'col-l-8', 'board']);
    _createElement(`title-container-${elId}`, `text-container-${elId}`, 'div', ['col-12', 'queue', 'center'])
    _createElement(`title-${elId}`, `title-container-${elId}`, 'div', 'subtitle')
      .innerHTML = '<h2>' + title + '</h2>';
    _createElement(`description-container-${elId}`, `text-container-${elId}`, 'div', ['col-12', 'queue', 'center']);
    _createElement(`description-${elId}`, `description-container-${elId}`, 'div', 'body-text')
      .innerHTML = txt;
  };

  const _addContentTo = (elId, elParent, txt, img) => {
    _createElement(`sub-container-${elId}`, elParent, 'div', ['stack', 'center']);
    _createElement(elId, `sub-container-${elId}`, 'div', ['board', 'sub-container']); 

    _createElement(`img-container-${elId}`, elId, 'div', ['col-12', 'col-l-4']);
      const image = _createElement(`img-${elId}`, `img-container-${elId}`, 'img', 'sub-asset');
      if (img) { image.src = img }; 

    _createElement(`txt-container-${elId}`, elId, 'div', ['col-12', 'col-l-8', 'container', 'center']);
    _createElement(`txt-${elId}`, `txt-container-${elId}`, 'div', ['body-text', 'item'])
      .innerHTML = txt;
  };

  const _skillsContainer = (elId, elParent, title, body,  obj) => {
    _createElement(`big-container-${elId}`, elParent, 'div', ['big-container', 'stack', 'center']);
    _createElement(elId, `big-container-${elId}`, 'div', ['small-container', 'board', 'between']);
    
    _createElement(`skill-block-${elId}`, elId, 'div', ['col-12', 'col-l-5']);
      const graph = _createElement(`skill-${elId}`, `skill-block-${elId}`, 'canvas');
    _createElement(`skill-desc-${elId}`, elId, 'div', ['col-12', 'col-l-6', 'queue', 'body-text'])
      .innerHTML = body; 
    return new Chart(graph, obj); // the bug is because of this
  };

  const aboutTab = () => {
    if (validations.containerPresence('about-container')) {
      return document.getElementById('about-container');
    } else {
      const container = _createElement('about-container', 'content', 'div', ['stack', 'no-space', 'board']);
      _textContainer('presentation-container', 'about-container', pageTxt.presentation.title, pageTxt.presentation.body, profilePic);
      return container
    }
  };

  const skillsTab = () => {
   if (validations.containerPresence('skills-container')) {
     return document.getElementById('skills-container');
   } else {
     const container = _createElement('skills-container', 'content', 'div', ['stack', 'no-space', 'board']);
     _skillsContainer('skill', 'skills-container', pageTxt.graphic.title, pageTxt.graphic.body, pageTxt.graphic.data);
     return container;
   }
  };

  const portfolioTab = () => {
    if (validations.containerPresence('portfolio-container')) {
      return document.getElementById('portfolio-container');
    } else {
      const container = _createElement('portfolio-container', 'content', 'div', ['stack', 'no-space', 'board']);
      _textContainer('github-container', 'portfolio-container', pageTxt.portfolio.title, pageTxt.portfolio.body, githubSvg);

      const gamePath = pageTxt.portfolio.projects.phaserGame;
      _addContentTo('github-sub-container', 'github-container', gamePath.description, gamePath.img);
      const socialPath = pageTxt.portfolio.projects.socialNetwork;
      _addContentTo('github-sub-container2', 'github-container', socialPath.description, socialPath.img);
      const cssPath = pageTxt.portfolio.projects.csStack;
      _addContentTo('github-sub-container3', 'github-container', cssPath.description, cssPath.img);
      return container;
    }
  };

  const contactTab = () => {
    if (validations.containerPresence('contact-container')) {
      return document.getElementById('contact-container');
    } else {
      const container = _createElement('contact-container', 'content', 'div', ['stack', 'no-space', 'board']);
      _textContainer('talk-to-container', 'contact-container', pageTxt.contact.title, pageTxt.contact.body, gmailSvg);
      return container;
    }
  };

  return {
    listeners,
    aboutTab,
    skillsTab,
    contactTab,
    portfolioTab
  }

})();

export default render;
