import React, { useEffect, useState } from 'react'
import '../Style/AboutUs.css'
import naruto from '../assets/naruto.jpg'
import Snackbar from '../components/Snackbar'
import { Link } from 'react-router-dom';

function AboutUs() {
  const [currentDate, setCurrentDate] = useState('')
  const [showSnackbar, setShowSnackbar] = useState(false)

  useEffect(() => {
    const today = new Date()
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    setCurrentDate(today.toLocaleDateString('en-US', options))

    const timer = setTimeout(() => {
      setShowSnackbar(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleSnackbarClose = () => setShowSnackbar(false)

  return (
    <main className="main-content">
      <div className="container">
        <div className="aboutus-welcome-banner">
          <div className="aboutus-header">
            <span className="aboutus-date">{currentDate}</span>
            <button
              className="trigger-btn notification-button"
              onClick={() => setShowSnackbar(true)}
            >
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
          </div>
          <div className="aboutus-banner-content">
            <div className="aboutus-text-container">
              <h1>About Us</h1>
            </div>
          </div>
        </div>

        <div className="about">
          <div className="text-content">
            <section>
              <p>Welcome to Zenova, your trusted companion in preparing for the NSAT exam, mastering
                interviews, and making informed career decisions with expert guidance.</p>

              <p><span className="boltcreate">Built by two first-year students at Newton School of
                Technology (NST)</span>, Zenova was created to help students like you navigate
                the same challenges we faced. We provide the resources, practice Sets, and interview
                preparation Questions to help you ace NSAT and crack your interviews with
                confidence.
                In addition, our senior mentor sessions offer valuable insights, ensuring you make
                the right academic and career choices for a successful future.</p>
            </section>

            <section className="vision-section">
              <h2>Our Vision</h2>
              <p>At Zenova, our vision is simple—to help students succeed. We believe in structured
                learning, accessible guidance, and a supportive community where students can learn,
                practice, and receive mentorship. <br />
                We follow a philosophy: <br />
                <span className="boltcreate">
                  "We learn as we grow, and we guide as we go." <br /></span>
                Join us and take the next step toward your dream career! 🚀</p>
            </section>
          </div>
          <div className="image-container">
            <img src={naruto} alt="Naruto and Sasuke" />
          </div>
        </div>
        <div className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <h3 className="logo">ZENOVA</h3>
              <p>Founded and created with ❤️ | An A&O Nexus Initiative</p>
            </div>

            <div className="footer-right">
              <div className="footer-social">
                <a href="tel:+919588172862">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_578_748)">
                      <path
                        d="M6.26645 10.4364L6.00972 10.6932L6.17437 11.0168C7.66275 13.9418 10.0595 16.3276 12.982 17.825L13.3061 17.991L13.5636 17.7336L15.7636 15.5336C15.899 15.3981 16.099 15.3551 16.2678 15.413L16.2678 15.413L16.2732 15.4148C17.4436 15.8014 18.7066 16.01 20 16.01C20.2739 16.01 20.5 16.2361 20.5 16.51V20C20.5 20.2739 20.2739 20.5 20 20.5C10.8861 20.5 3.5 13.1139 3.5 4C3.5 3.72614 3.72614 3.5 4 3.5H7.5C7.77386 3.5 8 3.72614 8 4C8 5.30213 8.20815 6.55368 8.5939 7.7228C8.6492 7.90217 8.6082 8.09469 8.46645 8.23645L6.26645 10.4364Z"
                        fill="#F0F0F0" stroke="#F0F0F0" />
                    </g>
                    <defs>
                      <clipPath id="clip0_578_748">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                <a href="mailto:connect.zenova@gmail.com">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 6L12 13L2 6" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>

                <a href="https://wa.me/9588172862">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"
                      fill="#F0F0F0" />
                  </svg>
                </a>
              </div>
              <div className="footer-links">
                <a href="/legal?policy=privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                <a href="/legal?policy=terms" target="_blank" rel="noopener noreferrer">Terms & Services</a>
                <a href="/legal?policy=refund" target="_blank" rel="noopener noreferrer">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSnackbar && <Snackbar onClose={handleSnackbarClose} />}
    </main>
  )
}

export default AboutUs 