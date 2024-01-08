import { Link } from "react-router-dom"
import pic from '../assets/images/decidio.png'
import '../styles/about.scss'

const About = () => {
  return (
    <div className="about">
        <h1 className="about-heading">ABOUT</h1>
        <div className="para">
            <p>i grew up in phownix kwa zulu natal.
                went to a local high school
                studied civil engineering fr a year.
                dropped out due to financial issues
                worked for my dad as a carpenter but did not fancy capentry.
                watched youtube videos and learnt software development
            </p>
        </div>
        <div className="photos">
        <p>that little guy is me</p>
        <img 
        height={200}
        src="https://th.bing.com/th/id/R.2a569eb017fccaafb5eb59db9b942108?rik=9nV03J%2fDXtbhww&riu=http%3a%2f%2fwww.troublesometots.com%2fwp-content%2fuploads%2f2010%2f12%2fNewbornBaby.jpg&ehk=2Y9Qixh2MZONfaPV3N5RrTC1EHNnSRBCwQ5suT5UYbs%3d&risl=1&pid=ImgRaw&r=0" alt="kjafkl" />
        <p>this is me in the 5th grade</p>
        <img 
        height={200}
        src="https://th.bing.com/th/id/OIP.bT6zGLAGUfRSEU1IKv0xfQHaDt?pid=ImgDet&rs=1" alt="" />
        <p>pic of me when in was in matric</p>
        <img
        height={200}
         src="https://th.bing.com/th/id/OIP.8U_n8_rQ3sg8hs-hdFpA5gHaKX?pid=ImgDet&rs=1" alt="" />
<p>pic of me now</p>
        <img 
        height={200}
        src="https://th.bing.com/th/id/OIP.SixDAMzkA52hBAu11XngNQHaJG?pid=ImgDet&rs=1" alt="" />
        </div>

        <div className="likes">
            <h1>likes</h1>
            <ul>
                <li>chilling</li>
                <li>relaxong</li>
                <li>netflix</li>
                <li>travel</li>
                <li>peace</li>
            </ul>
        </div>
        <div className="hobbies">
            <h1>hobbies</h1>
            <ul>
                <li>playing football</li>
                <li>coding</li>
            </ul>
        </div>
        <div className="we">
            <h1>work experience</h1>
            <ul>
            <img 
        height={100}
        width={300}
        src={pic} alt="ef" />
                <li>SOFTWARE ENGINEER</li>
                <li>duties</li>
                <li>more, link to amore about this job page</li>
                <li>who i was underneath and what i learnt from the job</li>
                <Link to='/jobs/decidio'>view more</Link>
            </ul>
        </div>
        <div className="education">
            <h1>education</h1>
            <ul>
                <li>Rydalpark secondary</li>
                <li>matric</li>
                <li>2012-2016</li>
            </ul>
        </div>
    </div>
  )
}

export default About