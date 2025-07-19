const projects= [
    {Title: "Rodgers and Hammerstein's Cinderella",
    Type: "Theatre Performance",
    Year: "2025",
    tags: ["dance","singing","acting","music","teamwork","creating a cohesive vision"],
    description: "BYU-Idaho performance project, worked in the Ensemble helping define the atmosphere of the show. Also a featured dance role, heavily involved in the vianese waltz number specifically.",
    img: ".portfolio/IMG-8034.jpg"},
    {Title: "Outlet Project",
    Type: "Magazine Publication",
    Year: "2024",
    tags:["teamwork", "creating a cohesive vision", "graphic design"],},
    {Title: "GSD Musical Devotionals",
    Type: "Lead of Creative Project",
    Year: ["2022", "2023"],
    tags:["creating a cohesive vision", "teamwork", "leadership", "music", "singing", "people skills"]},
    {Title: "Photoshoot",
     Type: "Photography",
     Year: "2024",
     tags: ["initiative", "creating a cohesive vision", "leadership", "people skills"],
     img: ".portfolio/scared.jpg"
    },

]

const projectlist = document.getElementById('project-list');

function projectTemplate(project){
	return `<section class="recipe-class">
		<img class="project.img" src="${project.image}">
		<section class="tags">
		${tagsTemplate(project.tags)}
		</section>
		<h2 class="project-name">${project.name}</h2>
		<section class= "project-type">${(project.type)}</section>
        <section class= "project-year">${(project.year)}</section>
		<p class="description">${project.description}</p>
	</section> `;	
};

function tagsTemplate(tags) {
	return `<section class="tags">${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</section>`;
};



function displayproject() {
	projectlist.innerHTML = projects.map(projectTemplate).join('');
};

displayproject();