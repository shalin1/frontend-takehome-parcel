import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { WiredButton } from "wired-button"
import { WiredCard } from "wired-card"
import { WiredDivider } from "wired-divider"
import SavedGem from './SavedGem'

const SavedGems = ({gems,unSaveGem}) => {
    return (
        <SavedGemsContainer>
            <wired-card>
                <InnerContainer>
                    <h3>Saved Gems</h3>
                    <br/>
                    {gems.length===0
                        ? <p>No gems saved yet!</p>
                        : <>
                            {gems.map((gem) => (
                                <SavedGem
                                    key={gem.sha}
                                    gem={gem}
                                    unSaveGem={unSaveGem}/>)
                            )}
                        </>
                    }
                </InnerContainer>
            </wired-card>
        </SavedGemsContainer>
    );
};

const SavedGemsContainer = styled.section`
    flex-grow: 1;
    text-align: center;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 20rem;
    > wired-card {
        width: 100%;
        text-align: left;
    }
`
const InnerContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

SavedGems.propTypes = {

};

export default SavedGems;