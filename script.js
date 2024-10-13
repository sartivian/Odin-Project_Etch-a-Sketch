 //reference to the container
 let container = document.getElementById("container");
 
function createOneDiv(){
    let oneDiv = document.createElement("div");
    oneDiv.classList.add("grid")
    container.appendChild(oneDiv);
}

function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
         createOneDiv(); 
        }
    }
}

createGrid();
//reference to grid box
let allGrid = document.getElementsByClassName("grid");

for (let i = 0; i < allGrid.length; i++) {
    allGrid[i].addEventListener("mouseover", () =>{
        allGrid[i].style.backgroundColor = "blue";
    })
}

