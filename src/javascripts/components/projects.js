const showProjects = (array) => {
  document.querySelector('#projects').innerHTML = `
    <h2>Projects</h2>
    <br>
    <div id='project-cards' class="row justify-content-center p-5 mx-5 mt-3 mb-5 rounded shadow-lg"></div>`;

  array.forEach((object) => {
    if (object.available === true) {
      document.querySelector('#project-cards').innerHTML += `
        <div class='card v-25 m-3 p-4 shadow-lg rounded'>
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
};

export default showProjects;
