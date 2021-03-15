import populateApp from '../components/app';
import populateBio from '../components/bio';
import populateContact from '../components/contact';
import populateTechnology from '../components/technology';

const buildApp = () => {
  populateContact();
  populateApp();
  populateBio();
  populateTechnology();
};

export default buildApp;
