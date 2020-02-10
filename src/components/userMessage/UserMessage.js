import React from 'react';
import './UserMessage.css';

const UserMessage = ({message}) => {
    return (
        <div className="UserMessage">
            <p>{message}</p>
        </div>
    );
};

export default UserMessage;