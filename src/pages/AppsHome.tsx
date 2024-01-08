import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/apptest.scss";
import pic from "../assets/apps/linkbio.png";
import pic2 from "../assets/apps/indeed.png";
import pic3 from "../assets/apps/showcase.png";
import pic4 from "../assets/apps/contactme.png";
import pic5 from "../assets/apps/filehosting.png";
import pic6 from "../assets/apps/easysend.png";

const AppsHome = () => {
  return (
    <div className="apptest appshom">
      <h1 className='appshome-heading'>APPS</h1>
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
                <Link to='/apps/showcase'>VIEW MORE</Link>
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
                <Link to='/apps/indeed'>VIEW MORE</Link>
                <Link to='/'>REPO</Link>
            </div>
        </div>
        <img src={pic2} alt="picture" />
      </div>
      <div className="appbox contactme">
        <div className="content">
            <h1>SAYHI</h1>
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
        <img src={pic4} alt="picture" />
      </div>
      <div className="appbox filehosting">
        <div className="content">
            <h1>FILEHOSTING</h1>
            <div>
                <p>REACT</p>
                <p>NODE</p>
                <p>SQL</p>
            </div>
            <div className="liks">
                <Link to='/'>VIEW</Link>
                <Link to='/apps/filehosting'>VIEW MORE</Link>
                <Link to='/'>REPO</Link>
            </div>
        </div>
        <img src={pic5} alt="picture" />
      </div>
      <div className="appbox filehosting">
        <div className="content">
            <h1>BOTCOP</h1>
            <div>
                <p>REACT</p>
                <p>NODE</p>
                <p>SQL</p>
            </div>
            <div className="liks">
                <Link to='/'>VIEW</Link>
                <Link to='/apps/filehosting'>VIEW MORE</Link>
                <Link to='/'>REPO</Link>
            </div>
        </div>
        <img src={pic5} alt="picture" />
      </div>
      <div className="appbox easysend">
        <div className="content">
            <h1>EASYSEND</h1>
            <div>
                <p>REACT</p>
                <p>NODE</p>
                <p>SQL</p>
            </div>
            <div className="liks">
                <Link to='/'>VIEW</Link>
                <Link to='/apps/easysend'>VIEW MORE</Link>
                <Link to='/'>REPO</Link>
            </div>
        </div>
        <img src={pic5} alt="picture" />
      </div>
    </div>
  )
}

export default AppsHome