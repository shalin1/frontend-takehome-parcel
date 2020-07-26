import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import api from './api'

const App = () => {
    const [loading,setLoading] = useState(false)
    const [searchResults,setSearchResults] = useState([])

    const performSearch = async query => {
        event.preventDefault()
        console.log('query', query)
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
            <Header>Ruby Gem Search</Header>
            <SearchForm performSearch={performSearch} />
            <div>
                {savedGems.length===0 ? <></> :
                    <>
                        <h2>Saved</h2>
                        {savedGems.map(gem=><p key={gem.sha}>{gem.name} version {gem.version}</p>)}
                    </>
                }
            </div>
            <SearchResults
                foundGems={searchResults}
                loading={loading}
                savedGems={savedGems}
                toggleSave={toggleSave}
            />
        </AppContainer>
    )
}

const AppContainer =styled.div`
    align-items: center;  
    background: white;
    border-radius: 20px;
    border: 2px dotted gray;
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
`

const Header = styled.h1`
  font-size: 3rem;
  font-family: 'Homemade Apple', cursive;
  text-transform:lowercase;
  
`

export default App