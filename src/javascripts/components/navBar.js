function navBar() {
  document.querySelector('#navigation').innerHTML = `
    <nav id="nav-bar" class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark mb-4">
      <a class="navbar-brand title" href="#" id="brand">Matthew Gonzales</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#bio" id="bioNav">
            Bio 
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects" id="projectsNav">
            Projects
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#technology" id="technologyNav">
            Technology
          </a>
        </li>
      </ul>
    </nav>`;
}

export default navBar;
