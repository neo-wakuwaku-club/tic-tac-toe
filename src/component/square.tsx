type SquareProps = {
  value: string | null | undefined;
  onClick: () => void;
};

export const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  );
};
