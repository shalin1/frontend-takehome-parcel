import React from 'react';

const SearchResults = ({foundGems,loading,savedGems,toggleSave}) => {
    const gems = foundGems.map(found=>{
        const isSaved = savedGems.some(saved=>saved.sha===found.sha)
        return({...found,isSaved})
    })

    return(
        <>
            <h2>Search Results</h2>
            {loading ? <p>loading...</p> :
                <>
                    {gems.map(gem => (
                        <SearchResult key={gem.sha} gem={gem} toggleSave={toggleSave}/>
                    ))}
                </>
            }
        </>
    )
}

const SearchResult = ({gem,toggleSave}) => {
    const {
        downloads,
        info,
        isSaved,
        name,
        version,
    } = gem

    return(
        <>
            <div>
                <h3>{name}</h3> <span>{version}</span>
                <br/>
                <p>{info}</p>
            </div>
            <div>
                {downloads}
                <br/>
                <p>downloads</p>
            </div>
                <button onClick={()=>toggleSave(gem)}>
                    {isSaved ?
                        <span>🚫 UnSave Gem</span> :
                        <span>💾 Save Gem</span>
                    }
                </button>

        </>
    )
}

// SearchResults.propTypes = {
//     foundGems: PropTypes.arrayOf(
//         //todo: refactor to pull this shape out as its shareable prop obj
//         PropTypes.shape({
//             authors: PropTypes.string,
//             documentation_uri: PropTypes.string,
//             downloads: PropTypes.number,
//             gem_uri: PropTypes.string,
//             homepage_uri: PropTypes.string,
//             info: PropTypes.string,
//             licenses: PropTypes.arrayOf(PropTypes.string),
//             name: PropTypes.string,
//             project_uri: PropTypes.string,
//             sha: PropTypes.string,
//             version: PropTypes.string,
//             version_downloads: PropTypes.number,
//         })
//     ),
// }

export default SearchResults