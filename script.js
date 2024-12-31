const grid = document.querySelector("#gridContainer");
const sizePicker = document.querySelector('#sizeSlider')
let gridSize = sizePicker.value;
let gridArea = gridSize**2;
function drawSquares(area){
    for(i = 1; area >= i; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
    }
}

drawSquares(gridArea);
const squares = document.querySelectorAll('.square')
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('hovered');
    })
})

sizePicker.addEventListener('input', () => {
    let gridSize = sizePicker.value;
    console.log(gridSize);
    let gridArea = gridSize**2;
    drawSquares(gridArea);
});