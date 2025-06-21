import { CircleOIcon, CrossXIcon } from "../assets/assets";

function TicTacToe({ board, cell, handleTurn }) {
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${cell}, 1fr)`,
        gridTemplateRows: `repeat(${cell}, 1fr)`,
      }}
      className={`w-full h-full grid p-4 gap-4 overflow-hidden`}
    >
      {board.map((item, i) => (
        <div
          key={i}
          onClick={() => handleTurn(i)}
          className={`${
            item?.icon === CrossXIcon
              ? "bg-[#ff000010]"
              : item?.icon === CircleOIcon
              ? "bg-[#ffff0010]"
              : ""
          } flex justify-center items-center border rounded-[var(--cardRadius)] transition duration-150 ease-in hover:bg-[#9d00ff20] cursor-pointer`}
        >
          {item?.icon && (
            <img
              className={
                cell === 5 ? "w-[40px]" : cell === 4 ? "w-[55px]" : "w-[70px]"
              }
              src={item?.icon}
              alt={`${item?.type}-icon`}
              loading="lazy"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default TicTacToe;
