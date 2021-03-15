import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import navBar from './components/navBar';
import domEvents from './components/events/domEvents';
import showProjects from './components/projects';
import getProjects from './helpers/data/projectsData';

const init = () => {
  domEvents();
  navBar();
  getProjects().then((projects) => showProjects(projects));
};

init();
