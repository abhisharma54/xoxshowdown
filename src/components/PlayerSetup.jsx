import React, { useState } from "react";
import { Button, PlayerCard } from "./index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updatePlayerData, updateLevel } from "../store/playerDataSlice";
import { CloseIcon, ExitIcon, PlayIcon } from "../assets/assets";

function PlayerSetup({ handleGameLoad }) {
  const [inputs, setInputs] = useState(["", ""]);
  const [players, setPlayers] = useState([
    { type: "X", avatar: "", playerName: "Player 1", score: 0 },
    { type: "O", avatar: "", playerName: "Player 2", score: 0 },
  ]);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInput = (value, index) => {
    const newInput = [...inputs];
    newInput[index] = value;
    setInputs(newInput);

    setPlayers((prev) => {
      let updatePlayers = [...prev];
      updatePlayers[index].playerName = value;
      return updatePlayers;
    });
  };

  const handleAvatar = (avatar, index) => {
    const updatePlayers = [...players];
    updatePlayers[index].avatar = avatar;
    setPlayers(updatePlayers);
  };

  const gameLevels = [
    { rows: 3, level: "Easy", bgColor: "3A9101", color: "fff" },
    { rows: 4, level: "Medium", bgColor: "FFCD03", color: "090e2e" },
    { rows: 5, level: "Hard", bgColor: "E4080A", color: "fff" },
  ];

  const handleStartGame = () => {
    if (!selectedLevel) {
      setError(true);
      return;
    }
    navigate("/xox-showdown");
    dispatch(updatePlayerData(players));
    dispatch(updateLevel(selectedLevel));
  };

  return (
    <div className="w-full h-full flex flex-col gap-8 items-center py-10">
      <div className="flex flex-col gap-10 px-4">
        {players.map(({ avatar, playerName }, i) => (
          <PlayerCard
            key={i}
            avatar={avatar}
            name={playerName}
            index={i}
            inputs={inputs}
            handleInput={handleInput}
            handleAvatar={handleAvatar}
          />
        ))}
        {error && (
          <div className="flex justify-between items-center -my-6 px-3 py-2 bg-[image:var(--errorBgColor)] text-md font-semibold text-center border rounded-[var(--inputRadius)] [box-shadow:0_0_20px_rgba(255,0,0,0.8)]">
            <span>Please select a difficulty level to start the game.</span>
            <button onClick={() => setError(false)}>
              <img
                className="w-[30px] cursor-pointer transition duration-100 ease-in hover:scale-110"
                src={CloseIcon}
                alt="close-icon"
                title="remove error"
                loading="lazy"
              />
            </button>
          </div>
        )}
        <div className="flex flex-col gap-4 border p-4 rounded-[var(--cardRadius)] sm:flex-row sm:justify-between">
          {gameLevels.map((game, i) => (
            <div
              key={i}
              className="flex flex-row justify-between items-center gap-2 sm:flex-col"
            >
              <span
                className="text-xl font-medium"
                style={{
                  color: `#${game.bgColor}`,
                }}
              >
                {game.level}
              </span>
              <span
                className={`text-xl text-nowrap text-center font-medium px-10 py-2 border border-white rounded-full transition duration-100 ease-in cursor-pointer`}
                style={{
                  backgroundColor:
                    selectedLevel === game.rows
                      ? `#${game.bgColor}`
                      : "transparent",
                  color: selectedLevel === 4 ? `#${game.color}` : "#fff",
                  boxShadow:
                    selectedLevel === game.rows
                      ? `0 0 15px -1px #${game.bgColor}`
                      : "none",
                }}
                onClick={() => setSelectedLevel(game.rows)}
              >
                {game.rows} x {game.rows}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-5">
        <Button
          onClick={handleStartGame}
          imgSrc={PlayIcon}
          imgAlt={"play-btn-icon"}
          className="bg-[image:var(--startBtn)] hover:[box-shadow:0_0_20px_rgba(242,0,255,0.8)]"
        >
          Start Game
        </Button>
        <Button
          onClick={handleGameLoad}
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

export default PlayerSetup;
