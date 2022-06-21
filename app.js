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

// here we are assigning the parent container to a variable //
const sectionWorks = document.querySelector(".works");

const div01 = document.createElement('div');
div01.classList.add("work-item");
div01.classList.add("wi-01");
sectionWorks.appendChild(div01);


const div02 = document.createElement('div');
div02.classList.add("work-image");
div01.appendChild(div02);

const div03 = document.createElement('div');
div03.classList.add("work-content");
div01.appendChild(div03);

const projectTitle = document.createElement('h3');
projectTitle.classList.add("work-title");
projectTitle.textContent = "Multi-Post Stories Gain+Glory";
div03.appendChild(projectTitle);

const languages = document.createElement('ul');
languages.classList.add("cards");
div03.appendChild(languages);

const li01 = document.createElement('li');
li01.textContent = "Ruby on rails";
languages.appendChild(li01);

const li02 = document.createElement('li');
li02.textContent = "CSS";
languages.appendChild(li02);

const li03 = document.createElement('li');
li03.textContent = "JavScript";
languages.appendChild(li03);

const li04 = document.createElement('li');
li04.textContent = "HTML";
languages.appendChild(li04);

const seeProject =document.createElement('button');
seeProject.classList.add("see-project");
seeProject.type = "button";
seeProject.textContent = "See project";
div03.appendChild(seeProject);

// Create the array //

const projects = [
  {
    title: 'Multi-post stories gain + glory',
    languages: ['Ruby on rails ', 'css', 'javscript', 'html' ],
    buttonName: 'see project',
  }
]