import "../styles/indeed.scss";
import pic from "../assets/apps/showcase.png";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <div className="indeed">
      <h1 className="heading">showcase</h1>
      <p className="short-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odit
        cupiditate. Porro sit eaque ab magnam corrupti eum pariatur ipsa ullam,
      </p>
      <div className="links">
        <Link to='/'>repo</Link>
        <Link to='/'>live site</Link>
        <button>design doc</button>
      </div>
      <img src={pic} alt="indeed" />
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odit
        cupiditate. Porro sit eaque ab magnam corrupti eum pariatur ipsa ullam,
        autem, praesentium quasi ducimus similique, natus laboriosam omnis eius.
      </p>
      <div className="features">
        <h1>features</h1>
        <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, odit
        cupiditate. Porro sit eaque ab magnam corrupti eum pariatur ipsa ullam,
        autem, praesentium quasi ducimus similique, natus laboriosam omnis eius.
      </p>   
      </div>
      <div className="stack">
        <h1>technologies</h1>
        <span>react</span>
        <span>node</span>
        <span>mongodb</span>
        <span>nosql</span>
        <span>typescript</span>
      </div>
      <div className="whatILearned">
        <h1>what i learnt</h1>
        <ul>
          <li>learnt1</li>
          <li>learmt2</li>
          <li>leanrt3</li>
          <li>learnt4</li>
          <li>learnt5</li>
          <li>learnt6</li>
        </ul>
      </div>
      <div className="otherApps">
      <Link to='/apps/indeed'>indeed</Link>
        <Link to='/apps/filehosting'>file hosting</Link>
        <Link to='/apps/easysend'>easysend</Link>
        <Link to='/apps/contactme'>contact me</Link>
        <Link to='/apps/linkbio'>linkbio</Link>
      </div>
    </div>
  );
};

export default Showcase;
