const btn = document.querySelector('button.size');
const container = document.querySelector("div.container");

// Event delegation for "on-hover" for each div by the container
function changeColor(event) {
    if (event.target.classList.contains('cell')) {
        const cell = event.target;

        const computedStyle = window.getComputedStyle(cell);
        const background = computedStyle.backgroundColor;

        if (background === 'rgb(255, 255, 255)') {
            cell.style.backgroundColor = 'yellow';
        }
        else if (background === 'rgb(255, 255, 0)') {
            cell.style.backgroundColor = 'white';
        }
    }
}

container.addEventListener("mouseover", changeColor);

function changeGrid(event) {
    const input = prompt("What grid size would you like?", "2");
    const newSize = Number(input);

    createGrid(newSize);
}

btn.addEventListener('click', changeGrid);


function createGrid(size) {

    container.innerHTML = ''; // Clearing existing grid

    const newBasis = Math.floor(100 / size) - 0.2;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let newCell = document.createElement('div');
            container.appendChild(newCell);
            newCell.style.flex = `1 0 ${newBasis}%`;
            newCell.style.backgroundColor = 'white';
            newCell.style.outlineStyle = "solid";
            newCell.style.outlineWidth = "1px";
            newCell.style.outlineColor = "black";
            // Removes outline overlap
            newCell.style.marginTop = "1px";
            newCell.style.marginLeft = "1px";
            newCell.className = 'cell' + ' ' + i + ' ' + j;
        }
    }
}

createGrid(16);









