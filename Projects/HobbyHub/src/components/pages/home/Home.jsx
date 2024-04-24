import { useEffect, useState } from 'react'
import { supabase } from '../../../client'
import PostCard from './PostCard'

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from('Posts').select('*')
      if (error) console.log('error', error)
      else setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
export default Home
