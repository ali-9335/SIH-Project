import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Register.module.css';
import axios from 'axios';
import video3 from '../../assets/RegisterBg.mp4';
import Login from './Login';

const translations = {
    en: {
        signUp: 'Sign Up',
        login: 'Login',
        name: 'Name',
        phone: 'Phone No',
        password: 'Password',
        state: 'State',
        district: 'District',
        village: 'Village',
        alreadyHaveAccount: "Already have an account?",
        dontHaveAccount: "Don't have an account?",
        submitSignUp: 'Sign Up',
        submitLogin: 'Login'
    },
    hi: {
        signUp: 'साइन अप करें',
        login: 'लॉगिन करें',
        name: 'नाम',
        phone: 'फ़ोन नंबर',
        password: 'पासवर्ड',
        state: 'राज्य',
        district: 'जिला',
        village: 'गांव',
        alreadyHaveAccount: "क्या आपके पास पहले से एक खाता है?",
        dontHaveAccount: "क्या आपके पास कोई खाता नहीं है?",
        submitSignUp: 'साइन अप करें',
        submitLogin: 'लॉगिन करें'
    }
};

const Signup = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(true);
    const [language, setLanguage] = useState('en');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        password: '',
        state: '',
        district: '',
        village: ''
    });

    const redirectToLogin = () => {
        window.location.href = '/login';
    };

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = isSignUp ? '/register' : '/login';
            await axios.post(endpoint, formData);
            alert('Request successful');
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };

    const t = translations[language];

    return (
        <div className={style.signup}>
            <video
                autoPlay
                loop
                muted
                className={style.backgroundVideo}
            >

    // Inline CSS styles
    const styles = {
        backgroundVideo: {
            position: 'fixed',
            right: 0,
            bottom: 0,
            minWidth: '100%',
            minHeight: '100%',
            zIndex: -1,
            objectFit: 'cover'
        },
        content: {
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            color: 'white',
            overflow: 'hidden'
        },
        formContainer: {
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '30px',
            borderRadius: '10px',
            margin: '20px auto',
            width: '450px',
            maxWidth: '90%',
            backdropFilter: 'blur(10px)'
        },
        formContainerP: {
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '30px',
            borderRadius: '10px',
            margin: '20px auto',
            width: '450px',
            maxWidth: '90%',
            backdropFilter: 'blur(10px)',
            marginTop: '10%'
        },
        h2: {
            marginBottom: '20px',
            fontSize: '24px'
        },
        inputField: {
            marginBottom: '20px'
        },
        inputLabel: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold'
        },
        input: {
            width: '100%',
            padding: '12px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px'
        },
        btn: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '18px',
            cursor: 'pointer',
            marginTop: '10px'
        },
        btnHover: {
            backgroundColor: '#2980b9'
        },
        toggleText: {
            marginTop: '10px',
            fontSize: '14px'
        },
        toggleBtn: {
            background: 'none',
            border: 'none',
            color: '#3498db',
            fontSize: '14px',
            cursor: 'pointer',
            marginLeft: '5px'
        },
        toggleBtnHover: {
            textDecoration: 'underline'
        },
        languageSelector: {
            position: 'absolute',
            top: '20px',
            right: '20px',
            display: 'flex',
            gap: '10px'
        },
        languageButton: {
            background: 'rgba(255, 255, 255, 0.5)',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            fontSize: '14px',
            cursor: 'pointer'
        },
        languageButtonHover: {
            background: 'rgba(255, 255, 255, 0.7)'
        }
    };

    return (
        <div className="signup">
            {/* Video Background */}
            <video autoPlay loop muted style={styles.backgroundVideo}>

                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            <div className={style.content}>
                <div className={style.sign}>
                    <div className={style.languageSelector}>
                        <button onClick={() => changeLanguage('en')}>English</button>
                        <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
                    </div>

                    {isSignUp ? (
                        <form className={style.formContainer} onSubmit={handleSubmit}>
                            <h2>{t.signUp}</h2>
                            <div className={style.inputField}>
                                <label htmlFor="name">{t.name}</label>
                                <input type="text" id="name" placeholder={t.name} onChange={handleChange} required />
                            </div>

                            <div className={style.inputField}>
                                <label htmlFor="phone">{t.phone}</label>
                                <input type="text" id="phone" placeholder={t.phone} onChange={handleChange} required />
                            </div>

                            <div className={style.inputField}>
                                <label htmlFor="password">{t.password}</label>
                                <input type="password" id="password" placeholder={t.password} onChange={handleChange} required />
                            </div>

                            <div className={style.inputField}>
                                <label htmlFor="state">{t.state}</label>
                                <input type="text" id="state" placeholder={t.state} onChange={handleChange} required />
                            </div>

                            <div className={style.inputField}>
                                <label htmlFor="district">{t.district}</label>
                                <input type="text" id="district" placeholder={t.district} onChange={handleChange} required />
                            </div>

                            <button type="submit" className={style.btn}>{t.submitSignUp}</button>

                            <p className={style.toggleText}>
                                {t.alreadyHaveAccount}
                                <button type="button" className={style.toggleBtn} onClick={redirectToLogin}>{t.login}</button>

            {/* Overlay Content */}
            <div className="content" style={styles.content}>
                <div className="sign">
                    {/* Language Selector */}
                    <div className="language-selector" style={styles.languageSelector}>
                        <button
                            style={styles.languageButton}
                            onClick={() => changeLanguage('en')}
                        >
                            English
                        </button>
                        <button
                            style={styles.languageButton}
                            onClick={() => changeLanguage('hi')}
                        >
                            हिन्दी
                        </button>
                    </div>

                    {isSignUp ? (
                        // Sign Up Form
                        <form className="form-container" style={styles.formContainer} onSubmit={handleSubmit}>
                            <h2 style={styles.h2}>{t.signUp}</h2>
                            <div className="input-field" style={styles.inputField}>
                                <label htmlFor="name" style={styles.inputLabel}>{t.name}</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder={t.name}
                                    onChange={handleChange}
                                    required
                                    style={styles.input}
                                />
                            </div>

                            <div className="input-field" style={styles.inputField}>
                                <label htmlFor="phone" style={styles.inputLabel}>{t.phone}</label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder={t.phone}
                                    onChange={handleChange}
                                    required
                                    style={styles.input}
                                />
                            </div>

                            <div className="input-field" style={styles.inputField}>
                                <label htmlFor="password" style={styles.inputLabel}>{t.password}</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder={t.password}
                                    onChange={handleChange}
                                    required
                                    style={styles.input}
                                />
                            </div>

                            <div className="input-field" style={styles.inputField}>
                                <label htmlFor="state" style={styles.inputLabel}>{t.state}</label>
                                <input
                                    type="text"
                                    id="state"
                                    placeholder={t.state}
                                    onChange={handleChange}
                                    required
                                    style={styles.input}
                                />
                            </div>

                            <div className="input-field" style={styles.inputField}>
                                <label htmlFor="district" style={styles.inputLabel}>{t.district}</label>
                                <input
                                    type="text"
                                    id="district"
                                    placeholder={t.district}
                                    onChange={handleChange}
                                    required
                                    style={styles.input}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn"
                                style={styles.btn}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.btnHover.backgroundColor}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.btn.backgroundColor}
                            >
                                {t.submitSignUp}
                            </button>

                            {/* Toggle to Login */}
                            <p className="toggle-text" style={styles.toggleText}>
                                {t.alreadyHaveAccount}
                                <button
                                    type="button"
                                    className="toggle-btn"
                                    style={styles.toggleBtn}
                                    onMouseOver={(e) => e.currentTarget.style.textDecoration = styles.toggleBtnHover.textDecoration}
                                    onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                                    onClick={redirectToLogin}
                                >
                                    {t.login}
                                </button>

                            </p>
                        </form>
                    ) : (
                        <Login t={t} toggleForm={toggleForm} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Signup;