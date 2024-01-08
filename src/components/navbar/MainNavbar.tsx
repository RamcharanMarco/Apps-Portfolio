import { Link,useNavigate,useNavigation } from "react-router-dom";
import "../../styles/mainNavbar.scss";
import { useState,FC } from "react";
import {VscMenu,VscClose} from 'react-icons/vsc'

interface AppProps {
  toggle: (params: any) => any;
}

const MainNavbar:FC<AppProps> = ({toggle}) => {

  const navigate = useNavigate()

  const handleRoute = (e:any, path:string) =>{
    e.preventDefault()
    toggle(e)
    navigate(path)
  }

  return (
    <nav className="mainNavbar">
            <Link onClick={(e) => handleRoute(e, '/')} to='/'>home</Link>
            <Link onClick={(e) => handleRoute(e, '/about')} to="/about">about</Link>
            <Link onClick={(e) => handleRoute(e, '/contact')} to="/contact">contact</Link>
            <Link onClick={(e) => handleRoute(e, '/apps')} to="/apps">apps</Link>
            <VscClose className="close-icon" onClick={toggle}/>
  </nav>
  );
};

export default MainNavbar;
