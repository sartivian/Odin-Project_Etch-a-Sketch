
 
 //reference to the container
 let container = document.getElementById("container");

 let defaultButton = document.getElementById("default")

 let sizeButton = document.getElementById("size");

 let randomButton = document.getElementById("random")

 let darkenButton = document.getElementById("darkening")

 createGrid(16);
 
 
 let ukuran = 0;

 defaultButton.addEventListener("click", ()=>{
    defaultColor()
 })

 darkenButton.addEventListener("click", ()=>{
    changeDarken()
 })

 randomButton.addEventListener("click", ()=>{
    randomColorHover()
 })



 sizeButton.addEventListener("click", ()=> {
    do {
        ukuran = +prompt("Enter the size you want (max: 100)");
    }
    while (ukuran > 100)
    console.log(ukuran)
    deleteAllGrid()
    createGrid(ukuran)
    defaultColor()
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
// randomColorHover()
defaultColor()
function defaultColor() {
    for (let i = 0; i < allGrid.length; i++) {
        allGrid[i].addEventListener("mouseover", () =>{
            allGrid[i].style.backgroundColor = "lightblue";
            allGrid[i].innerHTML = `${i + 1}`;
        })
    }
}

function randomColorHover() {
    for (let i = 0; i < allGrid.length; i++) {
        allGrid[i].addEventListener("mouseover", () =>{
            allGrid[i].style.backgroundColor = changeRandom();
            allGrid[i].innerHTML = `${i + 1}`;
        })
    }
}

function changeRandom(){
    let randNumA = Math.floor(Math.random() * 255) + 1
    let randNumB = Math.floor(Math.random() * 255) + 1
    let randNumC = Math.floor(Math.random() * 255) + 1
    let randomColor = `rgb(${randNumA},${randNumB},${randNumC})`
    console.log(randomColor);
    return randomColor
}

function changeDarken(){
    for (let i = 0; i < allGrid.length; i++) {
        allGrid[i].addEventListener("mouseover", () =>{
            function increase(i){
                let ambil = +(allGrid[i].style.opacity)
                console.log(ambil)
                let tambah = ambil + 0.1
                console.log(tambah)
                allGrid[i].style.backgroundColor = "black"
                allGrid[i].style.opacity = tambah
                console.log(allGrid[i].style.opacity)
                allGrid[i].innerHTML = `${i + 1}`;
            }
            increase(i)
            
        })
    }
    
}




