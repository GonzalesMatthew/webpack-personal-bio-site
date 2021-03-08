const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark mb-4">
        <a class="navbar-brand title" href="#" id="brand">Matthew Gonzales</a>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="bioNav">
                Bio <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="projectsNav">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="technologyNav">Technology</a>
            </li>
          </ul>
          <div id="cart-button"></div>
          <div id="logout-button"></div>
      </nav>
    `;
};

export default navBar;
