import {
  CircleOIcon,
  CrossXIcon,
  DefaultAvatar,
  RefreshIcon,
  WinIcon,
} from "../assets/assets";

function WinCard({ winner, handleRefresh }) {
  let { type, avatar, playerName } = winner[0];

  return (
    <div className="w-full h-full flex flex-col items-center gap-2 py-5">
      <div className={`w-[80px] border rounded-full ${avatar ? "p-0" : "p-2"}`}>
        <img src={avatar || DefaultAvatar} alt="avatar-img" loading="lazy" />
      </div>
      <div className="flex items-center gap-0">
        <img
          className="w-[30px] sm:w-[45px]"
          src={type === "X" ? CrossXIcon : CircleOIcon}
          alt={type === "X" ? "cross-icon" : "circle-icon"}
          loading="lazy"
        />
        <h2 className="text-xl font-semibold sm:text-2xl">{playerName}</h2>
      </div>
      <img
        className="w-[120px] rotate-8 sm:w-[150px]"
        src={WinIcon}
        alt="win-icon"
        loading="lazy"
      />
      <span className="text-[2rem] font-bold sm:text-4xl">You Win!</span>
      <button onClick={handleRefresh} className="outline-none">
        <img
          className="w-[50px] transition duration-300 ease-in cursor-pointer hover:rotate-180 sm:w-[60px]"
          src={RefreshIcon}
          alt="refresh-icon to play again"
          title="play again"
          loading="lazy"
        />
      </button>
    </div>
  );
}

export default WinCard;
