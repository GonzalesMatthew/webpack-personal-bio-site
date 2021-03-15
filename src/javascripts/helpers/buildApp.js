import populateApp from '../components/app';
import populateBio from '../components/bio';
import populateContact from '../components/contact';
import navBar from '../components/navBar';
import populateTechnology from '../components/technology';

function buildApp() {
  populateApp();
  navBar();
  populateContact();
  populateBio();
  populateTechnology();
}

export default buildApp;
