import React from 'react';

export const Text = ({size,colour,children}) => {
    const ng = 234;

    return (
        <div>
            <p style={{ fontSize: size, color: colour }}>{children}</p>
        </div>
    );
}


