import React from 'react';

const ErrorMessage = ({message}) => {
    return (
        <p style={{color:'red', padding: '10px 0px'}}>{message}</p>
    );
};

export default ErrorMessage;