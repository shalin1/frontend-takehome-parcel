import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const SearchForm = ({handleSearchSubmit, setQuery, query}) => (
    <FormContainer>
        <form onSubmit={handleSearchSubmit}>
            <SearchBox
                value={query}
                onChange={e=>setQuery(e.target.value)}
                placeholder="Search Gems..."
                type="search"
                aria-label="Search"
            />
            <input type='submit' value="🔍Search"/>
        </form>
    </FormContainer>
);

const FormContainer = styled.section`
    background-color: #52ACFF;
    background-image: linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%);
    border-radius: 17px;
    padding: 20px;
`

const SearchBox = styled.input`
  height: 2rem;
  font-size: 1.2rem;
  width: 100%;
`

SearchForm.propTypes = {
    handleSearchSubmit: PropTypes.func,
    setQuery: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired
}
export default SearchForm;