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
