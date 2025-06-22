import { Button } from "../components/index";
import {
  CrossXIcon,
  CircleOIcon,
  PositionIcon1,
  PositionIcon2,
  PositionIcon3,
} from "../assets/assets";

function Welcome({ handleGameLoad }) {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center gap-30">
      <div className="relative logo flex flex-col items-center gap-4">
        <span className="absolute -top-40 -left-30">
          <img
            className="w-[150px] rotate-12"
            src={PositionIcon1}
            alt="position-icon"
            loading="lazy"
          />
        </span>
        <span className="absolute -bottom-60 -right-30">
          <img
            className="w-[130px] -rotate-12"
            src={PositionIcon2}
            alt="position-icon"
            loading="lazy"
          />
        </span>
        <div className="relative flex items-center">
          <span className="absolute -top-12 -right-10">
            <img
              className="w-[70px] rotate-30"
              src={PositionIcon3}
              alt="position-icon"
              loading="lazy"
            />
          </span>
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
