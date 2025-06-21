import { Button } from "../components/index";
import { CrossXIcon, CircleOIcon } from "../assets/assets";

function Welcome({ handleGameLoad }) {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center gap-30">
      <div className="logo flex flex-col items-center gap-4">
        <div className="flex items-center">
          <img
            className="w-[5rem] sm:w-[7rem] -mr-5 drop-shadow-[0_0_10px_rgba(288,8,10,0.8)]"
            src={CrossXIcon}
            alt="cross-icon"
            loading="lazy"
          />
          <img
            className="w-[5rem] sm:w-[7rem] drop-shadow-[0_0_10px_rgba(255,222,89,0.8)]"
            src={CircleOIcon}
            alt="circle-icon"
            loading="lazy"
          />
          <img
            className="w-[5rem] sm:w-[7rem] -ml-5 drop-shadow-[0_0_10px_rgba(288,8,10,0.8)]"
            src={CrossXIcon}
            alt="cross-icon"
            loading="lazy"
          />
        </div>
        <div>
          <span className="text-[#00c8ff] [text-shadow:0_0_15px_rgba(0,200,255,0.8)] text-5xl sm:text-6xl">
            SHOWDOWN
          </span>
        </div>
      </div>
      <Button
        onClick={handleGameLoad}
        className="bg-[image:var(--startBtn)] hover:[box-shadow:0_0_20px_rgba(242,0,255,0.8)]"
      >
        Let's Go
      </Button>
    </div>
  );
}

export default Welcome;
