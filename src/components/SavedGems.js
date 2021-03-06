import React from "react";
import styled from "styled-components";
import { WiredButton } from "wired-button";
import { WiredCard } from "wired-card";
import { WiredDivider } from "wired-divider";
import NullState from "./NullState.js";
import SavedGem from "./SavedGem";

const SavedGems = ({ gems, unSaveGem }) => {
  return (
    <SavedGemsContainer>
      <wired-card>
        <InnerContainer>
          <h3>Saved Gems</h3>
          <wired-divider style={{ width: "90%" }} />
          <OuterSavedGemContainer>
            {gems.length === 0 ? (
              <NullState>No gems saved yet!</NullState>
            ) : (
              <>
                {gems.map((gem) => (
                  <SavedGem key={gem.sha} gem={gem} unSaveGem={unSaveGem} />
                ))}
              </>
            )}
          </OuterSavedGemContainer>
        </InnerContainer>
      </wired-card>
    </SavedGemsContainer>
  );
};

const SavedGemsContainer = styled.section`
  text-align: center;
  width: 100%;
  min-width: 15rem;
  max-width: 18rem;
  margin: 1.5rem;
  @media (min-width: 1024px) {
    margin: 2rem;
  }
  > wired-card {
    width: 100%;
    padding: 0;
    text-align: left;
  }
`;
const InnerContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  > wired-divider {
    margin: 0.5rem 1rem;
  }
`;

const OuterSavedGemContainer = styled.section`
  width: 100%;
`;

export default SavedGems;
