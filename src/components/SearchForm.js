import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { WiredInput } from "wired-input"
import { WiredButton } from "wired-button"

const SearchForm = ({loading,performSearch}) => {
    const [query,setQuery] = useState('')
    const searchInput = useRef(null)
    useEffect(()=>{
        // current property is refered to input element
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
                value={` ${query}`}
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
    border-radius: 1rem;
    margin: 1.5rem;
    width: 90%;
    max-width: 760px;
    display: flex;
    align-items:center;
    justify-content:center;
    wired-input { 
        font-family: 'Homemade Apple', Comic Sans MS, Helvetica, sans-serif;
        font-size: 1.45rem;
        height: 4rem;
        padding: 0.2rem 0 0 0.8rem;
        width: 80%;
        text-transform: lowercase;
        transition: all 2s;
    }
    wired-button {
        height: 4rem;
        font-size: 2rem;
        margin-left: 0.3rem;
        padding-top: 0.1rem;
        transition: all 2s;
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