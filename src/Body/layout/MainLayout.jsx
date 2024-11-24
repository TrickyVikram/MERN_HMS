import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <main className="dark:bg-black bg-gray-100 text-gray-900 dark:text-gray-100 overflow-hidden min-h-screen flex flex-col">
      <NavBar/>
      <div className="flex-grow">
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>

    </main>
  );
}

export default MainLayout;