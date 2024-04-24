import { supabase } from './../../../client'
import { useState } from 'react'

const CreatePost = () => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    description: '',
    likeCount: 0,
    category: '',
  })

  const createPost = async (event) => {
    event.preventDefault()
    const { data, error } = await supabase.from('Posts').insert([
      {
        title: post.title,
        author: post.author,
        description: post.description,
        likeCount: post.likeCount,
      },
    ])
    if (error) {
      console.error(error)
    } else {
      console.log(data)
      window.location = '/post/create'
    }
  }

  return (
    <>
      <h1>Create Post</h1>
      <form onSubmit={createPost}>
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(event) => setPost({ ...post, title: event.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={post.author}
          onChange={(event) => setPost({ ...post, author: event.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={post.description}
          onChange={(event) =>
            setPost({ ...post, description: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Category"
          value={post.category}
          onChange={(event) =>
            setPost({ ...post, category: event.target.value })
          }
        />
        <button type="submit">Create Post</button>
      </form>
    </>
  )
}

export default CreatePost
