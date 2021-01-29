import './styles/master.scss';
import './modules/dom/listeners/nav';
import render from './modules/dom/render/render';
import scrollListeners from './modules/dom/listeners/scrollListeners';

render.aboutTab()
  .scrollIntoView(true);
render.skillsTab();
render.portfolioTab();
render.contactTab();

scrollListeners();
