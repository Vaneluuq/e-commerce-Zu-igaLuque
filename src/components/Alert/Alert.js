import React from 'react';

const Alert = ({ message }) => {
    return (
        <div
            style={{ height: "100vh" }}
            className='flex justify-center items-center text-2xl text-amber-600' >
            {message}
        </div>
    );
}

export default Alert;