const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('brand')) {
      console.warn('You clicked the brand');
    }
    if (e.target.id.includes('bioNav')) {
      console.warn('You clicked the bioNav');
    }
    if (e.target.id.includes('projectsNav')) {
      console.warn('You clicked the projectsNav');
    }
    if (e.target.id.includes('technologyNav')) {
      console.warn('You clicked the technologyNav');
    }
  });
};

export default domEvents;
