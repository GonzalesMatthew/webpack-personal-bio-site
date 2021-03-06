const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('bioNav')) {
      document.querySelector('#bioPage').style.display = 'block';
      document.querySelector('#projectsPage').style.display = 'none';
      document.querySelector('#technologiesPage').style.display = 'none';
    }
    if (e.target.id.includes('projectsNav')) {
      document.querySelector('#bioPage').style.display = 'none';
      document.querySelector('#projectsPage').style.display = 'block';
      document.querySelector('#technologiesPage').style.display = 'none';
    }
    if (e.target.id.includes('technologyNav')) {
      document.querySelector('#bioPage').style.display = 'none';
      document.querySelector('#projectsPage').style.display = 'none';
      document.querySelector('#technologiesPage').style.display = 'block';
    }
  });
};

export default domEvents;
