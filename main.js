const grid = document.querySelector('#grid')
const slider = document.querySelector('#slider')

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

