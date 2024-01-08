import "../../styles/skills.scss";
import {IoLogoHtml5,IoLogoCss3, IoLogoNodejs, IoLogoGithub, IoLogoPython} from 'react-icons/io'
import {SiTypescript,SiNextdotjs,SiRabbitmq, SiMysql,SiPostgresql,SiGitea,SiVisualstudiocode} from 'react-icons/si'
import {FaReact,FaAws} from 'react-icons/fa'
import {TbBrandGolang} from 'react-icons/tb'
import {BsFiletypeSql, BsGit} from 'react-icons/bs'
import {DiMongodb} from 'react-icons/di'



const Skills = () => {
  return (
    <div className="skillspage">
      <IoLogoHtml5 />
      <IoLogoCss3 />
      <SiTypescript />
      <IoLogoNodejs />
      <FaReact />
      {/*<SiNextdotjs />*/}
      <TbBrandGolang />
      <IoLogoGithub />
      <BsFiletypeSql />
      <DiMongodb />
      <SiRabbitmq />
      <BsGit />
      <SiMysql />
      <SiPostgresql />
      <IoLogoPython />
      <FaAws />
      {/*<SiGitea />*/}
      <SiVisualstudiocode className="blue"/>
      <div className="scrolldownskills"></div>
      </div>
  );
};

export default Skills;
