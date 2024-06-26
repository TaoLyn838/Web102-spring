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
    <div className=" grid grid-cols-1  bg-gray-100 dark:bg-gray-800">
      <select
        className="py-2 px-2 border font-mono border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={sortingOption}
        onChange={handleSortingChange}
      >
        <option value="created_at">Sort by Created At</option>
        <option value="likeCount">Sort by Up Votes</option>
      </select>
      {sortedPosts.map((post) => (
        <div className="container mx-auto px-4 py-1" key={post.id}>
          <Link to={`/post/${post.uid}`} key={post.id}>
            <PostCard key={post.id} post={post} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home
