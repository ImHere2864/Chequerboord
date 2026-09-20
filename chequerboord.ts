const SIZE = 8;

function fieldColor(row:number, column;number):string {
    if (row + column % 2 === 0) 
    {
        return "□"
    }
    else
    {
        return "■";
    }
}

function fieldSize(size:number):string[][] {
    //TODO
    return [];
}

function createBoard(board:string[][]):void {
    //TODO
}

createBoard(fieldSize(SIZE))