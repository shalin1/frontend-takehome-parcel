import React, {useState} from 'react'
import SearchInput from './components/SearchInput'

const App = () => {
    const [searchTerm,setSearchTerm] = useState('')

    return (
        <>
            <h1>✨👋🌍Hello World</h1>
            <SearchInput value={searchTerm} onChange={setSearchTerm}/>
        </>
    )
}

export default App