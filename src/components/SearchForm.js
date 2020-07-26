import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { WiredInput } from "wired-input"
import { WiredButton } from "wired-button"

const SearchForm = ({loading,performSearch}) => {
    const [query,setQuery] = useState('')
    const searchInput = useRef(null)
    useEffect(()=>{
        searchInput.current.focus();
    },[])

    const handleChange = e => {
        setQuery(e.target.value)
        if (e.key === 'Enter') {handleSubmit(e)}
    }

    const handleSubmit = e => {
        e.preventDefault()
        performSearch(query)
    }

    return(
        <FormContainer >
            <wired-input
                aria-label="Search"
                onKeyUp={handleChange}
                placeholder="Search Gems..."
                ref={searchInput}
                name="Search Input"
                type="text"
                value={query}
            />
            <wired-button
                onClick={handleSubmit}
                elevation={4}
                id="submit-button"
            >
                <span> 🔍 </span>
            </wired-button>
        </FormContainer>
    );
}

const FormContainer = styled.section`
    width: 100%;
    margin: 5.5rem auto;
    display: flex;
    max-width: 800px;
    > wired-input { 
        font-family: Comic Sans MS, Helvetica, sans-serif;
        font-size: 1.45rem;
        height: 4rem;
        width:100%;
        text-transform: lowercase;
    }
    > wired-button {
        height: 4.4rem;
        font-size: 2.15rem;
        margin-left: 0.3rem;
        :hover {
            background-color: lightcoral;
            border-radius: 0.4rem;
        }
    }
`

SearchForm.propTypes = {
    loading: PropTypes.bool,
    performSearch: PropTypes.func,
}
export default SearchForm;