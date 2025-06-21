import { DefaultAvatar } from "../assets/assets";

function ScoreCard({ name, avatar, svg, score, isXTurn }) {
  return (
    <div className="relative h-full flex flex-col items-center justify-between gap-2">
      <div className="relative p-3 w-[140px] h-full flex flex-col items-center justify-between gap-2 border rounded-[var(--cardRadius)] overflow-hidden sm:w-[200px]">
        <div
          className={`w-[80px] border rounded-full ${
            avatar ? "p-0" : "p-2"
          } sm:w-[100px]`}
        >
          <img src={avatar || DefaultAvatar} alt="avatar-img" loading="lazy" />
        </div>
        <h1 className="text-xl font-semibold text-center line-clamp-2 leading-6 sm:text-2xl">
          {name}
        </h1>
        <img
          className="w-[35px] sm:w-[40px]"
          src={svg}
          alt="cross-icon"
          loading="lazy"
        />
        <span className="absolute left-0 bottom-11 block w-full h-[1px] bg-white"></span>

        <h3 className="text-xl font-medium">
          Score: <span className="font-normal">{score}</span>
        </h3>
      </div>
      <h2 className="absolute -bottom-8 text-xl font-semibold">{isXTurn}</h2>
    </div>
  );
}

export default ScoreCard;
