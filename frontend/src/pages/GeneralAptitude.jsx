import React from 'react';
import QuizItem from '../components/QuizItem';
import '../Style/Mathematics.css';
import { gaData } from '../quizApp/data/GAdata';
import { useNavigate } from 'react-router-dom';

const GeneralAptitude = () => {
    const navigate = useNavigate();

    const getCurrentDate = () => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('en-US', options);
    };

    const currentDate = getCurrentDate();

    const handleQuizClick = (subject) => {
        const quizKey = subject.split('/')[1];

        console.log('Attempting to navigate with subject:', subject);
        console.log('Extracted quizKey:', quizKey);

        if (gaData && gaData[quizKey] && gaData[quizKey].questions && gaData[quizKey].questions.length > 0) {
            navigate(`/quiz?subject=ga&category=${quizKey}`);
            console.log('Navigation successful for quizKey:', quizKey);
        } else {
            navigate(`/quiz-error?subject=${quizKey}`);
            console.log('Navigation to error page for quizKey:', quizKey, '- Quiz data not found or empty');
        }
    };

    const dynamicGAQuizzes = Object.keys(gaData).map(key => ({
        title: gaData[key].name || key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        meta: `General Aptitude • ${gaData[key].questions ? gaData[key].questions.length : '?'} Questions`,
        subject: `GA/${key}`,
    }));

    const displayedQuizzes = dynamicGAQuizzes;

    const gaIconSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"
            fill="none">
            <g clip-path="url(#clip0_240_1853)">
                <rect width="64" height="64" rx="20" fill="#C4D0FB" />
                <path
                    d="M16 24C16 19.5817 19.5817 16 24 16H70V74C70 78.4183 66.4183 82 62 82H24C19.5817 82 16 78.4183 16 74V24Z"
                    fill="white" />
                <rect x="25" y="40" width="6" height="32" rx="3" fill="#6A5AE0" />
                <rect x="37" y="36" width="6" height="47" rx="3" fill="#C4D0FB" />
                <rect x="49" y="32" width="6" height="41" rx="3" fill="#6A5AE0" />
            </g>
            <defs>
                <clipPath id="clip0_240_1853">
                    <rect width="64" height="64" rx="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );

    return (
        <main class="math-main-content">
            <div class="math-container">
                <div style={{ backgroundColor: '#466CFF' }} class="math-welcome-banner">
                    <div class="math-header">
                        <span class="math-date" id="currentDate">{currentDate}</span>
                        <button class="math-notification-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
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
                            <h1>General Aptitude</h1>
                            <p>
                                Boost Your Problem-Solving Skills.
                            </p>
                        </div>
                        <div class="math-avatar-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="121" viewBox="0 0 150 121"
                                fill="none">
                                <rect width="128.584" height="99.6102" rx="5.96128" fill="#6B89FF" />
                                <path
                                    d="M59.0792 37.7832C59.0792 34.3484 56.9482 34.3484 52.9369 34.3484L38.4958 34.3484L16.8344 34.3484C15.2298 34.3484 13.901 36.0658 13.901 37.7832C13.901 39.5006 15.2299 41.218 16.8345 41.218C18.6366 41.218 18.6342 41.218 20.0436 41.218L28.8686 41.218L38.4958 41.218C40.1004 41.218 39.2982 41.218 40.9027 41.218L55.3436 41.2181C56.9483 41.2181 59.0792 41.2181 59.0792 37.7832Z"
                                    fill="white" />
                                <path
                                    d="M76.4553 54.9573C76.4553 51.5225 74.3243 51.5225 70.3129 51.5225L55.8719 51.5225L34.2104 51.5225C32.6059 51.5225 31.2771 53.2399 31.2771 54.9573C31.2771 56.6747 32.606 58.3921 34.2106 58.3921C36.0126 58.3921 36.0103 58.3921 37.4197 58.3921L46.2447 58.3921L55.8719 58.3921C57.4765 58.3921 56.6742 58.3921 58.2788 58.3921L72.7197 58.3922C74.3244 58.3922 76.4553 58.3922 76.4553 54.9573Z"
                                    fill="white" />
                                <ellipse cx="13.9011" cy="13.7393" rx="3.47525" ry="3.43484" fill="white" />
                                <ellipse cx="24.3267" cy="13.7393" rx="3.47525" ry="3.43484" fill="white" />
                                <ellipse cx="34.7526" cy="13.7393" rx="3.47525" ry="3.43484" fill="white" />
                                <rect width="76.4452" height="21.0555" rx="10.5278"
                                    transform="matrix(0.778455 0.6277 -0.636578 0.771212 89.9528 56.777)"
                                    fill="#3147A8" />
                                <g filter="url(#filter0_bi_240_1739)">
                                    <path
                                        d="M87.0225 96.4546C104.374 96.4546 118.441 82.5516 118.441 65.4014C118.441 48.2512 104.374 34.3483 87.0225 34.3483C69.6705 34.3483 55.604 48.2512 55.604 65.4014C55.604 82.5516 69.6705 96.4546 87.0225 96.4546Z"
                                        fill="#BCE4F1" fill-opacity="0.5" />
                                </g>
                                <defs>
                                    <filter id="filter0_bi_240_1739" x="51.6119" y="30.3561" width="70.8213"
                                        height="70.0906" filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.99607" />
                                        <feComposite in2="SourceAlpha" operator="in"
                                            result="effect1_backgroundBlur_240_1739" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_240_1739"
                                            result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="0.199607" dy="0.0998036" />
                                        <feGaussianBlur stdDeviation="0.499018" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_240_1739" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="math-quiz-list">
                    {displayedQuizzes.map((quiz, index) => {
                        return (
                            <div
                                key={index}
                                className="math-quiz-item-wrapper"
                                onClick={() => handleQuizClick(quiz.subject)}
                            >
                                <QuizItem
                                    title={quiz.title}
                                    meta={quiz.meta}
                                    subject={quiz.subject}
                                    iconSvg={gaIconSvg}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default GeneralAptitude;