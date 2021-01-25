import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import CharacterGrid from './components/CharacterGrid'
import Search from './components/Search'
import './assets/main.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="App">
       <Header />
       <Search getQuery={(q) => setQuery(q)} />
      <div className='container mx-auto px-5'>
        <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    </div>
    
  )
}

export default App