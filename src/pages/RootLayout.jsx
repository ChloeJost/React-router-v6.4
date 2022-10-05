import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      {/* Outlet tells react where to display the nested child components*/}
    </>
  );
}

export default RootLayout;
