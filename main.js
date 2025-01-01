const grid = document.querySelector('#grid');
const slider = document.querySelector('#slider');
const clear = document.querySelector('#clearButton');
const showGrid = document.querySelector('#toggleGrid');
let gridShown = 0;
slider.addEventListener('input', () => {
    grid.innerHTML = '';
    let gridSize = slider.value;
    let gridArea = gridSize**2;
    drawSquares(gridArea, gridSize);
});

function drawSquares(area, size) {
    for(i = 1; area >= i; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        if(gridShown)square.classList.add('outline');
        grid.appendChild(square);
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.flex = `1 0 calc(100% / ${size})`
        square.style.height = `calc(100% / ${size})`
    });
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        })
    });
}

clear.addEventListener('click', () => {
    grid.innerHTML = '';
    let gridSize = slider.value;
    let gridArea = gridSize**2;
    drawSquares(gridArea, gridSize);
})

showGrid.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    if(gridShown){
        squares.forEach((square) => {
            square.classList.remove('outline');
            gridShown = 0;
        })
    }
    else{
        squares.forEach((square) => {
            square.classList.add('outline');
            gridShown = 1;
        });
    }
});
drawSquares(256, 16);