import React from 'react';
import styled from "styled-components";

const SavedGem = ({gem,unSaveGem}) => {
    return (
        <SavedGemContainer>
            <GemInfo key={gem.sha}>
                <p>{gem.name}</p>
                <p>version {gem.version}</p>
            </GemInfo>
            <DeleteButton onClick={()=>unSaveGem(gem)}>𝗫</DeleteButton>
        </SavedGemContainer>
    );
};

const SavedGemContainer = styled.div`
    width: 100%;
    max-width: 20rem;
    padding: 20px;
    display: flex;
    justify-content: space-between;
`

const GemInfo=styled.div`
    width: 100%;
    font-size: 1.4em;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
    }
    align-items: flex-start;
`

const DeleteButton= styled.button`
    margin-left: 1rem;
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
`

export default SavedGem;