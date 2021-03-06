import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import navBar from './components/navBar';
import projects from './helpers/data/projects';
import createProjectCards from './helpers/createProjectCards';
import domEvents from './components/events/domEvents';

const init = () => {
  navBar();
  createProjectCards(projects);
  domEvents();
};

init();
