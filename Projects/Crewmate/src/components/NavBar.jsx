import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="sidenav">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createMate">Create a Crewmate!</Link>
          </li>
          <li>
            <Link to="/crewmateGallery">Cremate Gallery</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
export default NavBar
