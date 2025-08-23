import React, { useEffect, useState } from "react";
import { Button, ScoreCard, TicTacToe, WinCard } from "./index";
import { useDispatch, useSelector } from "react-redux";
import {
  CircleOIcon,
  CrossXIcon,
  ExitIcon,
  MatchDrawIcon,
  RefreshIcon,
  ResetIcon,
  VsIcon,
} from "../assets/assets";
import { gameLoading, updatePlayerData } from "../store/playerDataSlice";
import { useNavigate } from "react-router-dom";

function GamePage() {
  const playersData = useSelector((state) => state.xoxGameData);
  const level = useSelector((state) => state.level);

  let cell = level;
  const gridSize = cell === 5 ? cell * 70 : cell === 4 ? cell * 80 : cell * 100;

  const [isXTurn, setIsXTurn] = useState(true);
  const [board, setBoard] = useState(Array(cell * cell).fill(null));
  const [winner, setWinner] = useState(null);
  const [isWin, setIsWin] = useState(false);
  const [isGameDraw, setIsGameDraw] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [scoreResetMsg, setScoreResetMsg] = useState("");
  const [turnCount, setTurnCount] = useState({ X: 0, O: 0 });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTurn = (index) => {
    if (board[index]) return;

    const updateRows = [...board];
    updateRows[index] = isXTurn
      ? { type: "X", icon: CrossXIcon }
      : { type: "O", icon: CircleOIcon };
    setBoard(updateRows);
    setTurnCount((prev) => ({
      ...prev,
      [isXTurn ? "X" : "O"]: prev[isXTurn ? "X" : "O"] + 1,
    }));
    setIsXTurn((prev) => !prev);
  };

  useEffect(() => {
    (function checkWinner() {
      if (turnCount.X >= 3 || turnCount.O >= 3) {
        let checkIdx = (indices) => {
          let [firstIndex, ...rest] = indices;
          let first = board[firstIndex];
          if (first && rest.every((i) => board[i]?.type === first?.type)) {
            let winPlayer = playersData.filter(
              (prev) => prev.type === first.type
            );
            let updateData = playersData.map((prev) =>
              prev.type === first.type
                ? { ...prev, score: prev.score + 1 }
                : prev
            );

            dispatch(updatePlayerData(updateData));
            setWinner(winPlayer);
            setIsWin(true);

            return true;
          } else {
            return false;
          }
        };

        for (let i = 0; i < cell; i++) {
          let row = checkIdx([...Array(cell)].map((_, j) => i * cell + j));
          console.log({ row, i });
          if (row) return;
          let col = checkIdx([...Array(cell)].map((_, j) => i + j * cell));
          console.log({ col });
          if (col) return;
        }

        let diag = checkIdx([...Array(cell)].map((_, i) => i * cell + i));
        console.log({ diag });
        if (diag) return;
        let anti = checkIdx(
          [...Array(cell)].map((_, i) => i * cell + cell - 1 - i)
        );
        console.log({ anti });
        if (anti) return;

        if (board.every((cell) => cell !== null)) {
          setIsGameDraw(true);
          return;
        }
        return null;
      }
    })();
  }, [board, turnCount]);

  const handleReset = () => {
    let nonZeroScores = playersData.some((player) => player.score !== 0);
    if (nonZeroScores) {
      setConfirmReset(true);
    } else {
      setScoreResetMsg("All scores are already zero.");
    }
  };

  const handleConfirmReset = () => {
    let resetData = playersData.map((prev) => ({ ...prev, score: 0 }));
    dispatch(updatePlayerData(resetData));
    setConfirmReset(false);
  };

  const handleRefresh = () => {
    setBoard(Array(cell * cell).fill(null));
    setIsXTurn(true);
    setIsWin(false);
    setIsGameDraw(false);
  };

  const handleExit = () => {
    dispatch(gameLoading());
    navigate("/");
  };

  useEffect(() => {
    if (confirmReset || scoreResetMsg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [confirmReset, scoreResetMsg]);

  return (
    <div
      className={`relative w-full h-full flex flex-col items-center gap-20 py-10 sm:gap-15`}
    >
      {confirmReset && (
        <>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40" />
          <div
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-[var(--bgColor)] [box-shadow:0_0_15px_-8px_rgba(242,0,255,0.8)] border border-[#9d00ff] text-white rounded-[var(--cardRadius)] p-6 w-[90%] max-w-md shadow-xl"
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Reset Score?
            </h2>
            <p className="text-sm sm:text-base mb-4">
              This will reset <strong>your score</strong>. Do you want to
              continue?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmReset(false)}
                className="px-4 py-2 text-sm sm:text-base bg-[image:var(--cancelBtn)] rounded-full cursor-pointer transition duration-150 ease-in hover:[box-shadow:0_0_10px_rgba(242,0,255,0.8)]"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-4 py-2 text-sm sm:text-base bg-[image:var(--resetBtn)] rounded-full cursor-pointer transition duration-150 ease-in hover:[box-shadow:0_0_10px_rgba(255,119,0,0.8)]"
              >
                Reset
              </button>
            </div>
          </div>
        </>
      )}

      {scoreResetMsg && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40">
          <div
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    bg-[var(--bgColor)] [box-shadow:0_0_15px_-8px_rgba(242,0,255,0.8)] border border-[#9d00ff] flex justify-between items-center text-white rounded-[var(--cardRadius)] p-6 w-[90%] max-w-md shadow-xl"
          >
            <p className="text-sm sm:text-sm">{scoreResetMsg}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setScoreResetMsg("")}
                className="px-4 py-2 text-sm sm:text-base bg-[image:var(--cancelBtn)] rounded-full cursor-pointer transition duration-150 ease-in hover:[box-shadow:0_0_10px_rgba(242,0,255,0.8)]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

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
        <div className="min-w-[350px] min-h-[340px] border rounded-3xl overflow-hidden">
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
              <img
                className="w-[100px]"
                src={MatchDrawIcon}
                alt="match-draw-icon"
                loading="lazy"
              />
              <button onClick={handleRefresh} className="outline-none">
                <img
                  className="w-[50px] transition duration-300 ease-in cursor-pointer hover:rotate-180 sm:w-[60px]"
                  src={RefreshIcon}
                  alt="refresh-icon to play again"
                  title="refresh button"
                  loading="lazy"
                />
              </button>
            </div>
          ) : (
            <TicTacToe board={board} cell={cell} handleTurn={handleTurn} />
          )}
        </div>
      )}
      <div className="flex gap-5">
        <Button
          onClick={handleReset}
          imgSrc={ResetIcon}
          imgAlt={"reset-btn-icon"}
          className="px-8 bg-[image:var(--resetBtn)] text-xl hover:border-white hover:[box-shadow:0_0_20px_rgba(255,119,0,0.8)] sm:text-2xl"
        >
          Reset Game
        </Button>
        <Button
          onClick={handleExit}
          imgSrc={ExitIcon}
          imgAlt={"exit-btn-icon"}
          className="bg-[image:var(--resetBtn)] hover:[box-shadow:0_0_20px_rgba(255,119,0,0.8)]"
        >
          Exit Game
        </Button>
      </div>
    </div>
  );
}

export default GamePage;
