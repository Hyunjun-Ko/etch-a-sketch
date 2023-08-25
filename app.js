const container = document.querySelector('.container');

let size = 16;
for (let i = 0;i<size*size;i++)
{
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.addEventListener("mouseover",()=>{
        grid.style.backgroundColor = "black";
    })
    container.appendChild(grid);
}

function resetGrid(){
    const allGrid = document.querySelectorAll('.grid');
    allGrid.backgroundColor = 'white';
}




