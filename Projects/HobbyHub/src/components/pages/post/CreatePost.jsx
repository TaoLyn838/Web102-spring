import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { supabase } from '../../../client'
import PostTextArea from './PostTextArea'

const CreatePost = () => {
  const [post, setPost] = useState({
    uid: uuidv4(),
    title: '',
    author: '',
    description: '',
    content: '',
    category: '',
  })

  const [selectedImage, setSelectedImage] = useState(null)

  const createPost = async (event) => {
    if (
      post.title === '' ||
      post.author === '' ||
      post.content === '' ||
      post.category === '' ||
      post.description === ''
    ) {
      alert('Please fill out all fields')
      return
    }
    event.preventDefault()
    const { data, error } = await supabase.from('Posts').insert([
      {
        uid: post.uid,
        title: post.title,
        author: post.author,
        description: post.description,
        content: post.content,
        category: post.category,
      },
    ])
    if (error) {
      console.error(error)
    } else {
      console.log(data)
      window.location = '/'
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <form className="grid grid-cols-1 gap-6" onSubmit={createPost}>
        <input
          type="text"
          className="app-input"
          placeholder="Title"
          value={post.title}
          onChange={(event) => setPost({ ...post, title: event.target.value })}
        />

        <input
          type="text"
          className="app-input"
          placeholder="Author"
          value={post.author}
          onChange={(event) => setPost({ ...post, author: event.target.value })}
        />

        <input
          type="text"
          className="app-input"
          placeholder="Description"
          value={post.description}
          onChange={(event) =>
            setPost({ ...post, description: event.target.value })
          }
        />

        <input
          type="text"
          className="app-input"
          placeholder="Category"
          value={post.category}
          onChange={(event) =>
            setPost({ ...post, category: event.target.value })
          }
        />

        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            className="w-32 h-32 rounded-lg object-cover"
          />
        )}

        <PostTextArea
          post={post}
          setPost={setPost}
          setSelectedImage={setSelectedImage}
        />

        <button className="app-btn" type="submit">
          Create Post
        </button>
      </form>
    </div>
  )
}

export default CreatePost
