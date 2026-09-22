const SIZE = 8;

function fieldColor(row: number, column: number): string {
    if ((row + column) % 2 === 0) {
        return "light";
    } else {
        return "dark";
    }
}

function fieldSize(size: number): string[][] {
    const board: string[][] = [];
    for (let row = 0; row < size; row++) {
        const rowOfFields: string[] = [];
        for (let column = 0; column < size; column++) {
            rowOfFields.push(fieldColor(row, column));
        }
        board.push(rowOfFields);
    }
    return board;
}

function createBoard(board: string[][]): void {
    const boardElement = document.getElementById("board");
    if (!boardElement) return;

    for (const row of board) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        for (const color of row) {
            const cellDiv = document.createElement("div");
            cellDiv.className = "cell " + color;
            rowDiv.appendChild(cellDiv);
        }
        boardElement.appendChild(rowDiv);
    }
}

createBoard(fieldSize(SIZE));