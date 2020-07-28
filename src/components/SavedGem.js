import React from 'react';
import styled from "styled-components";
import { WiredCard } from "wired-card"

const SavedGem = ({gem,unSaveGem}) => {
    return (
        <SavedGemContainer>
            <GemInfo key={gem.sha}>
                <p>{gem.name}</p>
                <Version>{gem.version}</Version>
            </GemInfo>
            <DeleteButtonContainer>
                <DeleteButton onClick={()=>unSaveGem(gem)} alt={`unsave ${gem.name}`}>𝗫</DeleteButton>
            </DeleteButtonContainer>
        </SavedGemContainer>
    );
};

const SavedGemContainer = styled.div`
    width: 100%;
    padding: 0.5rem;
    display: flex;
`

const GemInfo=styled.div`
    width: 100%;
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0;
`

const Version = styled.p`
    color: grey;
    font-size: 0.8em;
`
const DeleteButtonContainer= styled.div`
    position: relative;
    margin-right: 0.5rem;
`

const DeleteButton= styled.button`
    border:none;
    background: transparent;
    color: grey;
    font-size: 1em;
    transition: 0.2s all ease-in-out;
    padding: 1rem 0.5rem 1rem 1rem;
    position: absolute;
    right:0;
    :hover{
        color: red;
        cursor: pointer;
        font-size: 1.3rem;
        text-shadow: 1px 0px 30px rgba(255, 121, 111, 1);
        }
`

export default SavedGem;