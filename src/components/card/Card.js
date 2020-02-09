import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, description, lastUpdated, startDate, status }) => {
    return (
        <div className="Card">
            <div className="Card__header">
                <div className="Card__header-left">
                    <h3>{title}</h3>
                    <p>Start Date: {startDate}</p>
                    <p>Last Updated: {lastUpdated}</p>
                </div>
                <div className="Card__header-right">
                    <div className="Card__status">
                        <p>{status}</p>
                    </div>
                </div>
            </div>
            <div className="Card__description">
                <p>
                    {description}
                </p>
            </div>
            <button className="Card__button">
                <p>More Icon</p>
                <p>More</p>
            </button>
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