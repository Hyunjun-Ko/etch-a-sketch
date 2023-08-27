const resetButton = document.querySelector('.reset');
const sizeButton = document.querySelector('.size');
const gridContainer = document.querySelector('.gridContainer');

function resetGrid(){
    const allGrid = document.querySelectorAll('.grid');
    for (let i = 0;i<allGrid.length;i++)
    {
        allGrid[i].style.backgroundColor = 'white';
    } 
};

// function that creates grid elements and resizes grid
function sizeGrid(){
    let size = prompt("Enter the size of the grid. (a number between 0 and 100)");

    // size limits
    if (size >= 100 || size <= 0)
    {
       alert('invalid input, defaulting to 16x16 grid'); 
       size = 16;
    }

    // remove previous grid if any
    gridContainer.replaceChildren();

    // creating grid of selected size
    for (let i = 0;i<size*size;i++)
    {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.padding = `${(960/size)/2}px`; // each padding of the square to fit container.
        grid.addEventListener("mouseover",()=>{
            grid.style.backgroundColor = "black";
        });
        gridContainer.appendChild(grid);
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    }
}

// reset button logic 
resetButton.addEventListener("click",()=>{
    resetGrid();
});

// resize grid button
sizeButton.addEventListener("click",()=>{
    sizeGrid();
});

// initializing grid
sizeGrid();