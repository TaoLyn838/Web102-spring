import './SearchBar.css'

const SearchBar = ({
  SearchIcon,
  selectedTitle,
  setSelectedTitle,
  onSearchClick,
}) => {
  const handleSearch = (e) => {
    setSelectedTitle(e.target.value)
  }

  return (
    <div className="searchbar-container">
      <div className="grid searchbar-title">
        <button className="searchbar-button" onClick={onSearchClick}>
          <SearchIcon />
        </button>
      </div>
      <input
        className="peer searchbar-input pr-2"
        type="text"
        placeholder="Search..."
        value={selectedTitle}
        onChange={handleSearch}
      />
    </div>
  )
}

export default SearchBar
