import  Navbar  from "./Navbar";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Container;