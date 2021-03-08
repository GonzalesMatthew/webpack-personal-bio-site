import printToDom from './printToDom';

const createProjectCards = (arrayOfObjects) => {
  document.querySelector('#projectsPage').innerHTML = `
  <h2>Projects</h2>
  <br>
  <div id='project-cards' class="row m-4 d-flex justify-content-center"></div>`;
  let domString = '';

  arrayOfObjects.forEach((object) => {
    if (object.available === true) {
      domString += `
      <div class='card col-sm-3 mb-3'>
        <img src='${object.image}' class ='image-fluid' alt='project screenshot'>
          <div class='card-body'>
            <h5 class='card-title'>${object.title}</h5>
            <p class='card-text'>${object.description}</p>
            <p class='card-text'><small class='text-muted'><u>Technologies Used:</u><br>${object.technologiesUsed}</small></p>
            <p class='card-text'><small class='text-muted'><a href='${object.netlify}'>Deployed Site</a></small></p>
            <p class='card-text'><small class='text-muted'><a href='${object.githubUrl}'>GitHub Repo</a></small></p>
            <p class='card-text'><small class='text-muted'><a href='${object.loom}'>Video Walkthrough of App</a></small></p>
          </div>
      </div>`;
    }
  });
  printToDom('#project-cards', domString);
};

export default createProjectCards;
