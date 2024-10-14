
 
 //reference to the container
 let container = document.getElementById("container");

 let sizeButton = document.getElementById("size");

 let randomButton = document.getElementById("random")



 createGrid(16);
 
 
 let ukuran = 0;

 sizeButton.addEventListener("click", ()=> {
    do {
        ukuran = +prompt("Enter the size you want (max: 100)");
    }
    while (ukuran > 100)
    console.log(ukuran)
    deleteAllGrid()
    createGrid(ukuran)
    randomColorHover()
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
    let divSize = (961.82 / (size)) - 2.22;
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

function defaultColor() {
    for (let i = 0; i < allGrid.length; i++) {
        allGrid[i].addEventListener("mouseover", () =>{
            allGrid[i].style.backgroundColor = "blue";
            allGrid[i].innerHTML = `${i + 1}`;
        })
    }
}

function randomColorHover() {
    for (let i = 0; i < allGrid.length; i++) {
        allGrid[i].addEventListener("mouseover", () =>{
            changeRandom();
            allGrid[i].innerHTML = `${i + 1}`;
        })
    }
}
randomColorHoverColor();

let randNum = Math.floor(Math.random() * 255) + 1
let randomColor = `rgb(${randNum},${randNum},${randNum})`

function changeRandom(){
    let randNumA = Math.floor(Math.random() * 255) + 1
    let randNumB = Math.floor(Math.random() * 255) + 1
    let randNumC = Math.floor(Math.random() * 255) + 1
    let randomColor = `rgb(${randNumA},${randNumB},${randNumC})`
    allGrid[0].style.backgroundColor = randomColor;
    console.log(randomColor);
}





