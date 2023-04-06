
const projectsGrid = document.getElementById("projects-grid");

fetch("./projects.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(({name, code, index}) => {

            const projectElement = document.createElement("div");
            projectElement.classList.add("grid-item");

            const projectName = document.createElement("h2");
            projectName.innerHTML = name;
            projectElement.appendChild(projectName);
            
            const runButton = document.createElement("button");
            runButton.innerHTML = "Run";
            runButton.addEventListener("click", () => {
                window.location.href = `./${name}/index.html`;
            });
            projectElement.appendChild(runButton);

            const codeButton = document.createElement("button");
                codeButton.innerHTML = "Code";
                codeButton.onclick = function() {
                  window.location.href = code;
                };
            projectElement.appendChild(codeButton);
            
            projectsGrid.appendChild(projectElement);
        });
    });


    