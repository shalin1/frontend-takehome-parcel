import React from "react";
import styled from "styled-components";
import { WiredCard } from "wired-card";
import { WiredDivider } from "wired-divider";
import Loading from "./Loading";
import NullState from "./NullState.js";
import SearchResult from "./SearchResult";

const SearchResults = ({ foundGems, loading, savedGems, toggleSave }) => {
  const gems = foundGems.map((found) => {
    const isSaved = savedGems.some((saved) => saved.sha === found.sha);
    return { ...found, isSaved };
  });

  if (loading) return <Loading />;
  if (gems.legnth === 0)
    return (
      <NullState>
        '<h2>💣☹️ no gems found!</h2>️
      </NullState>
    );
  return (
    <SearchResultsContainer>
      <wired-card elevation={3}>
        <h2>Search Results</h2>
        <DividerContainer>
          <wired-divider />
        </DividerContainer>
        <>
          {gems.map((gem) => (
            <SearchResult key={gem.sha} gem={gem} toggleSave={toggleSave} />
          ))}
        </>
        )}
      </wired-card>
    </SearchResultsContainer>
  );
};

const SearchResultsContainer = styled.section`
  width: 100%;
`;

const DividerContainer = styled.div`
  width: 20rem;
  margin: auto;
  > wired-divider {
    margin: 0.5rem 1rem;
  }
  @media (min-width: 768px) {
    width: 20rem;
  }
`;

export default SearchResults;
