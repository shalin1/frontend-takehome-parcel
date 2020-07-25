import React, {useState} from 'react'
import SearchInput from './components/SearchInput'

const App = () => {
    const [searchTerm,setSearchTerm] = useState('')
    const submit = () => {}

    return (
        <div role='main' key='app'>
            <h1>✨👋🌍 Hello World</h1>
            <SearchInput value={searchTerm} onChange={setSearchTerm}/>
       </div>
    )
}

export default App