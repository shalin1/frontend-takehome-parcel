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

    return(
        <GemContainer>
            <wired-card>
            <div>
                <Top>
                    <Name>
                        <h3 style={{hyphenation:'auto', fontSize:'1.6rem'}}>{name}</h3><Version>{version}</Version>
                    </Name>
                    <wired-button onClick={()=>toggleSave(gem)}>
                        {buttonText}
                    </wired-button>
                </Top>
                <div style={{width:"100%"}}>
                {info}
                </div>
            </div>
            <Downloads>
                <span>{downloads} downloads</span>
            </Downloads>
            </wired-card>
        </GemContainer>
    )
}

const GemContainer = styled.div`
    text-align: left;
    display:flex;
    flex-direction: column;
    (@min-width:768px){
    
    margin: 2rem;
    }
    wired-card {
      padding: 2rem;
    }
`

const Name = styled.div`
    display: flex;
    align-items: baseline;
`

const Version = styled.span`
    color: grey;
    margin-left: 0.7rem;
`

const Top = styled.div`
     display: flex; 
     flex-direction: column;
     align-items: baseline;
     justify-content: space-between;
     margin-bottom: 0.2rem;
     > h3 {
         margin-right: 1rem;
     }
     > wired-button {
        font-size: 0.7rem;
     }
`

const Downloads = styled.div`
    color: grey;
    text-align: left;
    margin-top: 0.5rem;
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
