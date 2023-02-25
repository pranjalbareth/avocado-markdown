import React from 'react';
import './ToolTip.css';

const ToolTip = ({ text, children }) => {
    return (
        <div className="tooltip-container">
            <div className="tooltip">
                <span>{text}</span>
            </div>
            {children}
        </div>
    );
};

export default ToolTip;
