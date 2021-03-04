import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import createProjectCards from './helpers/createProjectCards';
import projects from './helpers/data/projects';

const init = () => {
  createProjectCards(projects);
};

init();
