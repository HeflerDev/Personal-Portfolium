import render from './render';

const nav = (() => {
  render.listeners.about.addEventListener('click', () => {
    render.aboutTab();
  });

  render.listeners.skills.addEventListener('click', () => {
    // Should display a tab
  });

  render.listeners.portfolio.addEventListener('click', () => {
    // Should display a tab
  });
  
  render.listeners.contact.addEventListener('click', () => {
    // Should display a tab
  });
})();

export default nav;
