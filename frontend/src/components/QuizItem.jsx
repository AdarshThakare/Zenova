import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

const QuizItem = ({ title, meta, subject, category, iconSvg }) => {
    return (
        <div className="math-quiz-item" data-category={category}>
            <div className="math-quiz-content">
                <div className="math-quiz-icon">
                    {iconSvg}
                </div>
                <div className="math-quiz-info">
                    <h3 className="math-quiz-title">{title}</h3>
                    <p className="math-quiz-meta">{meta}</p>
                </div>
            </div>
            <MdKeyboardArrowRight className="math-quiz-arrow" />
        </div>
    );
};

export default QuizItem;