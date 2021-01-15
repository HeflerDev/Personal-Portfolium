import './styles/master.scss';
import './modules/dom/nav';
import render from './modules/dom/render';

render.aboutTab()
  .scrollIntoView(true);
render.skillsTab();
render.portfolioTab();
render.contactTab();
