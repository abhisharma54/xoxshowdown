import React, { useEffect, useState } from "react";
import { Button, ScoreCard, TicTacToe, WinCard } from "./index";
import { useDispatch, useSelector } from "react-redux";
import {
  CircleOIcon,
  CrossXIcon,
  RefreshIcon,
  ResetIcon,
  VsIcon,
} from "../assets/assets";
import { updatePlayerData } from "../store/playerDataSlice";

function GamePage() {
  const { xoxGameData: playersData, level } = useSelector((state) => state);

  let cell = level;
  const gridSize = cell === 5 ? cell * 70 : cell === 4 ? cell * 80 : cell * 100;

  const [isXTurn, setIsXTurn] = useState(true);
  const [board, setBoard] = useState(Array(cell * cell).fill(null));
  const [data, setData] = useState(playersData);
  const [winner, setWinner] = useState(null);
  const [isWin, setIsWin] = useState(false);
  const [isGameDraw, setIsGameDraw] = useState(false);

  const dispatch = useDispatch();

  const handleTurn = (index) => {
    if (board[index]) return;

    const updateRows = [...board];
    updateRows[index] = isXTurn
      ? { type: "X", icon: CrossXIcon }
      : { type: "O", icon: CircleOIcon };
    setBoard(updateRows);
    setIsXTurn((prev) => !prev);
  };

  useEffect(() => {
    (function checkWinner() {
      let winPossibility = [];

      for (let i = 0; i < cell; i++) {
        winPossibility.push([...Array(cell)].map((_, j) => i * cell + j));
        winPossibility.push([...Array(cell)].map((_, j) => j * cell + i));
      }

      winPossibility.push([...Array(cell)].map((_, i) => i * cell + i));
      winPossibility.push(
        [...Array(cell)].map((_, i) => i * cell + cell - 1 - i)
      );

      for (let item of winPossibility) {
        let [firstIndex, ...rest] = item;
        let firstItem = board[firstIndex]?.type;
        if (firstItem && rest.every((i) => board[i]?.type === firstItem)) {
          const winPlayer = data.filter((prev) => prev.type === firstItem);
          setWinner(winPlayer);

          let updateData = [...data].map((prev) =>
            prev.type === winPlayer[0].type
              ? { ...prev, score: prev.score + 1 }
              : prev
          );
          dispatch(updatePlayerData(updateData));

          setIsWin(true);
          return firstItem;
        }
      }

      if (board.every((cell) => cell !== null)) {
        setIsGameDraw(true);
      }
      return null;
    })();
  }, [board]);

  const handleReset = () => {
    let updateData = [...data].map((prev) => ({ ...prev, score: 0 }));
    setData(updateData);
    dispatch(updatePlayerData(updateData));
  };

  const handleRefresh = () => {
    setBoard(Array(cell * cell).fill(null));
    setIsXTurn(true);
    setIsWin(false);
    setIsGameDraw(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-20 py-10 sm:gap-15">
      <div className="score-board flex items-center gap-4">
        <ScoreCard
          name={playersData[0]?.playerName}
          avatar={playersData[0]?.avatar}
          score={playersData[0]?.score}
          svg={CrossXIcon}
          isXTurn={isXTurn ? "Your Turn" : ""}
        />
        <img
          className="w-[35px] sm:w-[50px]"
          src={VsIcon}
          alt="vs-icon"
          loading="lazy"
        />
        <ScoreCard
          name={playersData[1]?.playerName}
          avatar={playersData[1]?.avatar}
          score={playersData[1]?.score}
          svg={CircleOIcon}
          isXTurn={isXTurn ? "" : "Your Turn"}
        />
      </div>
      {isWin ? (
        <div className="min-w-[350px] border rounded-3xl">
          <WinCard winner={winner} handleRefresh={handleRefresh} />
        </div>
      ) : (
        <div
          className="border rounded-3xl overflow-hidden"
          style={{
            minWidth: `${gridSize}px`,
            minHeight: `${gridSize}px`,
          }}
        >
          {isGameDraw ? (
            <div className="h-full flex flex-col items-center justify-center gap-4">
              <div className="px-6 py-2 text-xl text-nowrap sm:text-2xl bg-[image:var(--resetBtn)] rounded-[var(--cardRadius)] border [box-shadow:0_0_20px_rgba(255,119,0,0.8)]">
                Match Draw
              </div>
              <button onClick={handleRefresh} className="outline-none">
                <img
                  className="w-[50px] transition duration-300 ease-in cursor-pointer hover:rotate-180 sm:w-[60px]"
                  src={RefreshIcon}
                  alt="refresh-icon to play again"
                  title="refresh"
                  loading="lazy"
                />
              </button>
            </div>
          ) : (
            <TicTacToe board={board} cell={cell} handleTurn={handleTurn} />
          )}
        </div>
      )}
      <Button
        onClick={handleReset}
        imgSrc={ResetIcon}
        imgAlt={"reset-btn-icon"}
        className="px-8 bg-[image:var(--resetBtn)] text-xl hover:border-white hover:[box-shadow:0_0_20px_rgba(255,119,0,0.8)] sm:text-2xl"
      >
        Reset Game
      </Button>
    </div>
  );
}

export default GamePage;
