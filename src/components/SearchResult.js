import React from "react";
import styled from "styled-components";
import { WiredButton } from "wired-button";

const SearchResult = ({ gem, toggleSave }) => {
  const { downloads, info, isSaved, name, version } = gem;

  const buttonText = isSaved ? (
    <span>🚫 UnSave Gem</span>
  ) : (
    <span>💾 Save Gem</span>
  );

  return (
    <GemContainer>
      <wired-card styl={{ width: "80vw" }}>
        <div>
          <Top>
            <Name>
              <h3 style={{ hyphenation: "auto", fontSize: "1.6rem" }}>
                {name}
              </h3>
              <br />
              <Version>{version}</Version>
            </Name>
            <wired-button
              onClick={() => toggleSave(gem)}
              style={{ whiteSpace: "nowrap" }}
            >
              {buttonText}
            </wired-button>
          </Top>
          <div style={{ width: "100%" }}>{info}</div>
        </div>
        <Downloads>
          <span>{downloads} downloads</span>
        </Downloads>
      </wired-card>
    </GemContainer>
  );
};

const GemContainer = styled.div`
    text-align: center;
    display:flex;
    flex-direction: column;
    > wired-card {
    @media (min-width:768px){
      margin: 1rem 2rem;
      padding: 1rem;
     > * {
    margin: 0.5rem;
    }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const Version = styled.span`
  color: grey;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.2rem;
  > h3 {
    margin-right: 1rem;
  }
  > wired-button {
    font-size: 0.7rem;
  }
`;

const Downloads = styled.div`
  color: grey;
  text-align: center;
  margin-top: 0.5rem;
`;

export default SearchResult;
