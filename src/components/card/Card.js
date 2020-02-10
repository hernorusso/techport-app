import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Card.scss';

const Card = ({
    title,
    description,
    lastUpdated,
    startDate,
    status,
    onButtonExpandClick,
    cardId,
    isExpanded
}) => {

    const onExpandClick = () => {
        onButtonExpandClick(cardId);
    };

    const cardClass = classNames('Card', {
        'Card--expanded': isExpanded
    });

    const cardDescriptionClass = classNames('Card__description', {
        'Card__description--expanded': isExpanded
    });

    return (
        <div className={cardClass}>
            <div className="Card__header">
                <div className="Card__header-top">
                    <h3>{title}</h3>
                    <div className="Card__header-right">
                        <div className="Card__status">
                            <p>{status}</p>
                        </div>
                    </div>
                </div>
                <div className="Card__meta-data">
                    <p>Start Date: {startDate}</p>
                    <p>Last Updated: {lastUpdated}</p>
                </div>
            </div>
            <div className="Card__content">
                <div className={cardDescriptionClass}>
                    <p>
                        {description}
                    </p>
                </div>
                <button
                    className="Card__button"
                    onClick={onExpandClick}
                >
                    <p>More Icon</p>
                    <p>More</p>
                </button>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    lastUpdated: PropTypes.string,
    startDate: PropTypes.string,
    status: PropTypes.string,
    onButtonClick: PropTypes.func,
    cardId: PropTypes.number,
    isExpanded: PropTypes.bool
};

export default Card;