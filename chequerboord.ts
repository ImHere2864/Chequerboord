const SIZE = 8;

function fieldColor(row:number, column:number):string {
    if ((row + column) % 2 === 0) 
    {
        return "□"
    }
    else
    {
        return "■";
    }
}

function fieldSize(size:number):string[][] {
    const board: string[][] = [];
    for (let row = 0; row < size; row++){
        const rowOfFields: string[] = [];
        for (let column = 0; column < size; column++){
            rowOfFields.push(fieldColor(row, column));
        }
        board.push(rowOfFields);
    }
    return board;
}

function createBoard(board:string[][]):void {
    for (const row of board) {
        console.log(row.join(""));
    }
}

createBoard(fieldSize(SIZE))