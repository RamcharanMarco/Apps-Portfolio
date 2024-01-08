import {Link} from 'react-router-dom'
import '../../styles/appsNavbar.scss'

const AppsNavbar = () => {



  return (
    <nav className="appsNavbar">
        <h1>apps navbbar</h1>
        <div className="links">
          <Link to='/'>home</Link>
        </div>
    </nav>
  )
}

export default AppsNavbar