import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { WiredDivider } from "wired-divider"
import { WiredCard } from "wired-card"

const SavedGems = ({gems}) => {
    return (
        <SavedGemsContainer>
            <wired-card>
                <h2>Saved Gems</h2>
                <wired-divider/>
                <ul>
                    {gems.length===0 ? <li>No gems saved yet!</li>:
                        <>
                            {gems.map(({name,sha,version})=>(
                                <li key={sha}>
                                    {name} version {version}
                                </li>)
                            )}
                        </>
                    }

                </ul>
            </wired-card>
        </SavedGemsContainer>
    );
};

const SavedGemsContainer = styled.section`
    text-align: center;
    width:100%;
    @media (min-width: 768px) {
        text-align: left;
        width:255px;
    }

    > wired-card {
        width: 10rem;
        padding: 1rem 2.8rem 1.5rem;
    }
`

SavedGems.propTypes = {

};

export default SavedGems;