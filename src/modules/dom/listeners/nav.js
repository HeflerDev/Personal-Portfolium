import render from '../render/render';

const nav = (() => {

  render.listeners.portfolioHeader.addEventListener('click', () => {
    render.portfolioTab()
      .scrollIntoView(true);
  });

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

  render.listeners.contactHeader.addEventListener('click', () => {
    render.contactTab()
      .scrollIntoView(true);
  });

  render.listeners.start.addEventListener('click', () => {
    document.getElementById('about-container').scrollIntoView(true);
  });
})();

export default nav;
