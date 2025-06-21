import {
  DefaultAvatar,
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  CrossXIcon,
  CircleOIcon,
} from "../assets/assets";

function PlayerCard({
  avatar,
  name,
  handleAvatar,
  inputs,
  index,
  handleInput,
}) {
  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

  return (
    <div className="p-4 flex flex-col items-center justify-center gap-4 border rounded-[var(--cardRadius)]">
      <div className="flex items-center gap-4">
        <div
          className={`w-[80px] ${
            avatar ? "p-0" : "p-2"
          } border rounded-full overflow-hidden sm:w-[100px] sm:h-[100px]`}
        >
          <img
            className="w-full"
            src={avatar || DefaultAvatar}
            alt={`${name}-avatar`}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-end gap-1 text-xl font-semibold tracking-wide">
            <span>
              {index === 0 ? (
                <img
                  className="w-[25px]"
                  src={CrossXIcon}
                  alt="player-x"
                  loading="lazy"
                />
              ) : (
                <img
                  className="w-[25px]"
                  src={CircleOIcon}
                  alt="player-o"
                  loading="lazy"
                />
              )}
            </span>
            <span className="text-[#00c8ff]">{`${name
              .slice(0, 1)
              .toUpperCase()}${name.slice(1, 22)}`}</span>
          </div>
          <div className="select-avatar flex gap-3 p-2 border rounded-[var(--cardRadius)] overflow-auto">
            {avatars.map((avatar, i) => (
              <img
                onClick={() => handleAvatar(avatar, index)}
                className="w-[30px] rounded-full cursor-pointer transition duration-100 ease-in hover:scale-100 hover:border hover:[box-shadow:0_0_20px_rgba(242,0,255,0.8)] sm:w-[40px]"
                key={i}
                src={avatar}
                alt={`avatar-${i}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
      <input
        className="w-full px-3 py-2 rounded-[var(--inputRadius)] bg-[var(--bgColor)] border outline-none focus:[box-shadow:0_0_20px_-5px_rgba(242,0,255,0.8)]"
        type="text"
        placeholder="Enter your name"
        value={inputs[index]}
        onChange={(e) => handleInput(e.target.value, index)}
      />
    </div>
  );
}

export default PlayerCard;
