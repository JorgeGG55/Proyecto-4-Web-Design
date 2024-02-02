import './style.css';

const headerHTML = `
  <header>
    <div class="sidenav">
      <div class="menu-icon">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <nav>
        <ul id="navList">
          <li>
            <a href="#aboutme" class="active">About me</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
    <nav class="desktopNav">
        <ul id="navList">
          <li>
            <a href="#aboutme" class="active">About me</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
    </nav>
  </header>
`;

export default headerHTML;
