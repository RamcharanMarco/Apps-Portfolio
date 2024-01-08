import "../styles/apptest.scss";
import pic from "../assets/apps/linkbio.png";
import pic2 from "../assets/apps/indeed.png";
import pic3 from "../assets/apps/showcase.png";


import { Link } from "react-router-dom";

const AppTests = () => {
  return (
    <div className="apptest">
            <div className="appbox showcase">
        <div className="content">
            <h1>SHOWCASE</h1>
            <div>
                <p>REACT</p>
                <p>NODE</p>
                <p>SQL</p>
            </div>
            <div className="liks">
                <Link to='/'>VIEW</Link>
                <Link to='/'>VIEW MORE</Link>
                <Link to='/'>REPO</Link>
            </div>
        </div>
        <img src={pic3} alt="picture" />
      </div>
      <div className="appbox">
        <div className="content">
            <h1>LINKBIO</h1>
            <div>
                <p>REACT</p>
                <p>NODE</p>
                <p>SQL</p>
            </div>
            <div className="liks">
                <Link to='/'>VIEW</Link>
                <Link to='/'>VIEW MORE</Link>
                <Link to='/'>REPO</Link>
            </div>
        </div>
        <img src={pic} alt="picture" />
      </div>
      <div className="appbox indeed">
        <div className="content">
            <h1>INDEED</h1>
            <div>
                <p>REACT</p>
                <p>NODE</p>
                <p>SQL</p>
            </div>
            <div className="liks">
                <Link to='/'>VIEW</Link>
                <Link to='/'>VIEW MORE</Link>
                <Link to='/'>REPO</Link>
            </div>
        </div>
        <img src={pic2} alt="picture" />
      </div>
    </div>
  );
};

export default AppTests;
