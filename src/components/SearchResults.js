import React from 'react';
import styled from 'styled-components'
import { WiredCard } from 'wired-card'
import { WiredDivider } from 'wired-divider'
import SearchResult from './SearchResult'

const SearchResults = ({foundGems,loading,savedGems,toggleSave}) => {
    const gems = foundGems.map(found=>{
        const isSaved = savedGems.some(saved=>saved.sha===found.sha)
        return({...found,isSaved})
    })

    return(
        <SearchResultsContainer>
            <wired-card elevation={3}>
            <h2>Search Results</h2>
                {loading ? <p>loading...</p>
                    : gems.length === 0 ? <p>'💣☹️ no gems found️</p>
                        : <>
                            {gems.map(gem => (
                                <>
                                    <SearchResult key={gem.sha} gem={gem} toggleSave={toggleSave}/>
                               </>
                            ))}
                        </>

            }
            </wired-card>
        </SearchResultsContainer>
    )
}
const SearchResultsContainer = styled.section`
    width: 100%;
        height: 2000px;
    wired-card{
        margin: 0 2rem;
        height: 2000px;
    }
`

export default SearchResults