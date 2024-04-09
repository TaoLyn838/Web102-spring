import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './NavBar.css'
import { useState } from 'react'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const SiderBarController = () => {
    return (
      <div className="py-3 flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-list"
          onClick={() => setOpen(!open)}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l11 0" />
          <path d="M9 12l11 0" />
          <path d="M9 18l11 0" />
          <path d="M5 6l0 .01" />
          <path d="M5 12l0 .01" />
          <path d="M5 18l0 .01" />
        </svg>
      </div>
    )
  }

  const HomeLink = () => {
    return (
      <Link className="navbar-link" to="/">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-home"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
        </div>
        <h2
          className={`whitespace-pre duration-500 ${
            !open && 'opacity-0 translate-x-28 overflow-hidden'
          }`}
        >
          Home
        </h2>
        <h2
          className={`${
            open && 'hidden'
          } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
        >
          Home
        </h2>
      </Link>
    )
  }

  const CreateCrewLink = () => {
    return (
      <Link className="navbar-link" to="/createMate">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-among-us"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.646 12.774c-1.939 .396 -4.467 .317 -6.234 -.601c-2.454 -1.263 -1.537 -4.66 1.423 -4.982c2.254 -.224 3.814 -.354 5.65 .214c.835 .256 1.93 .569 1.355 3.281c-.191 1.067 -1.07 1.904 -2.194 2.088z" />
            <path d="M5.84 7.132c.083 -.564 .214 -1.12 .392 -1.661c.456 -.936 1.095 -2.068 3.985 -2.456a22.464 22.464 0 0 1 2.867 .08c1.776 .14 2.643 1.234 3.287 3.368c.339 1.157 .46 2.342 .629 3.537v11l-12.704 -.019c-.552 -2.386 -.262 -5.894 .204 -8.481" />
            <path d="M17 10c.991 .163 2.105 .383 3.069 .67c.255 .13 .52 .275 .534 .505c.264 3.434 .57 7.448 .278 9.825h-3.881" />
          </svg>
        </div>
        <h2
          className={`whitespace-pre duration-500 ${
            !open && 'opacity-0 translate-x-28 overflow-hidden'
          }`}
        >
          Create a Crewmate
        </h2>
        <h2
          className={`${
            open && 'hidden'
          } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
        >
          Create a Crewmate
        </h2>
      </Link>
    )
  }

  const GalleryLink = () => {
    return (
      <Link className="navbar-link" to="/crewmateGallery">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
            <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M17 10h2a2 2 0 0 1 2 2v1" />
            <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
          </svg>
        </div>
        <h2
          className={`whitespace-pre duration-500 ${
            !open && 'opacity-0 translate-x-28 overflow-hidden'
          }`}
        >
          Crewmate Gallery
        </h2>
        <h2
          className={`${
            open && 'hidden'
          } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
        >
          Crewmate Gallery
        </h2>
      </Link>
    )
  }

  return (
    <div id="nav-sidebar" className="navbar">
      <nav className="flex gap-6">
        <div
          className={`bg-gray-900 min-h-screen ${
            open ? 'w-60' : 'w-16'
          } duration-500 text-gray-100 px-4`}
        >
          <SiderBarController />
          <div className="mt-4 flex flex-col gap-4 relative">
            <HomeLink />
            <CreateCrewLink />
            <GalleryLink />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
export default NavBar
