import React from 'react';

interface ErrorProps {
    error: any
}

function Error({error}: ErrorProps) {
    return (
        <div>
            {error}
        </div>
    );
}

export default Error;