import React, {useState,useEffect} from 'react'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import api from './api'

const App = () => {
    const [searchResults,setSearchResults] = useState([])
    const [loading,setLoading] = useState(false)

    const performSearch = async event => {
        event.preventDefault()
        setLoading(true)
        const query = event.target[0].value
        const res = await api.getGems(query)
        setSearchResults(res)
        setLoading(false)
    }

    const initialSavedGems = JSON.parse(window.localStorage.getItem('savedGems')) || []
    const [savedGems,setSavedGems] = useState(initialSavedGems)
    useEffect(()=>{
        window.localStorage.setItem('savedGems', JSON.stringify(savedGems))
    },[savedGems])


    const saveRecord = newRecord => setSavedGems(
        savedGems.find(gem=>gem.sha===newRecord.sha) ? savedGems : [...savedGems,newRecord]
    )

    const unSaveRecord = recordToRemove => setSavedGems(
        savedGems.filter(el => el.sha!==recordToRemove.sha)
    )

    return (
        <div role='main' key='app'>
            <h1>💎✨🔍😎 Ruby Gem Search App</h1>
            <div>
                <SearchForm
                    performSearch={performSearch}
                />
                <div>
                    {savedGems.length===0 ? <></> :
                        <>
                            <h2>Saved</h2>
                            {savedGems.map(gem=><p key={gem.sha}>{gem.name}</p>)}
                        </>
                    }
                </div>
                <SearchResults
                    gems={searchResults}
                    saveRecord={saveRecord}
                    unSaveRecord={unSaveRecord}
                    loading={loading}
                    savedGems={searchResults}
                />
            </div>
        </div>
    )
}

export default App