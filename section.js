import './style.css';
import data from './datos';

const sectionHTML = `
  <main>
    <section class="about-me" id="aboutme">
      <div>
        <h3>Hi, I am</h3>
        <h1>${data.name}</h1>
        <div class="professionContainer">
          <div class="professionTitle">
            <img id="moreIcon" class="moreImg" src="./assets/more.png" alt="more">
            <p class="profession">Web developer</p>
            <div class="social-links">
              <a href="https://github.com/JorgeGG55" target="_blank">
                <img class="social-images" src="./assets/github-logo.png" alt="GitHub">
              </a>
              <a href="https://www.linkedin.com/in/jorge-gravel/" target="_blank">
                <img class="social-images" src="./assets/linkedin-logo.png" alt="LinkedIn">
              </a>
              <a href="mailto:${data.email}" target="_blank">
                <img class="social-images" src="./assets/gmail-logo.png" alt="Gmail">
              </a>
            </div>
          </div>
          <div id="aboutMeContainer" class="hidden">
            <p>${data.aboutMe}</p>
          </div>
        </div>
      </div>
      <div>
        <img class="profileImage" src="${data.avatar}" alt="${data.name}-image">
      </div>
    </section>
    <section class="education" id="education">
      <div>
        <h2>Education</h2>
        <h3 class="educationText">${data.education.degree}</h3>
        <p class="educationText">${data.education.university}</p>
        <p class="educationText">${data.education.startYear} - ${data.education.graduationYear}</p>
        <button id="showSkillsBtn">Show skills learned</button>
        <div id="skillsContainer">
        </div>
      </div>
      <div>
      <img class="eduactionImg" src="${data.education.university_image}" alt="${data.education.university}-image">
      </div>
    </section>
    <section class="experience" id="experience">
      <div>
        <h2>Experience</h2>
        ${data.workExperience
          .map(
            (experience) => `
          <div class="experienceItem">
            <h3 class="experienceText">${experience.position}</h3>
            <p class="experienceText">${experience.startDate} - ${experience.endDate}</p>
            <p class="experienceText">${experience.description}</p>
          </div>
        `
          )
          .join('')}
      </div>
        ${data.workExperience
          .map(
            (experience) => `
          <div class="experienceImgContainer">
            <img class="experienceImg" src="${experience.company_image}" alt="${experience.company}-image">
          </div>
        `
          )
          .join('')}
    </section>
    <section class="projects" id="projects">
      <div>
        <h2>Projects</h2>
        ${data.projects
          .map(
            (projects) => `
          <div class="projectItem">
            <h3 class="projectText">${projects.title}</h3>
            <p class="projectText">${projects.description}</p>
            <p class="projectText"></p>
            <a class="projectLink" href="${projects.link}" target="_blank">
              Fyra.
            </a>
          </div>
        `
          )
          .join('')}
      </div>
        ${data.projects
          .map(
            (projects) => `
          <div class="projectImgContainer">
            <a href="${projects.link}" target="_blank">
              <img class="projectImg" src="${projects.preview}" alt="${projects.title}-image">
            </a>
          </div>
        `
          )
          .join('')}
    </section>
  </main>
`;

export default sectionHTML;
