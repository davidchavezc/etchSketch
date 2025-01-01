const grid = document.querySelector("#gridContainer");
const slider = document.querySelector('#sizeSlider')
const squares = document.querySelectorAll('.square')
let gridSize = sizePicker.value;
let gridArea = gridSize**2;
function drawSquares(area, size){
    for(i = 1; area >= i; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
    }
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.style.flex = `1 0 calc(100% / ${size})`
        square.style.height = `calc(100% / ${size})`
        console.log(square.style.flex);
    });
}

drawSquares(gridArea);
sizePicker.addEventListener('input', () => {
    const squares = document.querySelectorAll('.square')
    grid.innerHTML = '';
    let gridSize = sizePicker.value;
    let gridArea = gridSize**2;
    drawSquares(gridArea, gridSize);
});

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('hovered');
    })
})