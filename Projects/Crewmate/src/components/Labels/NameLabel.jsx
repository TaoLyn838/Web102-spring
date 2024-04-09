export const NameLabel = ({ username, handleChange }) => {
  return (
    <div>
      <label className="label-title">
        <h3>Name:</h3>
      </label>
      <input
        className="name-label-input"
        type="text"
        name="name"
        value={username}
        placeholder="Enter your name"
        onChange={handleChange}
      />
    </div>
  )
}
