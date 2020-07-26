import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({records,saveRecord,unSaveRecord,savedGems,loading,showLoading,submitted}) => {
    if(!submitted) return <></>
    if(records.length===0) return <span>No results for your search!</span>
    if(showLoading && loading) return <p>loading...</p>
    const gems = records.map(record=>(
        {...record, isSaved: savedGems.indexOf(el=>el.sha===record.sha)!==-1}
    ))

    return(
        <>
            <h2>Search Results</h2>
            {gems.map(gem=>{
                const isNotSaved = savedGemShas.indexOf(gem.sha) === -1
                return (
                    <SearchResult
                        key={gem.sha}
                        record={gem}
                        saveRecord={saveRecord}
                        unSaveRecord={unSaveRecord}
                        isNotSaved={isNotSaved}
                    />
                )
            })}
        </>
    )
}

const SearchResult = ({record,saveRecord,unSaveRecord,isNotSaved}) => {
    const {
        downloads,
        info,
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
            {isNotSaved ?
                <button onClick={()=>saveRecord(record)}>
                    💾 Save Gem
                </button>
                :
                <button onClick={()=>unSaveRecord(record)}>
                    🚫 UnSave Gem
                </button>
            }
        </>
    )
}

SearchResults.propTypes = {
    records: PropTypes.arrayOf(
        PropTypes.shape({
            authors: PropTypes.string,
            documentation_uri: PropTypes.string,
            downloads: PropTypes.number,
            gem_uri: PropTypes.string,
            homepage_uri: PropTypes.string,
            info: PropTypes.string,
            licenses: PropTypes.arrayOf(PropTypes.string),
            name: PropTypes.string,
            project_uri: PropTypes.string,
            sha: PropTypes.string,
            version: PropTypes.string,
            version_downloads: PropTypes.number,
        })
    ),
}

export default SearchResults