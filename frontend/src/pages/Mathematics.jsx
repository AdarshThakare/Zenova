import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizItem from '../components/QuizItem';
import { mathData } from '../quizApp/data/Mathdata';
import '../Style/Mathematics.css';

const Mathematics = () => {
    const navigate = useNavigate();

    const getCurrentDate = () => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('en-US', options);
    };

    const currentDate = getCurrentDate();

    const mathIconSvg = (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_240_1778)">
                <rect width="64" height="64" rx="20" fill="#C4D0FB" />
                <rect x="8" y="16" width="48" height="66" rx="8" fill="white" />
                <g clip-path="url(#clip1_240_1778)">
                    <path
                        d="M34.3333 37.6667H35.4999C36.6666 37.6667 36.6666 38.8334 37.8519 41.7815C38.9999 44.6667 38.9999 45.8334 40.1666 45.8334H41.3333"
                        stroke="#6A5AE0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M33.1667 45.8334C34.9167 45.8334 36.6667 43.5 37.8334 41.75C39.0001 40 40.7501 37.6667 42.5001 37.6667"
                        stroke="#6A5AE0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M21.5 48.1667C21.5 49.9167 22.0833 50.5 23.8333 50.5C25.5833 50.5 26.1667 45.8333 27.3333 40C28.5 34.1667 29.0833 29.5 30.8333 29.5C32.5833 29.5 33.1667 30.0833 33.1667 31.8333"
                        stroke="#6A5AE0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23.8333 40H30.8333" stroke="#6A5AE0" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_240_1778">
                    <rect width="64" height="64" rx="20" fill="white" />
                </clipPath>
                <clipPath id="clip1_240_1778">
                    <rect width="28" height="28" fill="white" transform="translate(18 26)" />
                </clipPath>
            </defs>
        </svg>
    );

    const [activeCategory, setActiveCategory] = useState('');

    const handleTabClick = (category) => {
        setActiveCategory(category);
    };

    const handleQuizClick = (subject) => {
        const category = subject.split('/')[1];

        if (mathData && mathData[category] && mathData[category].questions && mathData[category].questions.length > 0) {
            navigate(`/quiz?subject=math&category=${category}`);
        } else {
            navigate(`/quiz-error?subject=${category}`);
        }
    };

    const dynamicMathQuizzes = Object.keys(mathData).map(key => ({
        title: mathData[key].name || key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        meta: `Math • ${mathData[key].questions ? mathData[key].questions.length : '?'} Questions`,
        subject: `math/${key}`,
        category: mathData[key].category || 'basic-math'
    }));

    const filteredQuizzes = activeCategory
        ? dynamicMathQuizzes.filter(quiz =>
            Array.isArray(quiz.category)
                ? quiz.category.includes(activeCategory)
                : quiz.category === activeCategory
        )
        : dynamicMathQuizzes;

    return (
        <main className="math-main-content">
            <div className="math-container">
                <div className="math-welcome-banner">
                    <div className="math-header">
                        <span className="math-date" id="currentDate">{currentDate}</span>
                        <button className="math-notification-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.25013 4.664C8.12013 3.367 9.62313 2 12.0001 2C14.3771 2 15.8801 3.367 16.7501 4.664C17.3248 5.53512 17.7427 6.49997 17.9851 7.515L19.5201 15.429C19.6043 15.8633 19.5914 16.3108 19.4824 16.7395C19.3734 17.1682 19.1709 17.5675 18.8894 17.9087C18.608 18.25 18.2546 18.5248 17.8545 18.7135C17.4544 18.9021 17.0175 19 16.5751 19H7.42513C6.98278 19 6.54591 18.9021 6.14581 18.7135C5.74571 18.5248 5.39228 18.25 5.11083 17.9087C4.82939 17.5675 4.6269 17.1682 4.51786 16.7395C4.40882 16.3108 4.39594 15.8633 4.48013 15.429L6.01513 7.515C6.25744 6.49962 6.6754 5.53543 7.25013 4.664Z"
                                    fill="#FFF7F7" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8.51416 20C8.76616 20.48 9.15216 20.983 9.73716 21.367C10.3472 21.767 11.1132 22 12.0472 22C12.9802 22 13.7472 21.767 14.3572 21.367C14.9422 20.983 15.3272 20.481 15.5802 20H8.51416Z"
                                    fill="#FFF7F7" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.2932 2.29303C17.1057 2.48056 17.0004 2.73487 17.0004 3.00003C17.0004 3.26519 17.1057 3.5195 17.2932 3.70703C18.1192 4.53303 18.5552 5.34303 19.0302 7.24303C19.0962 7.49863 19.2606 7.71778 19.4875 7.85268C19.7144 7.98757 19.9854 8.02728 20.2415 7.96313C20.4976 7.89898 20.7179 7.73618 20.8544 7.51024C20.9909 7.2843 21.0325 7.01355 20.9702 6.75703C20.4452 4.65703 19.8802 3.46703 18.7072 2.29303C18.5197 2.10556 18.2654 2.00024 18.0002 2.00024C17.7351 2.00024 17.4807 2.10556 17.2932 2.29303ZM6.70722 2.29303C6.89469 2.48056 7.00001 2.73487 7.00001 3.00003C7.00001 3.26519 6.89469 3.5195 6.70722 3.70703C5.88122 4.53303 5.44522 5.34303 4.97022 7.24303C4.90424 7.49863 4.73988 7.71778 4.51297 7.85268C4.28606 7.98757 4.01502 8.02728 3.75895 7.96313C3.50288 7.89898 3.28257 7.73618 3.14605 7.51024C3.00954 7.2843 2.9679 7.01355 3.03022 6.75703C3.55522 4.65703 4.12022 3.46703 5.29322 2.29303C5.48075 2.10556 5.73506 2.00024 6.00022 2.00024C6.26538 2.00024 6.51969 2.10556 6.70722 2.29303Z"
                                    fill="#FFF7F7" />
                                <circle cx="5" cy="14" r="4" fill="#FF0000" />
                            </svg>
                        </button>

                        <div className="math-snackbar">
                            <div className="math-snackbar-content">
                                <div className="math-icon-wrapper">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div className="math-text-content">
                                    <h3>Discount on Your Exam Fees!!</h3>
                                    <p>Hey everyone! If you're planning to register for NSAT, I have a special referral
                                        link that gives you a
                                        discount on the exam fees!💰</p>
                                    <a
                                        href="https://www.newtonschool.co/newton-school-of-technology-nst/apply-referral/?utm_source=referral&utm_medium=MADARA&utm_campaign=btech-computer-science-portal-referral">
                                        <button className="math-register">Register Now</button>
                                    </a>
                                </div>
                                <button className="math-close-btn">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="math-banner-content">
                        <div className="math-text-container">
                            <h1>Mathematics</h1>
                            <p>
                                Unlock the Magic of Numbers and Logic.
                            </p>
                        </div>
                        <div className="math-avatar-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="120" viewBox="0 0 121 120" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.359968 0.359968C0.161997 0.558169 0 0.847335 0 1.00292C0 1.1585 1.28338 6.36028 2.85179 12.5625C5.89995 24.6163 6.46362 26.2546 8.68782 29.53C9.75856 31.1067 13.6612 35.2865 14.0624 35.2865C14.2056 35.2865 19.0976 30.5107 24.9336 24.6738L34.7247 14.881C35.1748 14.4308 35.1672 13.6988 34.708 13.258L33.2493 11.8579C30.0151 8.75358 27.1285 6.91272 23.6899 5.7611C22.2289 5.27167 1.4692 0 1.00337 0C0.847564 0 0.558169 0.161997 0.359968 0.359968ZM29.6141 29.6169L19.8207 39.412C19.3769 39.8558 19.3771 40.5753 19.821 41.0189L24.1738 45.3686L66.7949 88.2156C66.7949 88.2156 73.2643 81.7514 77.4473 77.5614C81.686 73.2081 88.2138 66.9069 88.2138 66.9069L45.5975 24.0409C42.762 21.2785 40.39 19.0183 40.3265 19.0181C40.2631 19.0181 35.4423 23.7875 29.6141 29.6169ZM77.4473 77.5614L66.7949 88.2156L73.0933 94.5173C76.5573 97.9829 79.4957 100.819 79.6231 100.819C79.9247 100.819 100.819 79.9229 100.819 79.6213C100.819 79.3959 88.2138 66.9069 88.2138 66.9069C88.1713 66.9486 83.2477 71.6042 77.4473 77.5614ZM95.0894 95.2129L85.2433 105.067C84.798 105.513 84.8004 106.236 85.2486 106.679L88.6746 110.062C93.2433 114.575 94.5097 115.505 97.4985 116.545C99.127 117.111 99.6457 117.181 102.193 117.176C104.686 117.172 105.302 117.09 106.94 116.549C111.443 115.06 114.918 111.565 116.545 106.888C117.109 105.265 117.182 104.733 117.182 102.193C117.182 99.6535 117.109 99.1222 116.545 97.4985C115.503 94.5035 114.577 93.2389 110.129 88.7319C107.858 86.4318 105.943 84.5502 105.872 84.5502C105.801 84.5502 100.949 89.3485 95.0894 95.2129Z"
                                    fill="url(#paint0_linear_238_1373)" />
                                <g filter="url(#filter0_bi_238_1373)">
                                    <rect x="2.65625" y="94.3483" width="131.739" height="36.7542" rx="2.57575"
                                        transform="rotate(-45.739 2.65625 94.3483)" fill="#625CBC" />
                                </g>
                                <path
                                    d="M31.2011 94.8869C31.9929 94.0863 33.2838 94.0792 34.0844 94.871L44.0066 104.684L39.3005 109.443L29.3782 99.6294C28.5777 98.8376 28.5705 97.5467 29.3623 96.7461L31.2011 94.8869Z"
                                    fill="white" />
                                <path
                                    d="M41.1352 84.4786C41.927 83.678 43.2179 83.6709 44.0185 84.4627L53.9407 94.2759L49.2345 99.0343L39.3123 89.221C38.5117 88.4292 38.5046 87.1383 39.2964 86.3378L41.1352 84.4786Z"
                                    fill="white" />
                                <path
                                    d="M46.6044 69.6596C47.3962 68.859 48.6871 68.8519 49.4877 69.6437L63.8722 83.8703L59.1661 88.6287L44.7816 74.4021C43.981 73.6103 43.9739 72.3194 44.7657 71.5188L46.6044 69.6596Z"
                                    fill="white" />
                                <path
                                    d="M62.6093 62.7688C63.4011 61.9682 64.692 61.961 65.4926 62.7528L75.4148 72.5661L70.7087 77.3245L60.7865 67.5112C59.9859 66.7194 59.9787 65.4285 60.7705 64.6279L62.6093 62.7688Z"
                                    fill="white" />
                                <path
                                    d="M72.5434 52.3602C73.3352 51.5597 74.6261 51.5525 75.4267 52.3443L85.3489 62.1576L80.6428 66.916L70.7205 57.1027C69.9199 56.3109 69.9128 55.02 70.7046 54.2194L72.5434 52.3602Z"
                                    fill="white" />
                                <path
                                    d="M78.0126 37.5415C78.8044 36.7409 80.0953 36.7337 80.8959 37.5255L95.2804 51.7521L90.5743 56.5105L76.1898 42.2839C75.3892 41.4921 75.3821 40.2012 76.1739 39.4006L78.0126 37.5415Z"
                                    fill="white" />
                                <path
                                    d="M91.955 32.5556C92.7468 31.755 94.0377 31.7478 94.8383 32.5396L104.725 42.3178L100.019 47.0761L90.1322 37.298C89.3316 36.5062 89.3244 35.2153 90.1163 34.4147L91.955 32.5556Z"
                                    fill="white" />
                                <path
                                    d="M102.435 22.6889C103.227 21.8883 104.518 21.8811 105.318 22.6729L114.67 31.9217L109.964 36.68L100.612 27.4313C99.8115 26.6395 99.8044 25.3486 100.596 24.548L102.435 22.6889Z"
                                    fill="white" />
                                <defs>
                                    <filter id="filter0_bi_238_1373" x="-4.0539" y="-6.70924" width="131.687" height="133.419"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.88828" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_238_1373" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_238_1373" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha" />
                                        <feOffset dx="0.388828" dy="0.194414" />
                                        <feGaussianBlur stdDeviation="0.97207" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_238_1373" />
                                    </filter>
                                    <linearGradient id="paint0_linear_238_1373" x1="7.94451" y1="35.7488" x2="112.216" y2="25.8177"
                                        gradientUnits="userSpaceOnUse">
                                        <stop offset="1" stopColor="#444089" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="math-tabs">
                    <button
                        id="basic-tab"
                        className={`math-tab-button ${activeCategory === 'basic-math' ? 'active' : ''}`}
                        data-category="basic-math"
                        data-full="Basic Math"
                        data-short="Basic"
                        onClick={() => handleTabClick('basic-math')}>
                    </button>

                    <button
                        id="advanced-tab"
                        className={`math-tab-button ${activeCategory === 'advanced-math' ? 'active' : ''}`}
                        data-category="advanced-math"
                        data-full="Advanced Math"
                        data-short="Advance"
                        onClick={() => handleTabClick('advanced-math')}>
                    </button>

                    <button
                        id="interview-tab"
                        className={`math-tab-button ${activeCategory === 'interview' ? 'active' : ''}`}
                        data-category="interview"
                        data-full="Interview Qs"
                        data-short="Interview"
                        onClick={() => handleTabClick('interview')}>
                    </button>
                </div>

                <div className="math-quiz-list">
                    {filteredQuizzes.map((quiz, index) => (
                        <div
                            key={index}
                            className="math-quiz-item-wrapper"
                            onClick={() => handleQuizClick(quiz.subject)}
                        >
                            <QuizItem
                                title={quiz.title}
                                meta={quiz.meta}
                                subject={quiz.subject}
                                category={quiz.category}
                                iconSvg={mathIconSvg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Mathematics;