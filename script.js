const grid = document.querySelector("#gridContainer");

for(i = 0; 16 >= i; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
}