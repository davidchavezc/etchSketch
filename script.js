const grid = document.querySelector("#gridContainer");
let gridSize = 16;
let gridArea = gridSize**2;
function drawSquares(area){
    for(i = 0; area >= i; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
    }
}

drawSquares(gridArea);