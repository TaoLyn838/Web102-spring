import React from 'react'
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import RamenCard from './components/RamenCard'

function App() {
  const [ramenShops, setRamenShops] = useState([])
  const [currPhoto, setCurrPhoto] = useState({
    name: '',
    width: 0,
    height: 0,
    authorId: '',
    url: '',
  })

  const [currShop, setCurrShop] = useState({
    id: '',
    name: '',
  })
  const [currIdx, setCurrIdx] = useState(0)

  useEffect(() => {
    const callAPI = async () => {
      try {
        const response = await axios.get('https://ramen-api.dev/shops')
        const data = response.data
        if (data == null) {
          alert("Oops! Something went wrong with that query, let's try again!")
        } else {
          setRamenShops(data.shops)
          const headRamenShop = data.shops[0]
          setCurrShop((prevShop) => ({
            ...prevShop,
            id: headRamenShop.id,
            name: headRamenShop.name,
          }))
          setCurrPhoto(headRamenShop.photos[0])
        }
      } catch (error) {
        console.error(error)
        alert(
          'Oops! Something went wrong with the API request, please try again later.'
        )
      }
    }
    callAPI()
  }, [])

  useEffect(() => {
    if (ramenShops.length > 0) {
      const currRamenShop = ramenShops[currIdx]
      const { id, name } = currRamenShop
      setCurrPhoto(currRamenShop.photos[0])
      setCurrShop((prevShop) => ({
        ...prevShop,
        id: id,
        name: name,
      }))
    }
  }, [currIdx])

  return (
    <>
      <h1 className="font-mono" style={{ fontSize: '44px' }}>
        Ramenkan
      </h1>
      <RamenCard
        ramenShops={ramenShops}
        currPhoto={currPhoto}
        currShop={currShop}
        currIdx={currIdx}
        setCurrIdx={setCurrIdx}
      />
    </>
  )
}

export default App
