const skills = ["Java", "JavaScript", "HTML", "CSS", "Git", "GitHub", "Docker",
"Angularjs", "Reactjs", "Nodejs", "Expressjs", "MongoDB", "MySQL", "Gradle",
"GitHub Actions" ];


addSkillsToList();









function addSkillsToList() {
    let ulElement = document.getElementById("skills-list");
    skills.forEach(item => {
        let liElement = document.createElement("li");
        liElement.classList.add("skill");

        liElement.textContent = item;
        ulElement.appendChild(liElement);
    })
}