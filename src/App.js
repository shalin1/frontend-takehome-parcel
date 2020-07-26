import React, {useState,useEffect} from 'react'
import SearchInput from './components/SearchInput'
import SearchResults from './components/SearchResults'
import api from './api'

const App = () => {
    const [searchTerm,setSearchTerm] = useState('')
    const [displayedSearchResults,setDisplayedSearchResults] = useState([])
    const [searchResults,setSearchResults] = useState([])
    const [loading,setLoading] = useState(false)
    const [savedGems,setSavedGems] = useState([])
    const [showResults,setShowResults] = useState(false)

    const handleSearch = async () => {
        setLoading(true)
        const res = await api.getGems(searchTerm)
        setSearchResults(res)
        setLoading(false)
    }

    const handleSearchButton = async (e) => {
        e.preventDefault()
        setShowResults(true)
        setDisplayedSearchResults(searchResults)
    }

    useEffect( () => {
        handleSearch(searchTerm)
        return(()=>{})
    }, [searchTerm])

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
                    <SearchInput value={searchTerm} onChange={setSearchTerm}/>
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
                    records={displayedSearchResults}
                    saveRecord={saveRecord}
                    unSaveRecord={unSaveRecord}
                    loading={loading}
                    showResults={showResults}
                />
            </div>
        </div>
    )
}

export default App