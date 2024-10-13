 
 
 //reference to the container
 let container = document.getElementById("container");

 let sizeButton = document.getElementById("size");

 createGrid(16);
 
 
 let ukuran = 0;

 sizeButton.addEventListener("click", ()=> {
    ukuran = +prompt("Enter the size you want (max: 100)");
    console.log(ukuran)
    deleteAllGrid()
    createGrid(ukuran)
    listenMouse()
 })

function deleteAllGrid(){
    while (allGrid.length !== 0) {
        deleteGrid();
    }
}

function deleteGrid(){
    for (let i = 0; i < allGrid.length; i++){
        allGrid[i].parentNode.removeChild(allGrid[i])
    }
}

function createOneDiv(size){
    let oneDiv = document.createElement("div");
    let divSize = (962.22 / (size + 1)) - 2.22;
    oneDiv.style.width = `${divSize}px`;
    oneDiv.style.height = `${divSize}px`;
    oneDiv.classList.add("grid");
    container.appendChild(oneDiv);
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
         createOneDiv(size); 
        }
    }
}


//reference to grid box

let allGrid = document.getElementsByClassName("grid");
listenMouse();
function listenMouse() {
    for (let i = 0; i < allGrid.length; i++) {
        allGrid[i].addEventListener("mouseover", () =>{
            allGrid[i].style.backgroundColor = "blue";
        })
    }
}





