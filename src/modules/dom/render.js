import Chart from 'chart.js';
import pageTxt from '../../assets/txt/pageTxt';

const render = (() => {
  const listeners = {
    about: document.getElementById('btn-about'),
    skills: document.getElementById('btn-skills'),
    portfolio: document.getElementById('btn-portfolio'),
    contact: document.getElementById('btn-contact')
  };

  const _createElement = (elId = null, elParent = 'content', elType = 'div', elClass = 'flex-grid') => {    
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

  const _textContainer = (elId, elParent, title, txt) => {
    _createElement(`big-container-${elId}`, elParent, 'div', ['big-container', 'box', 'center']);
    _createElement(elId, `big-container-${elId}`, 'div', ['small-container', 'flex-grid']); 
    _createElement(`image-container-${elId}`, elId, 'div', ['col-12', 'col-m-4']); 
    _createElement(`text-container-${elId}`, elId, 'div', ['col-12', 'col-m-8', 'flex-grid']);
    _createElement(`title-container-${elId}`, `text-container-${elId}`, 'div', ['col-12', 'minibox', 'center'])
    _createElement(`title-${elId}`, `title-container-${elId}`, 'div', 'subtitle')
      .innerHTML = '<h2>' + title + '</h2>';
    _createElement(`description-container-${elId}`, `text-container-${elId}`, 'div', ['col-12', 'minibox', 'center']);
    _createElement(`description-${elId}`, `description-container-${elId}`, 'div', 'body-text')
      .innerHTML = txt;
  };

  const _skillsContainer = (elId, elParent, title, obj) => {
    _createElement(elId, elParent, 'div', 'big-container');
    _createElement(`skill-block-${elId}`, elId, 'div', ['col-12', 'col-m-6', 'col-l-4', 'flex-grid']);
    _createElement(`skill-name-${elId}`, `skill-block-${elId}`, 'div', 'col-12') 
      .textContent = title;
    _createElement(`skill-graph-container-${elId}`, `skill-block-${elId}`, 'div', 'col-12');
    const graph = _createElement(`skill-graph-${elId}`, `skill-graph-container-${elId}`, 'canvas');
    return new Chart(graph, obj);  
  };

  const aboutTab = () => {
    if (document.getElementById('about-container')) {
      // Handle Error
      console.error('Error');
    } else {
      _createElement('about-container', 'content', 'div', ['box', 'no-space', 'flex-grid']);
      _textContainer('presentation-container', 'about-container', pageTxt.presentation.title, pageTxt.presentation.body);
      _textContainer('opportunity-container', 'about-container', pageTxt.searching.title, pageTxt.searching.body); 
      _textContainer('contact-container', 'about-container', pageTxt.contact.title, pageTxt.contact.body);
      _skillsContainer('skills-container', 'about-container', pageTxt.graphic.title, pageTxt.graphic.body);
      
    }
  };

  return {
    listeners,
    aboutTab
  }

})();

export default render;
