import React from 'react';
import '../Style/ComingSoon.css';

const ComingSoon = ({ textClassName = 'styled-text', children }) => {
    return (
        <main className="main-content">
            <div className="content">
                <div className="coming">
                    <h1>COMING SOON</h1>
                    <p className={textClassName}>
                        {children}
                    </p>
                </div>
                <div className="created">
                    <p>© Founded and Created with ❤️ by A&O Nexus.</p>
                </div>
            </div>
        </main>
    );
};

export default ComingSoon;
