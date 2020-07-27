import React from 'react';
import styled from "styled-components";
import { WiredCard } from "wired-card"

const SavedGem = ({gem,unSaveGem}) => {
    return (
        <SavedGemContainer>
            <GemInfo key={gem.sha}>
                <p>{gem.name}</p>
                <p>version {gem.version}</p>
            </GemInfo>
            <DeleteButtonContainer>
                <DeleteButton onClick={()=>unSaveGem(gem)}>𝗫</DeleteButton>
            </DeleteButtonContainer>
        </SavedGemContainer>
    );
};

const SavedGemContainer = styled.div`
    width: 100%;
    max-width: 30rem;
    padding: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    break-inside: avoid-column;
    page-break-inside: avoid;
`

const GemInfo=styled.div`
    width: 100%;
    font-size: 1.4em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const DeleteButtonContainer= styled.div`
    padding-left: 2rem;
    position: relative;
`
const DeleteButton= styled.button`
    margin-left: 1rem;
    width: 5rem;
    border:none;
    background: transparent;
    color: grey;
    font-size: 1em;
    transition: 0.2s all ease-in-out;
    position: absolute;
    top: 0;
    bottom: 0;
    left:0;
    :hover{
        color: red;
        cursor: pointer;
        font-size: 2rem;
        text-shadow: 1px 0px 30px rgba(255, 121, 111, 1);
        margin-right: 2rem;
        }
`

export default SavedGem;