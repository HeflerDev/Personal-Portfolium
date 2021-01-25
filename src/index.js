import './styles/master.scss';
import './modules/dom/nav';
import render from './modules/dom/render';
import scrollListeners from './modules/dom/scrollListeners';

render.aboutTab()
  .scrollIntoView(true);
render.skillsTab();
render.portfolioTab();
render.contactTab();

scrollListeners();
