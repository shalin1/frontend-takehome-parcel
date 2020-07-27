import React from 'react'
import styled from 'styled-components'
import {WiredButton} from 'wired-button'

const SearchResult = ({gem,toggleSave}) => {
    const {
        downloads,
        info,
        isSaved,
        name,
        version,
        version_downloads:versionDownloads
    } = gem

    const buttonText = isSaved ? <span>🚫 UnSave Gem</span> : <span>💾 Save Gem</span>
    const versionText = versionDownloads > 0 ? <span>{versionDownloads} of this version</span> : null

    return(
        <GemContainer>
            <div>
                <Top>
                    <div>
                        <h3>{name}</h3>
                        <span>version {version}</span>
                    </div>
                    <Downloads>
                        <span>{downloads} downloads</span>
                        <br/>
                        <span>{versionText}</span>
                    </Downloads>
                </Top>
                <p>{info}</p>
            </div>
            <div>
                <wired-button onClick={()=>toggleSave(gem)}>
                    {buttonText}
                </wired-button>
            </div>
        </GemContainer>
    )
}

const GemContainer = styled.div`
  text-align: left;
  padding: 2rem;
`

const Top = styled.div`
 display: flex; 
 align-items: baseline;
 justify-content: space-between;
 margin-bottom: 0.2rem;
 > h3 {
 margin-right: 1rem;
 }
`

const Downloads = styled.div`
  text-align: right;
`

export default SearchResult


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
