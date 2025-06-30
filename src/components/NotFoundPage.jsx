import React from "react";
import { Button } from "./index";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="relative">
          <h1 className="font-light text-[7rem] sm:text-[10rem]">OOPS!</h1>
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-nowrap px-5 bg-[var(--bgColor)] sm:text-xl sm:bottom-12 sm:px-10">
            4O4 - PAGE NOT FOUND
          </p>
        </div>
        <Link to="/">
          <Button className="bg-[image:var(--startBtn)] hover:[box-shadow:0_0_20px_rgba(242,0,255,0.8)]">
            Go To Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
