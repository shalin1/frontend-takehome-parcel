import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { WiredInput } from "wired-input"
import { WiredButton } from "wired-button"

const SearchForm = ({performSearch}) => {
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
                elevation={3}
                id="submit-button"
            >
                <span> 🔍 </span>
            </wired-button>
        </FormContainer>
    );
}

const FormContainer = styled.section`
    width: 100%;
    min-width: 15rem;
    max-width: 60rem;
    margin: 2rem auto;
    display: flex;
    > wired-input { 
        font-family: Comic Sans MS, Helvetica, sans-serif;
        font-size: 1.8rem;
        height: 4rem;
        padding: 0.6rem 1rem 0;
        text-transform: lowercase;
        width:100%;
    }
    > wired-button {
        height: 4rem;
        font-size: 2.07rem;
        margin: 0.16rem 0 0 -0.2rem;
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