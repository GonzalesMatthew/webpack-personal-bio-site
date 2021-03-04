import printToDom from './printToDom';

const createProjectCards = (arrayOfObjects) => {
  let domString = '';

  arrayOfObjects.forEach((object) => {
    if (object.available === true) {
      domString += `
      <div class='card mb-3' style='max-width: 540px;'>
      <div class='row g-0'>
    <div class='col-md-4'>
      <img src='${object.screenshot}' alt='project screenshot'>
    </div>
    <div class='col-md-8'>
      <div class='card-body'>
        <h5 class='card-title'>${object.title}</h5>
        <p class='card-text'>${object.description}</p>
        <p class='card-text'><small class='text-muted'>${object.technologiesUsed}</small></p>
        <p class='card-text'><small class='text-muted'>${object.url}</small></p>
        <p class='card-text'><small class='text-muted'>${object.githubUrl}</small></p>
      </div>
    </div>
  </div>
      </div>`;
    }
  });
  printToDom('#projectsPage', domString);
};

export default createProjectCards;
