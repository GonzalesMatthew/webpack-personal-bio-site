function navFunc(navBtn) {
  if (navBtn === 'navToBio') {
    document.querySelector('#bioPage').style.display = 'block';
    document.querySelector('#technologiesPage').style.display = 'none';
    document.querySelector('#projectsPage').style.display = 'none';
  } else if (navBtn === 'navToTechnologies') {
    document.querySelector('#bioPage').style.display = 'none';
    document.querySelector('#technologiesPage').style.display = 'block';
    document.querySelector('#projectsPage').style.display = 'none';
  } else if (navBtn === 'navToProjects') {
    document.querySelector('#bioPage').style.display = 'none';
    document.querySelector('#technologiesPage').style.display = 'none';
    document.querySelector('#projectsPage').style.display = 'block';
  }
}

export default navFunc;
