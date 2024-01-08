import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import MainNavbar from "../navbar/MainNavbar";

const AppsLayout = () => {
  return (
    <div className="appsLayout">
      <MainNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppsLayout;