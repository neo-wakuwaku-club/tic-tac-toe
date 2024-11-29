import { calculateWinner } from '../util/calculate-winner';
import { Square } from './square';

type BoardProps = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (squares: (string | null)[]) => void;
};

export const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();

    if (xIsNext) {
      newSquares[i] = 'X';
    } else {
      newSquares[i] = 'O';
    }

    onPlay(newSquares);
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square
          value={squares[0]}
          onClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className='board-row'>
        <Square
          value={squares[3]}
          onClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className='board-row'>
        <Square
          value={squares[6]}
          onClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
};
