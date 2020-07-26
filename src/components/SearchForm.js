import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const SearchForm = ({loading,performSearch}) => {
    const [query,setQuery] = useState('')
    const isSubmitDisabled = loading || query.length===0
    const searchInput = useRef(null)
    useEffect(()=>{
        // current property is refered to input element
        searchInput.current.focus();
    },[])
    
    return(
        <FormContainer>
            <form onSubmit={performSearch}>
                <SearchBox
                    aria-label="Search"
                    onChange={event => setQuery(event.target.value)}
                    placeholder="Search Gems..."
                    ref={searchInput}
                    type="search"
                    value={query}
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
    border-radius: 1rem;
    padding: 2rem;
    margin: 1rem;
`

const SearchBox = styled.input`
  height: 2rem;
  font-size: 1.2rem;
  width: 100%;
  margin-bottom: 1rem;
`

const Submit = styled.input``

SearchForm.propTypes = {
    loading: PropTypes.bool,
    performSearch: PropTypes.func,
}
export default SearchForm;