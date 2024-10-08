const skills = [ "Figma", "UX" , "HTML", "CSS", "JavaScript", "CI-CD", "Git", "React.js", "AWS", "MySQL"];


const projects = [
		{
        "title": "Chat Application",
        "description": "Chat application built using Socket.io library, Node.js, Express.js and React.js",
        "link": "https://github.com/7eet/"
    },
		{
        "title": "Weather Application",
        "description": "It will display all the basic weather details of the user provided location onto the screen. Used React.js and OpenWeather API",
        "link": "https://github.com/7eet/WeatherApp"
    },
    {
        "title": "Book Library",
        "description": "User can view list of books and read the summary of that book It is mobile responsive application",
        "link": "https://github.com/7eet/Book_Library"
    },
    {
        "title": "Random Quotes",
        "description": "It displays random quote on page and user can generate another by clicking on button. (I've used Quotable API for generating quotes)",
        "link": "https://github.com/7eet/Random-Quotes"
    },
    {
        "title": "UI Color",
        "description": "A web page which show the cards of colours with hex code value. I have created this for my reference for choosing the colors for UI designs.",
        "link": "https://github.com/7eet/ui-color"
    },
    {
        "title": "Text Editor",
        "description": "Simple Text Editor having similar features like notepad but it also has dark mode feature.",
        "link": "https://github.com/7eet/EditorJ"
    },
    {
        "title": "Duplicate File Checker",
        "description": "It is command-line application. User can see the list of duplicate files on given directory or folder and perform file related operation on that.",
        "link": "https://github.com/7eet/JProject/tree/master/DuplicateFileChecker"
    }
]


// const menuIcon = document.getElementById("menu-icon");
// const mobileMenu = document.getElementById("mb-menu");

const lightTheme = document.getElementById("light-theme");
const darkTheme = document.getElementById("dark-theme");

const html = document.querySelector("html");

let isLightTheme = true;






// actionEventOnMenuIcon();

addSkillsToList();

addProjectList();

toggleTheme();


function toggleTheme() {

    lightTheme.addEventListener("click", () => {
        if (!isLightTheme) {
            lightTheme.classList.add("toggle-theme");
            html.setAttribute("data-theme", "light");
            darkTheme.classList.remove("toggle-theme");
            isLightTheme = true;
        }
    })
    darkTheme.addEventListener("click", () => {
        if (isLightTheme) {
            darkTheme.classList.add("toggle-theme");
            html.setAttribute("data-theme", "dark")
            lightTheme.classList.remove("toggle-theme");
            isLightTheme = false;
        }
    });
};





// function actionEventOnMenuIcon() {
//     menuIcon.addEventListener("click", () => {
//         mobileMenu.classList.toggle("showMenu");
//     })
// }



function addSkillsToList() {
    let ulElement = document.getElementById("skills-list");
    skills.forEach(item => {
        let liElement = document.createElement("li");
        liElement.classList.add("skill");

        liElement.textContent = item;
        ulElement.appendChild(liElement);
    })
}

function addProjectList() {
    let projectList = document.getElementById("project-list");
    projects.forEach(item => {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");

        let cardHeaderDiv = document.createElement("div");
        cardHeaderDiv.classList.add("card-header");

        let cardHeader = document.createElement("h3");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");


        cardHeader.textContent = item.title;

        cardBody.textContent = item.description;

        cardFooter.innerHTML = `<a href=${item.link}>
        View on github
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
          <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
        </svg>
      </a>`


      cardHeaderDiv.appendChild(cardHeader);
      cardElement.appendChild(cardHeaderDiv);
      cardElement.appendChild(cardBody);
      cardElement.appendChild(cardFooter);

      projectList.appendChild(cardElement);

    })
}


window.onload = function() {
    lightTheme.classList.add("toggle-theme");
 }
