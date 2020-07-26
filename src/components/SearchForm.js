import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { WiredInput } from "wired-input"
import { WiredButton } from "wired-button"

const SearchForm = ({loading,performSearch}) => {
    const [query,setQuery] = useState('')
    const isSubmitDisabled = loading || query.length===0
    const searchInput = useRef(null)
    useEffect(()=>{
        // current property is refered to input element
        searchInput.current.focus();
    },[])

    const handleChange = e => {
        setQuery(e.target.value)
    }
    const handleKeyPress = ({key, target:{value}}) => {
        if (key === 'Enter') { performSearch(value) }
        setQuery(value)
    }
    return(
        <FormContainer>
            <wired-input
                aria-label="Search"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Search Gems..."
                ref={searchInput}
                type="search"
                value={query}
            />
            <wired-button disabled={isSubmitDisabled} onClick={()=>performSearch(query)}>
                <span> 🔍 </span>
            </wired-button>
        </FormContainer>
    );
}

const FormContainer = styled.section`
    border-radius: 1rem;
    padding: 2rem;
    margin: 1rem;
    width: 90%;
    max-width: 760px;
    display: flex;
    align-items:center;
    justify-content:center;
    > wired-input {
        height: 2.2rem;    
        padding: 0.55rem 0 0 0.5rem;
        width: 80%;
    }
    > wired-button {
        font-size: 1.35rem;
        margin-left: 0.3rem;
        padding-top: 0.1rem;
    }
`

SearchForm.propTypes = {
    loading: PropTypes.bool,
    performSearch: PropTypes.func,
}
export default SearchForm;