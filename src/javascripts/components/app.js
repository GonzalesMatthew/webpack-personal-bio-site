const populateApp = () => {
  document.querySelector('#app').classList.add = 'justify-content-center p-5 mx-5 mt-3 mb-5 rounded shadow-lg';
  document.querySelector('#app').innerHTML = `
  <div id='navigation' class='pb-5 rounded shadow-lg'></div>
  <div id='contact' class='row d-flex justify-content-center p-5 mx-5 mt-3 mb-5 rounded shadow-lg'></div>
  <div id='bio' class='justify-content-center p-5 mx-5 mt-3 mb-5 rounded shadow-lg'></div>
  <div id='projects' class='p-5 mx-5 mt-3 mb-5rounded shadow-lg'></div>
  <div id='technology' class='p-5 mx-5 mt-3 mb-5rounded shadow-lg'></div>`;
};

export default populateApp;
