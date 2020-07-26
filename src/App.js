import React, {useState,useEffect} from 'react'
import SearchInput from './components/SearchInput'
import SearchResults from './components/SearchResults'
import api from './api'

const App = () => {
    const initialSavedGems = JSON.parse(window.localStorage.getItem('savedGems')) || []
    const [savedGems,setSavedGems] = useState(initialSavedGems)
    useEffect(()=>{window.localStorage.setItem('savedGems', JSON.stringify(savedGems))},[savedGems])

    const [query,setQuery] = useState('')
    const [searchResults,setSearchResults] = useState([])
    const [displayedSearchResults,setDisplayedSearchResults] = useState([])
    const [loading,setLoading] = useState(false)
    const [showLoading,setShowLoading] = useState(false)
    const [submitted,setSubmitted] = useState(false)

    const handleSearch = async () => {
        setLoading(true)
        const res = await api.getGems(query)
        setSearchResults(res)
        setLoading(false)
    }

    const handleSearchButton = async (e) => {
        e.preventDefault()
        setSubmitted(true)
        setShowLoading(true)
        setDisplayedSearchResults(searchResults)
        setShowLoading(false)
    }

    useEffect( () => {
        handleSearch({ query })
        return(()=>{})
    }, [query])

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
                <form onSubmit={handleSearchButton}>
                    <SearchInput value={query} onChange={setQuery}/>
                    <input type='submit' value="🔍Search"/>
                </form>
                <div>
                    {savedGems.length===0 ? <></> :
                        <>
                            <h2>Saved</h2>
                            {savedGems.map(gem=><p key={gem.sha}>{gem.name}</p>)}
                        </>
                    }
                </div>
                <SearchResults
                    submitted={submitted}
                    records={displayedSearchResults}
                    saveRecord={saveRecord}
                    unSaveRecord={unSaveRecord}
                    loading={loading}
                    showLoading={showLoading}
                    savedGems={savedGems}
                />
            </div>
        </div>
    )
}

export default App