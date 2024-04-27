import { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { Link, useOutletContext } from 'react-router-dom'

const Home = () => {
  const { posts } = useOutletContext()

  const [sortingOption, setSortingOption] = useState('created_at')

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value)
  }

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortingOption === 'created_at') {
      return new Date(b.created_at) - new Date(a.created_at)
    } else if (sortingOption === 'likeCount') {
      return b.likeCount - a.likeCount
    }
    return 0
  })

  return (
    <div className="container mx-auto px-4 py-6 bg-gray-100 dark:bg-gray-800">
      <select
        className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={sortingOption}
        onChange={handleSortingChange}
      >
        <option value="created_at">Sort by Created At</option>
        <option value="likeCount">Sort by Like Count</option>
      </select>
      {sortedPosts.map((post) => (
        <Link to={`/post/${post.uid}`} key={post.uid}>
          <PostCard key={post.id} post={post} />
        </Link>
      ))}
    </div>
  )
}

export default Home
