import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({onChange,value}) => (
    <div role="search" key="container">
        <label htmlFor="search-input">Search</label>
        <input
            value={value}
            onChange={e=>onChange(e.target.value)}
            placeholder="Search Gems..."
            type="search"
            id="search-input"
            name="search-input"
        />
    </div>
)

SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default SearchInput