let drawGrid = () => {
    const container = document.querySelector(".container");

    let rowsCount = 16;
    let tilesPerRow = 16;
    while (rowsCount--) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row")
        
        while (tilesPerRow--) {
            const div = document.createElement("div");
            div.classList.add("tile");
            rowDiv.appendChild(div);
        }
        tilesPerRow = 16;

        container.appendChild(rowDiv);
    }
}

drawGrid();