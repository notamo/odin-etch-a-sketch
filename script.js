const init = () => {
    const initSquaresPerSide = 16;
    drawGrid(initSquaresPerSide);

    const startButton = document.querySelector(".header button");
    startButton.addEventListener("click", () => {
        const container = document.querySelector(".container");
        container.textContent = "";

        let squaresPerSide = 0;
        let keepGoing = true;
        while (keepGoing) {
            squaresPerSide = Number(prompt("Enter number of squares per side [1, 100]", 16));

            if (squaresPerSide <= 100 && squaresPerSide > 0) {
                keepGoing = false;
            }
        }
        
        drawGrid(squaresPerSide);
    });
};

const drawGrid = (squares) => {
    const container = document.querySelector(".container");

    let rowsCount = squares;
    let tilesPerRow = squares;
    while (rowsCount--) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row")
        
        while (tilesPerRow--) {
            const div = document.createElement("div");
            div.id = `tile-r${rowsCount}-c${tilesPerRow}`;
            rowDiv.appendChild(div);
        }
        tilesPerRow = squares;

        container.appendChild(rowDiv);
    }

    container.addEventListener("mouseover", (e) => {
        targetElement = e.target;

        if (targetElement.id) {
            // console.log(`Mouse entered tile ${targetElement.id}`);
            let newColor = { red: 0, green: 0, blue: 0 };
            for (const color in newColor) {
                newColor[color] = Math.floor(Math.random() * 256);
            }
            targetElement.style.backgroundColor = `rgb(${newColor.red} ${newColor.green} ${newColor.blue})`;
        }
    });
}

init();
