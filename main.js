import headerHTML from './header';
import sectionHTML from './section';
import data from './datos';

document.querySelector('#app').innerHTML = headerHTML + sectionHTML;

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const sidenav = document.querySelector('.sidenav');

  menuIcon.addEventListener('click', function () {
    sidenav.classList.toggle('open');
  });
});

function handleNavClick(event) {
  const navLinks = document.querySelectorAll('#navList a');
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });
  event.target.classList.add('active');
  const targetSectionId = event.target.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetSectionId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error(`Element with id "${targetSectionId}" not found.`);
  }
}

const navLinks = document.querySelectorAll('#navList a');
navLinks.forEach((link) => {
  link.addEventListener('click', handleNavClick);
});

document.addEventListener('DOMContentLoaded', () => {
  const moreIcon = document.getElementById('moreIcon');
  const aboutMeContainer = document.getElementById('aboutMeContainer');

  let isAboutMeVisible = false;

  moreIcon.addEventListener('click', () => {
    moreIcon.style.transform = isAboutMeVisible ? 'rotate(0deg)' : 'rotate(90deg)';

    aboutMeContainer.classList.toggle('hidden');

    const maxAboutMeHeight = isAboutMeVisible ? 0 : aboutMeContainer.scrollHeight + 'px';

    aboutMeContainer.style.maxHeight = maxAboutMeHeight;

    isAboutMeVisible = !isAboutMeVisible;
  });
});

const profileImage = document.querySelector('.profileImage');

let isFlipped = false;

function handleImageClick() {
  isFlipped = !isFlipped;

  profileImage.classList.toggle('flipped');

  setTimeout(() => {
    profileImage.src = isFlipped ? data.github_avatar : data.avatar;
  }, 250);
}

profileImage.addEventListener('click', handleImageClick);

document.addEventListener('DOMContentLoaded', () => {
  const showSkillsBtn = document.getElementById('showSkillsBtn');
  const skillsContainer = document.getElementById('skillsContainer');

  showSkillsBtn.addEventListener('click', () => {
    skillsContainer.innerHTML = '';

    data.education.skillsLearned.forEach((skill, index) => {
      const skillElement = document.createElement('p');
      skillElement.textContent = skill;
      skillElement.classList.add('skillElement');
      skillsContainer.appendChild(skillElement);

      if (index < data.education.skillsLearned.length - 1) {
        const dashElement = document.createElement('span');
        dashElement.textContent = ' - ';
        dashElement.classList.add('dashElement');
        skillsContainer.appendChild(dashElement);
      }
    });
  });
});
