import React from 'react';
import QuizItem from '../components/QuizItem';
import '../Style/Mathematics.css';
import { englishData } from '../quizApp/data/Englishdata';
import { useNavigate } from 'react-router-dom';

const English = () => {
    const navigate = useNavigate();

    const getCurrentDate = () => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('en-US', options);
    };

    const currentDate = getCurrentDate();

    const handleQuizClick = (subject) => {
        const quizKey = subject.split('/')[1];

        if (englishData && englishData[quizKey] && englishData[quizKey].questions && englishData[quizKey].questions.length > 0) {
            navigate(`/quiz?subject=english&category=${quizKey}`);
        } else {
            navigate(`/quiz-error?subject=${quizKey}`);
        }
    };

    const dynamicEnglishQuizzes = Object.keys(englishData).map(key => ({
        title: englishData[key].name || key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        meta: `English • ${englishData[key].questions ? englishData[key].questions.length : '?'} Questions`,
        subject: `English/${key}`,
    }));

    const englishIconSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <g clip-path="url(#clip0_238_779)">
                <rect width="64" height="64" rx="20" fill="#FFC2CD" />
                <rect x="8" y="16" width="48" height="66" rx="8" fill="white" />
                <path
                    d="M19.3334 24L17 24C16.4478 24 16 24.4477 16 25L16 55C16 55.5523 16.4478 56 17 56L19.3334 56"
                    stroke="#FFC2CC" stroke-width="3" stroke-linecap="round" />
                <rect x="23" y="30.6667" width="6" height="6" rx="3" fill="#FFD6DD" />
                <rect x="23" y="42.6667" width="6" height="6" rx="3" fill="#FFD6DD" />
                <rect x="35" y="30.6667" width="6" height="6" rx="3" fill="#FFD6DD" />
                <rect x="35" y="42.6667" width="6" height="6" rx="3" fill="#FFD6DD" />
                <path
                    d="M44.6667 24L47 24C47.5523 24 48 24.4477 48 25L48 55C48 55.5523 47.5523 56 47 56L44.6667 56"
                    stroke="#FFC2CC" stroke-width="3" stroke-linecap="round" />
            </g>
            <defs>
                <clipPath id="clip0_238_779">
                    <rect width="64" height="64" rx="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );

    return (
        <main class="math-main-content">
            <div class="math-container">
                <div style={{ backgroundColor: 'rgb(238, 151, 188)' }} class="math-welcome-banner">
                    <div class="math-header">
                        <span class="math-date" id="currentDate">{currentDate}</span>
                        <button class="math-notification-button">
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

                        <div class="math-snackbar">
                            <div class="math-snackbar-content">
                                <div class="math-icon-wrapper">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="math-text-content">
                                    <h3>Discount on Your Exam Fees!!</h3>
                                    <p>Hey everyone! If you're planning to register for NSAT, I have a special referral
                                        link that gives you a
                                        discount on the exam fees!💰</p>
                                    <a
                                        href="https://www.newtonschool.co/newton-school-of-technology-nst/apply-referral/?utm_source=referral&utm_medium=MADARA&utm_campaign=btech-computer-science-portal-referral">
                                        <button class="math-register">Register Now</button>
                                    </a>
                                </div>
                                <button class="math-close-btn">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div class="math-banner-content">
                        <div class="math-text-container">
                            <h1>English</h1>
                            <p>
                                Improve Your Language Skills and Communication.
                            </p>
                        </div>
                        <div class="math-avatar-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="128" viewBox="0 0 150 128"
                                fill="none">
                                <path
                                    d="M0 5.5C0 2.46243 2.46243 0 5.5 0H104.215C107.253 0 109.715 2.46243 109.715 5.5V122.5C109.715 125.538 107.253 128 104.215 128H5.5C2.46243 128 0 125.538 0 122.5V5.5Z"
                                    fill="url(#paint0_linear_231_315)" />
                                <rect x="21.7888" y="19.2664" width="65.5645" height="9.24795" rx="4.62397"
                                    fill="white" />
                                <rect x="21.3335" y="42.6673" width="67.0482" height="9.14286" rx="4.57143"
                                    fill="white" />
                                <rect x="21.3335" y="67.0478" width="67.0482" height="9.14286" rx="4.57143"
                                    fill="white" />
                                <rect x="21.3335" y="91.4282" width="67.0482" height="9.14286" rx="4.57143"
                                    fill="white" />
                                <g filter="url(#filter0_bi_231_315)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M61.1084 97.0138C61.2678 97.1528 61.4939 97.26 61.6111 97.252C61.7283 97.2441 65.5805 96.0113 70.1717 94.5126C79.0945 91.5999 80.2996 91.0916 82.6528 89.2487C83.7856 88.3616 86.7341 85.2083 86.7135 84.9061C86.7062 84.7983 82.8588 81.3581 78.1638 77.2612L69.6274 69.8123L68.0855 71.6538C65.9129 74.2486 64.6741 76.5169 63.9826 79.1657C63.6888 80.2912 60.7805 96.1968 60.8044 96.5476C60.8123 96.665 60.9492 96.8747 61.1084 97.0138ZM81.6474 73.483L90.1726 80.9221L93.7899 76.7745L123.881 42.4805C123.881 42.4805 118.681 37.9386 115.311 35.0024C111.815 32.0327 106.735 27.4385 106.735 27.4385L76.6297 61.7299C74.6942 64.0069 73.1132 65.9091 73.1163 65.9569C73.1196 66.0047 76.9585 69.3915 81.6474 73.483ZM115.311 35.0024L123.881 42.4805L128.305 37.4141C130.738 34.6277 132.723 32.2695 132.717 32.1735C132.701 31.9464 115.894 17.2787 115.667 17.2941C115.497 17.3057 106.735 27.4385 106.735 27.4385C106.769 27.4684 110.527 30.9385 115.311 35.0024ZM127.703 20.8114L136.279 28.2901L139.216 24.8831C142.381 21.2111 143.017 20.2097 143.647 17.9054C143.99 16.6499 144.016 16.2556 143.882 14.3369C143.751 12.4598 143.658 12.0001 143.167 10.794C141.815 7.4785 139.005 5.04035 135.399 4.05437C134.147 3.71204 133.743 3.68488 131.83 3.81485C129.917 3.94483 129.521 4.02637 128.327 4.53487C126.124 5.47267 125.219 6.23442 122.052 9.81586C120.436 11.6435 119.117 13.1824 119.12 13.2358C119.124 13.2892 122.986 16.6982 127.703 20.8114Z"
                                        fill="#CF87B3" />
                                </g>
                                <defs>
                                    <filter id="filter0_bi_231_315" x="53.9667" y="-3.09454" width="96.828"
                                        height="107.184" filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.41873" />
                                        <feComposite in2="SourceAlpha" operator="in"
                                            result="effect1_backgroundBlur_231_315" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_231_315"
                                            result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="0.341873" dy="0.170937" />
                                        <feGaussianBlur stdDeviation="0.854683" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_231_315" />
                                    </filter>
                                    <linearGradient id="paint0_linear_231_315" x1="7.43833" y1="39.0508" x2="105.3"
                                        y2="31.0621" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#E34A8B" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="math-quiz-list">
                    {dynamicEnglishQuizzes.map((quiz, index) => (
                        <div
                            key={index}
                            className="math-quiz-item-wrapper"
                            onClick={() => handleQuizClick(quiz.subject)}
                        >
                            <QuizItem
                                key={index}
                                title={quiz.title}
                                meta={quiz.meta}
                                subject={quiz.subject}
                                iconSvg={englishIconSvg}
                                category={null}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default English;