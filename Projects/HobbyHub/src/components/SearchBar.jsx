import React, { useState } from 'react'
import './SearchBar.css'
import { Search } from './Icons'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    // Perform search logic here
  }

  return (
    <div className="searchbar-container">
      <div className="grid searchbar-title">
        <Search />
      </div>
      <input
        className="peer searchbar-input pr-2"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* Render search results or other components based on search term */}
    </div>
  )
}

export default SearchBar
