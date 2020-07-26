import React, {useState,useEffect} from 'react'
import styled from 'styled-components'

import SavedGems from './components/SavedGems'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import api from './api'

const App = () => {
    const [loading,setLoading] = useState(false)
    const [searchResults,setSearchResults] = useState([])
    const [querySubmitted,setQuerySubmitted] = useState(false)

    const performSearch = async query => {
        event.preventDefault()
        console.log('query', query)
        setQuerySubmitted(true)
        setLoading(true)
        const res = await api.getGems({ query })
        setSearchResults(res)
        setLoading(false)
    }

    const initialSavedGems = JSON.parse(window.localStorage.getItem('savedGems')) || []
    const [savedGems,setSavedGems] = useState(initialSavedGems)
    useEffect(()=>{
        window.localStorage.setItem('savedGems', JSON.stringify(savedGems))
    },[savedGems])

    const saveGem = gem => setSavedGems([...savedGems,gem])
    const unSaveGem = gem => setSavedGems(savedGems.filter(({sha}) => sha!==gem.sha))
    const toggleSave = gem => gem.isSaved ? unSaveGem(gem) : saveGem(gem)

    return (
        <AppContainer role='main' key='app'>
            <Header>Ruby  Gems </Header>
            <Header> Search  App!</Header>
            <SearchForm performSearch={performSearch} loading={loading} />
            <Columns showResults={querySubmitted}>
                <SavedGems gems={savedGems}/>
                {querySubmitted &&
                <SearchResults
                    foundGems={searchResults}
                    loading={loading}
                    savedGems={savedGems}
                    toggleSave={toggleSave}
                />
                }
            </Columns>
        </AppContainer>
    )
}

const Columns = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  max-width: 100%;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const AppContainer =styled.div`
    align-items: center;  
    background: white;
    border-radius: 20px;
    border: 2px dotted gray;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    padding: 1rem;
    text-align: center;
`

const Header = styled.h1`
  font-size: 4rem;
  
`

export default App