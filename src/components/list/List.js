import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

const List = ({children, title}) => {
    return (
        <div className="List">
            <h2>{title}</h2>
            <ul>{children}</ul>
        </div>
    );
};

List.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default List;