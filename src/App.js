import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import { WiredCard } from 'wired-card'
import { WiredDivider } from 'wired-divider'
import SavedGems from './components/SavedGems'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import api from './api'

const App = () => {
    const [loading,setLoading] = useState(false)
    const [searchResults,setSearchResults] = useState([])
    const [querySubmitted,setQuerySubmitted] = useState(false)

    const performSearch = async query => {
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
            <wired-card elevation={3}>
                <Columns showResults={querySubmitted}>
                    <HeaderContainer>
                        <h1>GemDiggr</h1>
                        <h2>A Ruby Gems Search Client</h2>
                        <h2>✨💎⛏💎✨</h2>
                        <SearchForm performSearch={performSearch} loading={loading} />
                    </HeaderContainer>
                    <SavedGems gems={savedGems} unSaveGem={unSaveGem}/>
                </Columns>
                {querySubmitted &&
                <SearchResults
                    foundGems={searchResults}
                    loading={loading}
                    savedGems={savedGems}
                    toggleSave={toggleSave}
                />
                }
            </wired-card>
        </AppContainer>
    )
}

const Columns = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;
    }
`

const SiteTitle = styled.h1`
`

const AppContainer =styled.body`
    background: white;
    text-align: center;
    > wired-card {
        margin: 3rem 4rem;
        padding: 2rem 4rem 4rem;
        width: 80vw;
    }
`

const HeaderContainer = styled.div`
  font-size: 4rem;
  padding: 0;
  width: 100%;
     margin:0;
  @media (min-width: 1024px) {
    margin: 7rem 4rem;
  }
`

export default App