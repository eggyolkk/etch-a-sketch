const container = document.getElementById("sketch-container");

//Creates rows and columns of specified size
function makeRows(rows, cols) {
	container.style.setProperty('--grid-rows', rows);
	container.style.setProperty('--grid-cols', cols);
	for (c = 0; c < (rows * cols); c++) {
		let cell = document.createElement("div");
		//Create a new class for a specific grid cell when hovered
		cell.addEventListener('mouseover', e => e.target.classList.add('coloured-cell'));

		container.appendChild(cell).className = "grid-item";
	};
};

//Creates a default grid size of 16x16
function sketchGrid(){
	makeRows(16, 16);
}

let clear = document.getElementById('clear');
	clear.addEventListener('click', function() {
		newSize = prompt('How many squares would you like for your new grid? (Enter 10 - 100)');
		
		const container = document.querySelector('#sketch-container')
		while(container.firstChild) container.firstChild.remove()

		makeRows(newSize, newSize);
	});


sketchGrid();
