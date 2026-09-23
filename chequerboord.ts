const SIZE = 8;

function createChequerboord() {
    const board = document.getElementById("board");

    if (!board) {
        return;
    }

    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            const square = document.createElement("div");

            const isLight = (row + col) % 2 === 0;

            square.classList.add("square");
            square.classList.add(isLight ? "light" : "dark");

            board.appendChild(square);
        }
    }
}

createChequerboord();

export {};
