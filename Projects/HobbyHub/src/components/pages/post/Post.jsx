import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../../../client'
import Comments from './Comments'
import { LikeCountIcon, EditIcon } from '../../Icons'

const Post = () => {
  const { id: uid } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select('*')
        .eq('uid', uid)
        .single()

      if (error) {
        console.error('Error fetching post:', error)
      } else {
        setPost(data)
      }
    }

    fetchPost()
  }, [uid, post])

  const handleLike = async () => {
    if (post) {
      const { data, error } = await supabase
        .from('Posts')
        .update([{ likeCount: post.likeCount + 1 }])
        .eq('uid', uid)
      if (error) {
        console.error('Error updating post:', error)
      } else {
        // setPost({ ...post, likeCount: post.likeCount + 1 })
      }
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 py-6 bg-gray-900 text-white">
        {post && (
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg mb-6">
            <h1 className="text-2xl font-bold text-left mb-4">Title</h1>

            {/* Title Box */}
            <h2 className="app-input mb-4">{post.title}</h2>

            <h1 className="text-2xl font-bold text-left mb-4">Content</h1>

            {/* Content Box with fixed height and scrolling */}
            <div className="border bg-white rounded-lg p-4 mb-6 h-36 overflow-y-auto">
              <p className="app-input">{post.content}</p>
            </div>

            <div className="flex justify-between pt-4">
              <div>
                <button
                  className="bg-sky-900 text-rose-500 px-4 py-2 rounded-md hover:bg-sky-800 flex items-center"
                  onClick={handleLike}
                >
                  <LikeCountIcon />
                  <span className="ml-2">{post.likeCount}</span>
                </button>
              </div>

              <div className="flex space-x-4">
                <Link
                  to={`/post/${uid}/edit`}
                  className="bg-sky-900 text-sky-100 px-4 py-2 rounded-md hover:bg-sky-800 flex items-center"
                  state={{ post: post }}
                >
                  <EditIcon />
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <Comments postUID={uid} />
        </div>
      </div>
    </>
  )
}

export default Post
