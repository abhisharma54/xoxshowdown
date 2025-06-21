import { Outlet } from "react-router-dom";
import { Header } from "../components/index";

export default function Layout() {
  return (
    <div className="max-w-[1280px] w-full h-full pb-5">
      <Header />
      <Outlet />
    </div>
  );
}
