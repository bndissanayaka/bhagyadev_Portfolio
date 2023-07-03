let projectData = [
  {
    image: "img/project-1.png",
    name: "My developer portfolio website",
    detail:
      "This is the portfolo website I built to introduce myself and showcase the porojects I worked on.",
    github: "#",
    live: "https://bhagyadev.com/",
    tags: "#javascript, #html, #css",
  },
  {
    image: "img/project-x.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
  {
    image: "img/project-x.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
  {
    image: "img/project-x.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
];

const createProjectCards = (data) => {
  let projectContainer = document.querySelector(".project-container");

  projectContainer.innerHTML += `
            <div class="project-card" data-tags="${data.tags}">
                <div id="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="img/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.github}" class="btn" id="projt-btn">github</a>
                        <a href="${data.live}" class="btn" id="projt-btn">see live</a>
                    </div>
                </div>
            </div>
    `;
};

projectData.forEach((data) => createProjectCards(data));
