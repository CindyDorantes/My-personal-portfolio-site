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

// HERE BEGINS THE WORK CARDS //

// ----- FIRST WORK CARD -------- //

const sectionWorks = document.querySelector(".works");

// here we are assigning the parent container to a variable //

const projects = [
  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'see project',
  },

  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'see project',
  },

  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'see project',
  },

  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'see project',
  },

  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'see project',
  },

  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html'],
    buttonName: 'see project',
  }
];

// ----- HERE IS THE LOOP TO CREATE ALL CARDS -------- //

for (let i = 0; i < projects.length; i++) {
  // create the div that contains the card//
  const div01 = document.createElement('div');
  div01.classList.add("work-item");
  sectionWorks.appendChild(div01);
  //create the div that contains the image//
  const div02 = document.createElement('div');
  div02.classList.add("work-image");
  div01.appendChild(div02);
  //create the div that contains the project information//
  const div03 = document.createElement('div');
  div03.classList.add("work-content");
  div01.appendChild(div03);
  //create the project title//
  const projectTitle = document.createElement('h3');
  projectTitle.classList.add("work-title");
  projectTitle.textContent =  projects[i].title ;
  div03.appendChild(projectTitle);
  //create the ul for the languages//
  const languages = document.createElement('ul');
  languages.classList.add("cards");
  div03.appendChild(languages);
  //create the li elements for each languages//
  for (let j = 0; j < (projects[i].languages.length); j++) {
    const li01 = document.createElement('li');
    li01.textContent = projects[i].languages[j];
    languages.appendChild(li01);
  };
  //create the button//
  const seeProject = document.createElement('button');
  seeProject.classList.add("see-project");
  seeProject.type = "button";
  seeProject.textContent = projects[i].buttonName;
  div03.appendChild(seeProject);
};

// create the popup window for the mobile version //

const mobilePopup = document.createElement('div');
mobilePopup.classList.add("popup-mb");
sectionWorks.appendChild(mobilePopup);

const closingPop = document.createElement('span');
closingPop.classList.add("img-pop");
mobilePopup.appendChild(closingPop);

const popImg = document.createElement('img');
popImg.src = "./Images/popup.png";
popImg.alt = "blue futurist image";
closingPop.appendChild(popImg);

const titlePop = document.createElement('h3');
titlePop.classList.add("title-pop");
titlePop.textContent = "Keeping track of hundreds of components";
mobilePopup.appendChild(titlePop);

const popupList = document.createElement('ul');
popupList.classList.add("cards-pop");
mobilePopup.appendChild(popupList);

const liPop = document.createElement('li');
liPop.textContent = "Ruby on rail"
popupList.appendChild(liPop);

const liPop = document.createElement('li');
liPop.textContent = "css"
popupList.appendChild(liPop);

const liPop = document.createElement('li');
liPop.textContent = "JavScript"
popupList.appendChild(liPop);

const textPop = document.createElement('p');
textPop.classList.add("p-pop");
textPop.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";
mobilePopup.appendChild(textPop);

const accesPop = document.createElement('div');
accesPop.classList.add("bt-pop");
mobilePopup.appendChild(accesPop);

const buttonPop1 = document.createElement('button');
buttonPop1.classList.add("see-project1");
buttonPop1.textContent ="See live ";
buttonPop1.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i>';
accesPop.appendChild(buttonPop1);

const buttonPop2 = document.createElement('button');
buttonPop1.classList.add("see-project1");
buttonPop1.textContent ="See source ";
buttonPop1.innerHTML = '<i class="fa-brands fa-github">';
accesPop.appendChild(buttonPop1);










