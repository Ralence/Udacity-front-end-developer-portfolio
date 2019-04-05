const projectContainer = document.getElementById('my-projects');//select the HTML container for projects
//Store the projects in an array
const projects = [
    {
        name: 'Memory game',
        imageSrc: 'proj-pics/memory.png',
        link: 'https://github.com/Ralence/udacity-fed-memory--game'
    },
    {
        name: 'Arcade game',
        imageSrc: 'proj-pics/arcade.png',
        link: 'https://github.com/Ralence/Udacity-Classic-Arcade-Game-Clone'
    },
    {
        name: 'Feed Reader Testing',
        imageSrc: 'proj-pics/testing.png',
        link: 'https://github.com/Ralence/Udacity-Feed-Raeder-Testing'
    },
    {
        name: 'Restaurant Review App',
        imageSrc: 'proj-pics/restor.png',
        link: 'https://github.com/Ralence/Udacity-FEND-restaurant-review-app'
    }
];

//function that creates HTML for the project cards
function createProjectHTML(project) {

    const figure = document.createElement('figure');
    figure.className = 'project';

    const image = document.createElement('img');
    image.className = 'project-img';
    image.src = project.imageSrc;
    image.alt = `${project.name} project page picture`;
    figure.append(image);

    const figCap = document.createElement('figcaption');

    const projectHeading = document.createElement('h3');
    projectHeading.className = 'project-heading';
    projectHeading.innerHTML = project.name;
    figCap.append(projectHeading);

    const projectLink = document.createElement('a');
    projectLink.className = 'project-link';
    projectLink.href = project.link;
    projectLink.target ='_blank';
    projectLink.innerText = 'View on GitHub';
    figCap.append(projectLink);

    figure.append(figCap);

    return figure;
};
//Calls createProjectHTML to create HTML for each project and appends it to the projectContainer
function fillProjectsHTML(array) {
    array.forEach((project) => {
        return projectContainer.appendChild(createProjectHTML(project));
    });
};

fillProjectsHTML(projects);