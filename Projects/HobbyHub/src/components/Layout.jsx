import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import { supabase } from '../client'

export const Layout = () => {
  const [selectedTitle, setSelectedTitle] = useState('')
  const [posts, setPosts] = useState([])

  const fetchAllPosts = async () => {
    const { data, error } = await supabase.from('Posts').select('*')
    if (error) {
      console.error('Fetch all posts error:', error)
    } else {
      setPosts(data)
    }
  }

  const handleSearch = async () => {
    if (selectedTitle !== '') {
      const { data, error } = await supabase
        .from('Posts')
        .select('*')
        .ilike('title', `%${selectedTitle}%`)

      if (error) {
        console.error('Error searching posts:', error)
      } else {
        setPosts(data)
      }
    } else {
      fetchAllPosts()
    }
  }

  useEffect(() => {
    fetchAllPosts()
  }, [])

  return (
    <div>
      <NavBar
        selectedTitle={selectedTitle}
        setSelectedTitle={setSelectedTitle}
        onSearchClick={handleSearch}
      />
      <Outlet context={{ posts }} />
    </div>
  )
}
