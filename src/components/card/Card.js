import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, description, lastUpdated, startDate, status }) => {
    return (
        <div className="Card">
            <div className="Card__left-header">
                <div className="Card__title">{title}</div>
                <div className="Card__meta-data">
                    <div>Start Date: {startDate}</div>
                    <div>Last Updated: {lastUpdated}</div>
                </div>
            </div>
            <div className="Card__right-header">
                <div className="Card__status">{status}</div>
            </div>
            <div className="Card__description">
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    lastUpdated: PropTypes.string,
    startDate: PropTypes.string
};

export default Card;