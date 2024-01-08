import HomeProjects from "../components/app/HomeProjects";
import Skills from "../components/app/Skills";
import "../styles/home.scss";
import { Link } from "react-router-dom";
import {TfiArrowCircleDown} from 'react-icons/tfi'
import {AiFillDownCircle} from 'react-icons/ai'
import AppTests from "./AppTests";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>MARCO RAMCHARAN</h1>
        <h3>Software developer</h3>
        <div className="scrolldown"></div>
        <div className="scrolltop"></div>

        </div>
      <div className="banner2">
        <p>
          Hey I'm marco.I'm fullstack developer curently living in durban South
          Africa.
          90's baby but a 20century og
        </p>
        <p>I love creating fullstack apps.</p>
        <Link to="/about">more about me</Link>
      </div>
      <Skills/>
      <AppTests/>
    </div>
  );
};

export default Home;
