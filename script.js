 //reference to the container
 let container = document.getElementById("container");
 let newLine = document.createElement("br");
 
function createOneDiv(){
    let oneDiv = document.createElement("div");
    container.appendChild(oneDiv);
}

function createGrid() {
   
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
         createOneDiv(); 
        }
        container.appendChild(newLine);
    }
}