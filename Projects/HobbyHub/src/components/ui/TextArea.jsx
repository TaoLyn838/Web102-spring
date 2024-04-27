import './TextArea.css'

const TextArea = ({ id, row, placeholder, value, onChange }) => {
  return (
    <div className="textarea-container">
      <textarea
        id={id}
        rows={row}
        className="textarea-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}
export default TextArea
