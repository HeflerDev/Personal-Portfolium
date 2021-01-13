import render from './render';

const nav = (() => {
  render.listeners.about.addEventListener('click', () => {
    render.aboutTab()
      .scrollIntoView(true);
    
  });

  render.listeners.skills.addEventListener('click', () => {
    render.skillsTab()
    document.getElementById('skills-container').scrollIntoView(true);
  });

  render.listeners.portfolio.addEventListener('click', () => {
    // Should display a tab
  });
  
  render.listeners.contact.addEventListener('click', () => {
    // Should display a tab
  });
})();

export default nav;
