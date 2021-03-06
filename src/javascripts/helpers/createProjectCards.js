import printToDom from './printToDom';

const createProjectCards = (arrayOfObjects) => {
  let domString = '';

  arrayOfObjects.forEach((object) => {
    if (object.available === true) {
      domString += `
      <div class='card col-sm-3 mb-3'>
        <img src='${object.image}' class ='image-fluid' alt='project screenshot'>
          <div class='card-body'>
            <h5 class='card-title'>${object.title}</h5>
            <p class='card-text'>${object.description}</p>
            <p class='card-text'><small class='text-muted'>${object.technologiesUsed}</small></p>
            <p class='card-text'><small class='text-muted'>${object.netlify}</small></p>
            <p class='card-text'><small class='text-muted'>${object.githubUrl}</small></p>
            <p class='card-text'><small class='text-muted'>${object.loom}</small></p>
          </div>
      </div>`;
    }
  });
  printToDom('#projectsPage', domString);
};

export default createProjectCards;
