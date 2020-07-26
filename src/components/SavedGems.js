import React from 'react';
import PropTypes from 'prop-types';

const SavedGems = ({gems}) => {
    return (
        <div>
            <h2>Saved Gems</h2>
            {gems.map(gem=><p key={gem.sha}>{gem.name}</p>)}
        </div>
    );
};

// SavedGems.propTypes = {
//     gems: PropTypes.arrayOf(
//         PropTypes.shape({
//
//         })
//     )
// };

export default SavedGems;