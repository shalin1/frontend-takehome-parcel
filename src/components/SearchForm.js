import React, {useState} from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const SearchForm = ({loading,performSearch}) => {
    const [query,setQuery] = useState('')
    const isSubmitDisabled = loading || query.length===0

    return(
        <FormContainer>
            <form onSubmit={performSearch}>
                <SearchBox
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                    placeholder="Search Gems..."
                    type="search"
                    aria-label="Search"
                />
                <Submit
                    disabled={isSubmitDisabled}
                    type='submit'
                    value="🔍Search"
                />
            </form>
        </FormContainer>
    );
}

const FormContainer = styled.section`
    background-color: palegoldenrod;
    border-radius: 17px;
    padding: 20px;
    margin: 10px;
`

const SearchBox = styled.input`
  height: 2rem;
  font-size: 1.2rem;
  width: 100%;
`

const Submit = styled.input``

SearchForm.propTypes = {
    loading: PropTypes.bool,
    performSearch: PropTypes.func,
}
export default SearchForm;