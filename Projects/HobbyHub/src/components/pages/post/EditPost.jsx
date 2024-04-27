import { useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../../../client'
import './EditPost.css'

const EditPost = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const post = location.state?.post

  const handleUpdatePost = async () => {
    const title = document.getElementById('edit-title').value
    const category = document.getElementById('edit-category').value
    const content = document.getElementById('edit-content').value

    if (title === '' || category === '' || content === '') {
      alert('Please fill out all fields')
      return
    }

    const { data, error } = await supabase
      .from('Posts')
      .update({
        title,
        category,
        content,
      })
      .eq('uid', post.uid)

    if (error) {
      console.error('Error updating post:', error)
    } else {
      navigate(`/post/${post.uid}`)
    }
  }

  const handleDeletePost = async () => {
    const { data, error } = await supabase
      .from('Posts')
      .delete()
      .eq('uid', post.uid)

    if (error) {
      console.error('Error deleting post:', error)
    } else {
      window.location = '/'
    }
  }

  return (
    <div className="container rounded-e-lg mx-auto px-4 py-6 bg-gray-900 text-white">
      {post && (
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg mb-6">
          {/* Title */}
          <div className="edit-label">
            <label htmlFor="edit-title" className="label-text">
              Title
            </label>
            <input
              id="edit-title"
              className="py-3 px-4 block w-full bg-white text-gray-900 border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
              type="text"
              defaultValue={post.title}
            />
          </div>
          <br />

          {/* Category */}
          <div className="edit-label">
            <label htmlFor="edit-category" className="label-text">
              Category
            </label>
            <input
              id="edit-category"
              className="py-3 px-4 block w-full bg-white text-gray-900 border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
              type="text"
              defaultValue={post.category}
            />
          </div>
          <br />
          {/* Content */}
          <div className="edit-label">
            <label htmlFor="edit-content" className="label-text">
              Content
            </label>
            <textarea
              className="textarea-input bg-white text-gray-900 border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 w-full p-3"
              id="edit-content"
              rows={8}
              defaultValue={post.content}
            />
          </div>

          <br />

          {/* Buttons */}
          <div className="flex grid grid-cols-1 gap-3">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
              onClick={handleUpdatePost}
            >
              Update Post
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
              onClick={handleDeletePost}
            >
              Delete Post
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
              onClick={() => navigate(`/post/${post.uid}`)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditPost
