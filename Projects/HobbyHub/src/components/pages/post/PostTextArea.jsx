import './PostTextArea.css'
import Icons from '../../Icons'
import TextArea from '../../ui/TextArea'

const PostTextArea = ({ post, setPost, setSelectedImage }) => {
  const UploadImagelabel = () => {
    return (
      <>
        <label htmlFor="image-upload" className="attach-file-btn">
          <Icons.UploadImage />
          <span className="sr-only">Upload Image</span>
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={(event) => setSelectedImage(event.target.files[0])}
          style={{ display: 'none' }}
        />
      </>
    )
  }

  return (
    <>
      <div className="textarea-btn-container">
        <div className="textarea-btn-item">
          <UploadImagelabel />
        </div>
        <TextArea
          id="post-content"
          row="8"
          placeholder="write your post here..."
          value={post.content}
          onChange={(event) =>
            setPost({ ...post, content: event.target.value })
          }
        />
      </div>
    </>
  )
}
export default PostTextArea
