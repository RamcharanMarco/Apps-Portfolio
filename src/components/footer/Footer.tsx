import "../../styles/footer.scss";
import { Link } from "react-router-dom";
import SayHi from "../app/SayHi";
import {PiFacebookLogoLight} from 'react-icons/pi'

const Footer = () => {
  return (
    <footer>
      <div className="bottom">
        <PiFacebookLogoLight/>
        <PiFacebookLogoLight/>
        <PiFacebookLogoLight/>
        <PiFacebookLogoLight/>
      </div>
      <div className="top">
        {" "}
        <div className="le">
          <SayHi />
        </div>
        <div className="left">
          <div className="links">
            <Link to="/">download cv</Link>
          </div>
          <div className="links">
            <Link to="/skills">showcase</Link>
            <Link to="/about">contactme</Link>
            <Link to="/contact">linkbio</Link>
            <Link to="/apps">easysend</Link>
            <Link to="/more">indeed</Link>
            <Link to="/certs">filehosting</Link>
          </div>
          <div className="links">
            <Link to="/skills">skills</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
            <Link to="/apps">apps</Link>
            <Link to="/more">more</Link>
            <Link to="/certs">certs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
