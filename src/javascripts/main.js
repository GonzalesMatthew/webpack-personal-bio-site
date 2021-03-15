import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import buildApp from './helpers/buildApp';
import domEvents from './components/events/domEvents';
import showProjects from './components/projects';
import getProjects from './helpers/data/projectsData';

const init = () => {
  buildApp();
  domEvents();
  getProjects().then((projects) => showProjects(projects));
};

init();
