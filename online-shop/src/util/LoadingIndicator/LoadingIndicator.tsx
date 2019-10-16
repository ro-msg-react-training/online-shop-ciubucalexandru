import React from 'react';
import './LoadingIndicator.scss';

export const LoadingIndicator: React.FC = () => {
    return (
        <div className="progressBar">
            <progress className="progress is-medium is-primary" max="100">45%</progress>
        </div>
    );
}