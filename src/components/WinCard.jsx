import {
  CelebrationIcon1,
  CelebrationIcon2,
  CelebrationIcon3,
  DefaultAvatar,
  RefreshIcon,
} from "../assets/assets";

function WinCard({ winner, handleRefresh }) {
  let { avatar, playerName } = winner[0];

  return (
    <div className="relative w-full h-full flex flex-col items-center gap-2 py-5">
      <img
        className="w-[100px] absolute -bottom-10 -right-5"
        src={CelebrationIcon1}
        alt="celebration icon"
        loading="lazy"
      />
      <img
        className="w-[100px] absolute bottom-10 -left-5"
        src={CelebrationIcon2}
        alt="celebration icon"
        loading="lazy"
      />
      <img
        className="w-[60px] absolute top-0 right-0 rotate-12"
        src={CelebrationIcon3}
        alt="celebration icon"
        loading="lazy"
      />
      <img
        className="w-[60px] absolute top-0 left-0 -rotate-12"
        src={CelebrationIcon3}
        alt="celebration icon"
        loading="lazy"
      />
      <div className={`w-[80px] border rounded-full ${avatar ? "p-0" : "p-2"}`}>
        <img src={avatar || DefaultAvatar} alt="avatar-img" loading="lazy" />
      </div>
      <h2 className="text-xl font-semibold sm:text-2xl">{playerName}</h2>
      <span className="px-4 py-2 bg-[image:var(--startBtn)] rounded-xl text-xl font-bold sm:text-2xl z-10">
        CONGRATS
      </span>
      <span className="px-3 py-1 bg-[#353535] rounded-sm text-xl font-bold sm:text-2xl -rotate-3 -mt-1">
        YOU WIN!
      </span>
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
