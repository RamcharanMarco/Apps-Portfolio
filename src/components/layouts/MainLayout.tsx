import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import MainNavbar from "../navbar/MainNavbar";
import {useState,FC} from 'react'
import { VscMenu } from "react-icons/vsc";

interface AppProps {
  toggle: (params: any) => any;
}

const MainLayout = () => {

  const [show,setShow] = useState(false)

  const toggle = (e:any) =>{
    e.preventDefault()
    setShow(!show)
  }

  return (
    <div className="mainLayout">
                   {
        show ?       null :  <VscMenu onClick={toggle} className="menuicons"/>
      }  

      {
        show ?       <MainNavbar toggle={toggle}/> : null
      }
      <Outlet />
      <Footer/>
      <div className="btm">
        <h1>COPYRIGHT 2023</h1>
      </div>
    </div>
  );
};

export default MainLayout;
