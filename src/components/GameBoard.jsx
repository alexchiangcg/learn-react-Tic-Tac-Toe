const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]



export default function GameBoard() {
    return(
        <ol id='game-board'>
            {initialGameBoard.map((row, rowIndex) => {
                return ( 
                    <li key={rowIndex} className='row'>
                        <ol>
                        {row.map((playSymbol, colIndex) => {
                            return (
                                <li key={colIndex} className='cell'><button>{playSymbol}</button></li>
                            )
                        })}
                        </ol>
                    </li>
                )
            })}
        </ol>
    )
}