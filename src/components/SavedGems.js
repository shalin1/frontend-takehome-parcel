import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { WiredButton } from "wired-button"
import { WiredCard } from "wired-card"
import { WiredDivider } from "wired-divider"

const SavedGems = ({gems,unSaveGem}) => {
    return (
        <SavedGemsContainer>
            <wired-card>
                <h3>Saved Gems</h3>
                <ul>
                    {gems.length===0 ? <li>No gems saved yet!</li>:
                        <Columns>
                            {gems.map((gem)=>(
                                <SavedGem key={gem.sha}>
                                    <p>{gem.name} version {gem.version}</p>
                                    <button onClick={()=>unSaveGem(gem)}>
                                        𝗫
                                    </button>
                                </SavedGem>)
                            )}
                        </Columns>
                    }

                </ul>
            </wired-card>
        </SavedGemsContainer>
    );
};

const Columns = styled.div`
padding: 2rem;
  @media (min-width: 768px) {
     column-count: 3;
  })
`

const SavedGemsContainer = styled.section`
    flex-grow: 1;
    text-align: center;
    margin-bottom: 2rem;
    width: 100%;
    > wired-card {
        width: 100%;
        padding: 1rem 0rem 1.5rem;
    }
`

const SavedGem=styled.div`
    font-size: 1.4em;
    display: flex;
    width: 80%;
        justify-content: space-between;
    @media (min-width: 768px) {
    }
    align-items: flex-start;
    > button {
        border:none;
        background: transparent;
        color: grey;
        font-size: 0.75em;
         :hover{
            color: red;
            cursor: pointer;
            text-shadow: 1px 0px 30px rgba(255, 121, 111, 1);
            transition: all 0.5s;
        }
    }
`

SavedGems.propTypes = {

};

export default SavedGems;