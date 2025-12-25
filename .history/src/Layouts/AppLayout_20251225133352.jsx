import Header from "../components/ui/Header"
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
      <div>
      <div className="grid-background"></div>
      <main className="w-full max-w-[1200px] mx-auto px-6">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
      </div>
    </div>
  );
};

export default AppLayout;