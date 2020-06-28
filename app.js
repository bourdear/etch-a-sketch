const container = document.getElementById("container");
let pixel = 16;

function makeRows(pixel) {
    container.style.setProperty('--grid-rows', pixel);
    container.style.setProperty('--grid-cols', pixel);
    for (c = 0; c < (pixel * pixel); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";

        cell.addEventListener("mouseenter", function(){
            cell.style.backgroundColor = 'black';

    });
}
}

makeRows(pixel);


function refreshPage() {
        while (container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        makeRows(pixel);
    }

function adjustSize() {
    pixel = prompt("How many pixels would you like?");
        while(pixel === null) {
            adjustSize();
        } if(isNaN(pixel)) {
            alert("Please enter a number.");
            adjustSize();
         } else if(pixel < 0) {
             alert("Please enter a positive number.");
         } else {
             pixel = Math.floor(pixel);
         
    }
    refreshPage();
    
}
    


    