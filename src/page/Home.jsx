import { Welcome, PlayerSetup } from "../components/index";
import { gameLoading } from "../store/playerDataSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const game = useSelector((state) => state.gameLoad);
  const start = game;

  const dispatch = useDispatch();

  const handleGameLoad = () => {
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
