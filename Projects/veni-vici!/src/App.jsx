import { useEffect, useState } from 'react'
import './App.css'
import './components/Sidebars.css'
import './components/Buttons.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY
import axios from 'axios'
import SideNav from './components/SideNav'
import HistorySidebar from './components/HistorySidebar'
import DiscoverContainer from './components/DiscoverContainer'

function App() {
  const [catsData, setCatsData] = useState([])
  const [discoverHistory, setDiscoverHistory] = useState([])
  const [cat, setCat] = useState({
    id: '',
    name: '',
    description: '',
    wikipedia_url: '',
    img_url: '', // addition of cat img url
  })
  const [attributeBtn, setAttributeBtn] = useState({
    origin: '',
    imperial: '',
    metric: '',
    life_span: '',
    temperaments: [],
  })
  const [banList, setBanList] = useState({
    origin: [],
    imperial: [],
    metric: [],
    life_span: [],
    temperaments: [],
  })

  useEffect(() => {
    const callAPI = async () => {
      const reponse = await axios.get(makeQuery('breeds'))
      const data = reponse.data
      if (data == null) {
        alert("Oops! Something went wrong with that query, let's try again!")
      } else {
        setCatsData(data)
      }
    }
    callAPI().catch(console.error)
  }, [])

  useEffect(() => {
    const updatedAttributeBtn = { ...attributeBtn }
    for (const [key, value] of Object.entries(updatedAttributeBtn)) {
      if (Array.isArray(value)) {
        const updatedTemperaments = value.filter(
          (temperaments) => !banList[key].includes(temperaments)
        )
        if (updatedTemperaments.length === 0) {
          delete updatedAttributeBtn[key]
        } else {
          updatedAttributeBtn[key] = updatedTemperaments
        }
      } else {
        if (banList[key].includes(String(value))) {
          delete updatedAttributeBtn[key]
        }
      }
    }
    setAttributeBtn(updatedAttributeBtn)
  }, [banList])

  const makeQuery = (entity, id = null) => {
    return id
      ? `https://api.thecatapi.com/v1/${entity}/search?id=${id}W&
    api_key=${ACCESS_KEY}`
      : `https://api.thecatapi.com/v1/${entity}`
  }

  const handleQuery = async () => {
    const fetchRandomCat = catsData[Math.floor(Math.random() * catsData.length)]
    const catImg = await axios
      .get(makeQuery('images', fetchRandomCat.reference_image_id))
      .catch(console.error)
    const {
      id,
      name,
      description,
      origin,
      temperament,
      weight,
      life_span,
      wikipedia_url,
    } = fetchRandomCat

    setCat({
      id,
      name,
      description,
      wikipedia_url,
      img_url: catImg.data[0].url,
    })

    const catAttributes = {
      origin,
      imperial: weight.imperial,
      metric: weight.metric,
      life_span,
      temperaments: temperament.split(', '),
    }

    setAttributeBtn(filterCats(catAttributes))

    setDiscoverHistory((cats) => {
      return cat.id === '' ? [] : [...cats, cat]
    })
  }

  const filterCats = (catAttributes) => {
    for (const [key, value] of Object.entries(catAttributes)) {
      if (key !== 'temperaments') {
        if (banList[key].includes(value)) {
          delete catAttributes[key]
        }
      } else {
        catAttributes[key] = value.filter(
          (temperaments) => !banList[key].includes(temperaments)
        )
        if (value.length === 0) {
          delete catAttributes[key]
        }
      }
    }
    return catAttributes
  }

  function addAttributeToBanList(key, value) {
    setBanList((prevBanList) => ({
      ...prevBanList,
      [key]: [...prevBanList[key], value],
    }))
  }

  function removeAttributeToBanList(e) {
    const key = e.target.name
    const value = e.target.value
    setBanList((prevBanList) => ({
      ...prevBanList,
      [key]: prevBanList[key].filter((item) => item !== value),
    }))
  }

  return (
    <>
      <div className="whole-page">
        <h1 className="App-name">Catpath</h1>
        <h3 className="start-detail">
          {' '}
          Uncover a world of enchanting felines, each more captivating than the
          last, in your quest to find the cat of your dreams!
        </h3>
        <DiscoverContainer
          cat={cat}
          attributeBtn={attributeBtn}
          addAttributeToBanList={addAttributeToBanList}
        />
        <br />
        <button className="discover-btn" type="submit" onClick={handleQuery}>
          🔀 Discover!
        </button>
      </div>
      <HistorySidebar discoverHistory={discoverHistory} />
      <SideNav
        banList={banList}
        removeAttributeToBanList={removeAttributeToBanList}
      />
    </>
  )
}

export default App
