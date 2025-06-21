import { CircleOIcon, CrossXIcon } from "../assets/assets";

function Header() {
  return (
    <div className="w-full flex justify-center py-4">
      <div className="navbar px-10 py-2">
        <div className="flex items-center gap-1">
          <div className="flex">
            <img
              className="w-[1.8rem] -mr-2 sm:w-[2.2rem]"
              src={CrossXIcon}
              alt="cross-icon"
              loading="lazy"
            />
            <img
              className="w-[1.8rem] sm:w-[2.2rem]"
              src={CircleOIcon}
              alt="circle-icon"
              loading="lazy"
            />
            <img
              className="w-[1.8rem] -ml-2 sm:w-[2.2rem]"
              src={CrossXIcon}
              alt="cross-icon"
              loading="lazy"
            />
          </div>
          <span className="logo text-2xl sm:text-3xl text-[#00c8ff]">
            SHOWDOWN
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
