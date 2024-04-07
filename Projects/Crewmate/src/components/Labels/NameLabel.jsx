export const NameLabel = ({ username, handleChange }) => {
  return (
    <div className="mini-container">
      <label>
        <h3>Name:</h3>
      </label>
      <input
        type="text"
        name="name"
        value={username}
        placeholder="Enter your name"
        onChange={handleChange}
      />
    </div>
  )
}
