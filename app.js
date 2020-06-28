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
        if(isNaN(pixel)) {
            alert("Please enter a number.");
         } else if(pixel < 0) {
             alert("Please enter a positive number.");
         } else {
             pixel = Math.floor(pixel);
         
    }
    makeRows(pixel);
}
    


    // window.location.reload();




// let box = document.querySelectorAll(".grid-item")[0];
// for(let i = 0; i < box.length; i++) {
//     box[i].addEventListener('mouseover', function(){box.style.background = "black"}, true );
// }

// box.addEventListener("mouseover", );


// document.addEventListener('mouseenter', function() {
//     document.getElementsByClassName("grid-items").backgroundColor = "black";
// });




// box.addEventListener("mouseover", function(event) {
// event.target.style.color = "black";
// });


// }
// // let mouseOverFunction = function (cell) {
// //     cell.style.backgroundColor = 'black';
// // };
// }

// cell.onmouseover = function() {cell.style.backgroundColor = "black"};
// div.addEventListener('mouseover', runEvent);
// function runEvent() {
//     div.style.backgroundColor = black;
// }


















// if (input = undefined) {
//     let input = 16;
// }
// function sketch() {
// for (let i=0; i < input; i++) {
//     for (let j=0; j < input; j++) {
//         let div = document.createElement("div");
//         div.style.maxWidth="100%";
//         div.style.maxHeight="100%";
//         div.style.objectFit="fill";
//         div.style.background = "gray";
//         div.style.border ="10px";
//         document.getElementById("container").appendChild(div);
//     }
//     let jump = document.createElement("br");
//     document.getElementById("container").appendChild(jump);
// }
// }
// sketch();