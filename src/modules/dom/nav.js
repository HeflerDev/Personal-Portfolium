import render from './render';

const nav = (() => {
  render.listeners.about.addEventListener('click', () => {
    render.aboutTab()
      .scrollIntoView(true);
    
  });

  render.listeners.skills.addEventListener('click', () => {
    render.skillsTab()
      .scrollIntoView(true);
  });

  render.listeners.portfolio.addEventListener('click', () => {
    render.portfolioTab()
      .scrollIntoView(true);
  });
  
  render.listeners.contact.addEventListener('click', () => {
    render.contactTab()
      .scrollIntoView(true);
  });
})();

export default nav;
