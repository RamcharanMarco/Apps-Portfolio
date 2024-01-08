import { Link } from "react-router-dom";
import "../../styles/homeprojects.scss";
import pic from "../../assets/apps/indeed.png";
import linkbio from '../../assets/apps/linkbio.png'
import showcase from '../../assets/apps/showcase.png'

const HomeProjects = () => {
  return (
    <div className="homeprojects">
      <h1 className="homeprojectsheading">my work</h1>
      <div className="homeprojectscontainer">
        <div className="homeprojectsbox">
          <div className="info">
            <h1>indeed</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              sequi at ipsa voluptatem perspiciatis magni sunt ducimus quis
              voluptate, beatae commodi cupiditate debitis, dicta repudiandae
              quam animi. Nisi, iusto nam!
            </p>
            <div>
              <Link to="/">more</Link>
              <Link to="/">live</Link>
              <Link to="/">repo</Link>
            </div>
          </div>
          <div className="image">
            <img src={pic} alt="df" />
          </div>
        </div>
        <div className="homeprojectsbox">
          <div className="image">
            <img src={linkbio} alt="df" />
          </div>
          <div className="info">
            <h1>linkbio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              sequi at ipsa voluptatem perspiciatis magni sunt ducimus quis
              voluptate, beatae commodi cupiditate debitis, dicta repudiandae
              quam animi. Nisi, iusto nam!
            </p>
            <div>
              <Link to="/">more</Link>
              <Link to="/">live</Link>
              <Link to="/">repo</Link>
            </div>
          </div>
        </div>
        <div className="homeprojectsbox">
          <div className="info">
            <h1>indeed</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              sequi at ipsa voluptatem perspiciatis magni sunt ducimus quis
              voluptate, beatae commodi cupiditate debitis, dicta repudiandae
              quam animi. Nisi, iusto nam!
            </p>
            <div>
              <Link to="/">more</Link>
              <Link to="/">live</Link>
              <Link to="/">repo</Link>
            </div>
          </div>
          <div className="image">
            <img src={showcase} alt="df" />
          </div>
        </div>
      </div>
      <Link className="more-projects" to="/">
        more projects
      </Link>
    </div>
  );
};

export default HomeProjects;
