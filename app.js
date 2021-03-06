const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.mobile-menu');

hamburguer.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const closing = document.querySelector('.close');

closing.addEventListener('click', () => {
  menu.classList.remove('active');
});

const closingItem = document.querySelector('.mobile-nav');

closingItem.addEventListener('click', () => {
  menu.classList.remove('active');
});

const sectionWorks = document.querySelector('.works');

// create the popup window for the mobile version //
const wrapPopup = document.createElement('div');
wrapPopup.classList.add('wrap-pop');
sectionWorks.appendChild(wrapPopup);

const mobilePopup = document.createElement('div');
mobilePopup.classList.add('popup-mb');
wrapPopup.appendChild(mobilePopup);

const closingPop = document.createElement('div');
closingPop.classList.add('img-pop');
mobilePopup.appendChild(closingPop);

const closeCross = document.createElement('button');
closeCross.classList.add('close-cross');
closeCross.innerHTML = '<i class="fa-solid fa-xmark"></i>';
closingPop.appendChild(closeCross);

const popImgDesk = document.createElement('img');
popImgDesk.classList.add('pop-img-desk', 'projectImg');
popImgDesk.src = './SS/index-program-desktop.png';
popImgDesk.alt = 'blue futurist image';
closingPop.appendChild(popImgDesk);

// image header for POPUP mobile//
const popImg = document.createElement('img');
popImg.classList.add('pop-img-mb', 'projectImg');
popImg.src = './SS/index-program-desktop.png';
popImg.alt = 'blue futurist image';
closingPop.appendChild(popImg);

// header container for POPUP //

const deskContainer = document.createElement('div');
deskContainer.classList.add('desk-container');
mobilePopup.appendChild(deskContainer);

const titlePop = document.createElement('h3');
titlePop.classList.add('title-pop');
titlePop.textContent = 'FOOD INDUSTRY GLOBAL SUMMIT 2022';
deskContainer.appendChild(titlePop);

// button container for POPUP desktop display //
const accesPop1 = document.createElement('div');
accesPop1.classList.add('bt-pop-desk');
deskContainer.appendChild(accesPop1);

const buttonPop3 = document.createElement('button');
buttonPop3.classList.add('see-project1');
buttonPop3.innerHTML = 'See live <i class="fa-solid fa-arrow-up-right-from-square"></i>';
accesPop1.appendChild(buttonPop3);

const buttonPop4 = document.createElement('button');
buttonPop4.classList.add('see-project1');
buttonPop4.innerHTML = 'See source <i class="fa-brands fa-github">';
accesPop1.appendChild(buttonPop4);

// languages cards POPUP //
const popupList = document.createElement('ul');
popupList.classList.add('cards-pop');
mobilePopup.appendChild(popupList);

const liPop1 = document.createElement('li');
liPop1.textContent = 'HTML';
popupList.appendChild(liPop1);

const liPop2 = document.createElement('li');
liPop2.textContent = 'CSS';
popupList.appendChild(liPop2);

const liPop3 = document.createElement('li');
liPop3.textContent = 'JavaScript';
popupList.appendChild(liPop3);

// POPUP description //
const textPop = document.createElement('p');
textPop.classList.add('p-pop');
textPop.textContent = "This project is based on an online website for a conference. The main objective is demonstrate ability to create UIs adaptable to different screen sizes using media queries. ";
mobilePopup.appendChild(textPop);

const accesPop = document.createElement('div');
accesPop.classList.add('bt-pop');
mobilePopup.appendChild(accesPop);

const buttonPop1 = document.createElement('button');
buttonPop1.classList.add('see-project1');
//buttonPop1.innerHTML = 'See live <i class="fa-solid fa-arrow-up-right-from-square"></i>';
accesPop.appendChild(buttonPop1);

const linkLive = document.createElement('a');
linkLive.href = 'https://cindydorantes.github.io/Capstone-project-Conference-page/index.html';
linkLive.innerHTML = 'See live <i class="fa-solid fa-arrow-up-right-from-square"></i>';
buttonPop1.appendChild(linkLive);

const buttonPop2 = document.createElement('button');
buttonPop2.classList.add('see-project1');
//buttonPop2.innerHTML = 'See source <i class="fa-brands fa-github">';
accesPop.appendChild(buttonPop2);

const linkSource = document.createElement('a');
linkSource.href = 'https://github.com/CindyDorantes/Capstone-project-Conference-page';
linkSource.innerHTML = 'See source <i class="fa-brands fa-github">';
buttonPop2.appendChild(linkSource);

// HERE BEGINS THE WORK CARDS //

const projects = [
  {
    title: 'Conference Page',
    languages: ['CSS', 'JavaScript', 'HTML'],
    buttonName: 'See Project',
    imageSrc: './SS/index-intro-desktop.png',
  },

  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'see project',
    imageSrc: '',
  },

  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'see project',
    imageSrc: '',
  },

  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'see project',
    imageSrc: '',
  },

  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'see project',
    imageSrc: '',
  },

  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'see project',
    imageSrc: '',
  },
];

// ----- HERE IS THE LOOP TO CREATE ALL CARDS -------- //

for (let i = 0; i < projects.length; i += 1) {
  // create the div that contains the card//
  const div01 = document.createElement('div');
  div01.classList.add('work-item');
  sectionWorks.appendChild(div01);
  // create the div that contains the image//
  const div02 = document.createElement('div');
  div02.classList.add('work-image');
  div01.appendChild(div02);
  const pImage = document.createElement('img');
  pImage.classList.add('projectImg')
  pImage.src = projects[i].imageSrc;
  div02.appendChild(pImage);
  // create the div that contains the project information//
  const div03 = document.createElement('div');
  div03.classList.add('work-content');
  div01.appendChild(div03);
  // create the project title//
  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('work-title');
  projectTitle.textContent = projects[i].title;
  div03.appendChild(projectTitle);
  // create the ul for the languages//
  const languages = document.createElement('ul');
  languages.classList.add('cards');
  div03.appendChild(languages);
  // create the li elements for each languages//
  for (let j = 0; j < (projects[i].languages.length); j += 1) {
    const li01 = document.createElement('li');
    li01.textContent = projects[i].languages[j];
    languages.appendChild(li01);
  }
  // create the button//
  const seeProject = document.createElement('button');
  seeProject.classList.add('see-project');
  seeProject.type = 'button';
  seeProject.textContent = projects[i].buttonName;
  div03.appendChild(seeProject);

  seeProject.addEventListener('click', () => {
    wrapPopup.classList.add('active');
  });
}

// Create event for opening Popup Window in mobile version //

popImg.addEventListener('click', () => {
  wrapPopup.classList.remove('active');
});

closeCross.addEventListener('click', () => {
  wrapPopup.classList.remove('active');
});

// FORM VALIDATION //

const email = document.getElementById('input-email');
const form = document.getElementsByTagName('form')[0];
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', (event) => {
  const emailAddress = email.value;
  if (emailAddress.toLowerCase() !== emailAddress) {
    errorMsg.innerHTML = 'E-mail address must be lowercase. The form will not be sent <i class="fa-solid fa-triangle-exclamation"></i>';
    errorMsg.classList.add('active');
    event.preventDefault();
  } else {
    errorMsg.classList.remove('active');
  }
});