import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import './NavBar.css'
import Icons from './Icons'

const NavBar = () => {
  return (
    <header className="navbar-header">
      <div className="flex items-center">
        <Link className="nvabar-title" to="/">
          HobbyHub
        </Link>
        <nav className="nav-sidebar">
          <Link className="hover:text-gray-300" to="/">
            <Icons.Home />
          </Link>
          <Link className="hover:text-gray-300" to="/post/create">
            <Icons.NewPost />
          </Link>
        </nav>
      </div>
      <div className="flex items-center">
        <SearchBar />
        <button className="ml-4" variant="outline"></button>
        <div className="ml-4">
          <Icons.User />
        </div>
      </div>
    </header>
  )
}

export default NavBar
