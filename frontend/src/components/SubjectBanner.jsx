import React from 'react';
import '../Style/SubjectBanner.css';
import { Link } from 'react-router-dom';

const SubjectBanner = ({
    title,
    description,
    link,
    svgContent,
    bannerClass
}) => {
    return (
        <div className={`nsat-subject-banner ${bannerClass}`}>
            <div className="nsat-banner-content">
                <div className="nsat-text-container">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Link to={link}>
                        <button className="nsat-continue-button">Continue</button>
                    </Link>
                </div>
                <div className="nsat-avatar-container">
                    {svgContent}
                </div>
            </div>
        </div>
    );
};

export default SubjectBanner;