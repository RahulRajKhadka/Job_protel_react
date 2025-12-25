import Header from "../components/ui/Header"
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background">
        <main className="min-h-screen mx-auto">
        <Header />
        <Outlet />
      </main>
      </div>
   
    </div>
  );
};

export default AppLayout;