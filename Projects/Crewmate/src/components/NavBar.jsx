import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="sidenav">
      <Link to="/">Home</Link>
      <Link to="/createMate">Create a Crewmate!</Link>
      <Link to="/crewmateGallery">Cremate Gallery</Link>
    </nav>
  )
}
export default NavBar
