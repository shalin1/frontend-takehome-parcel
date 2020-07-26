import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({records,saveRecord,unSaveRecord,savedGems,loading,showLoading,submitted,toggleSaveGem}) => {
    if(!submitted) return <></>
    if(records.length===0) return <span>No results for your search!</span>
    if(showLoading && loading) return <p>loading...</p>
    const savedGemShas = savedGems.map(({sha})=>sha)

    console.log('toggleSaveGem', toggleSaveGem)
    return(
        <>
            <h2>Search Results</h2>
            {records.map(record=>{
                const isNotSaved = savedGemShas.indexOf(record.sha) === -1
                return (
                    <SearchResult
                        key={record.sha}
                        record={record}
                        saveRecord={saveRecord}
                        unSaveRecord={unSaveRecord}
                        toggleSaveGem={toggleSaveGem}
                    />
                )
            })}
        </>
    )
}

const SearchResult = ({record,saveRecord,unSaveRecord,isNotSaved,toggleSaveGem}) => {
    const {
        downloads,
        info,
        isSaved,
        name,
        version,
    } = record

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
                <button onClick={()=>toggleSaveGem(record)}>
                    {record.isSaved ? <p>🚫 UnSave Gem</p> : <p>💾 Save Gem</p>}
                </button>
            }
        </>
    )
}

// SearchResults.propTypes = {
//     records: PropTypes.arrayOf(
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