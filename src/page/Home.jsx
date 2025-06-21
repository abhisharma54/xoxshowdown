import React, { useState } from "react";
import { Button, Welcome, PlayerSetup } from "../components/index";
import { gameLoading } from "../store/playerDataSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const game = useSelector((state) => state.gameLoad);
  const [start, setStart] = useState(game);

  const dispatch = useDispatch();

  const handleGameLoad = () => {
    setStart((prev) => !prev);
    dispatch(gameLoading());
  };

  return (
    <div className={`w-full h-full overflow-auto`}>
      {start ? (
        <PlayerSetup handleGameLoad={handleGameLoad} />
      ) : (
        <Welcome handleGameLoad={handleGameLoad} />
      )}
    </div>
  );
}

export default Home;
