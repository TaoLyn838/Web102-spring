import { useEffect, useState } from 'react'
import { supabase } from '../../../client'

const Comments = ({ postUID }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('Comments')
        .select('*')
        .eq('uid', postUID)

      if (error) {
        console.error('Error fetching comments:', error)
      } else {
        setComments(data)
      }
    }
    fetchComments()
  }, [postUID, isSubmitting])

  const handleCommentChange = (e) => {
    setNewComment(e.target.value)
  }

  const handleCommentSubmit = async () => {
    if (newComment.trim() === '') {
      alert('Comment cannot be empty')
      return
    }

    setIsSubmitting(true)

    try {
      const { data, error } = await supabase.from('Comments').insert({
        uid: postUID,
        content: newComment,
      })

      if (error) {
        console.error('Error adding comment:', error)
        alert('Error adding comment')
      } else if (data && data.length > 0) {
        setComments([...comments, data[0]])
      }
    } catch (error) {
      console.error('Error adding comment:', error)
    } finally {
      setIsSubmitting(false)
    }
    setNewComment('')
  }

  return (
    <>
      {comments.length > 0 ? (
        <div>
          {comments.map((comment) => (
            <div key={comment.id} className="max-w-xs">
              <ul className="flex flex-col">
                <li className="inline-flex items-center gap-x-2 py-3 text-sm font-medium text-gray-800 dark:text-white border-b border-gray-200 dark:border-neutral-700">
                  {comment.content}
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-semibold">No comments yet</p>
      )}
      <div>
        <br />
        <div className="grid grid-cols-1 gap-5">
          <textarea
            className="textarea-input bg-white text-gray-900 border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 w-full p-3"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Leave a comment...."
          />
          <button
            className="app-btn"
            onClick={handleCommentSubmit}
            disabled={isSubmitting}
          >
            Add Comment
          </button>
        </div>
      </div>
    </>
  )
}
export default Comments
