const board = document.getElementById('game-board');
const pieces = [];

function createBoard() {
    let tileColor = 'white';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const tile = document.createElement('div');
            tile.classList.add(tileColor === 'white' ? 'white-tile' : 'black-tile');
            tile.addEventListener('click', () => handleTileClick(tile, i, j));
            board.appendChild(tile);
            if (tileColor === 'white' && (i < 3 || i > 4)) {
                const piece = document.createElement('div');
                piece.classList.add('piece', i < 3 ? 'red-piece' : 'black-piece');
                tile.appendChild(piece);
                pieces.push({ piece, x: i, y: j });
            }
            tileColor = tileColor === 'white' ? 'black' : 'white';
        }
        tileColor = tileColor === 'white' ? 'black' : 'white';
    }
}

function handleTileClick(tile, x, y) {
    const piece = pieces.find(p => p.x === x && p.y === y);
    if (piece) {
        console.log(`Clicked on ${piece.piece.classList.contains('red-piece') ? 'red' : 'black'} piece`);
    } else {
        console.log(`Clicked on empty tile at (${x}, ${y})`);
    }
}

createBoard();
