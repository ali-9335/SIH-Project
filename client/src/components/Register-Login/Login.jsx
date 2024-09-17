import React from 'react';
import { useNavigate } from 'react-router-dom';
import video3 from '../../assets/RegisterBg.mp4';
import style from './Register.module.css';
import { Navigate } from 'react-router-dom';


const translations = {
    en: {
        login: 'Login',
        phone: 'Phone No',
        password: 'Password',
        submitLogin: 'Login',
        dontHaveAccount: "Don't have an account?",
        signUp: 'Sign Up'
    },
    hi: {
        login: 'लॉगिन करें',
        phone: 'फ़ोन नंबर',
        password: 'पासवर्ड',
        submitLogin: 'लॉगिन करें',
        dontHaveAccount: "क्या आपके पास कोई खाता नहीं है?",
        signUp: 'साइन अप करें'
    }
};

const Login = () => {
    const navigate = useNavigate();
    const language = 'en'; // Adjust as needed or use context for dynamic language
    const t = translations[language];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        alert('Login form submitted');
    };

    const handleSignUpRedirect = () => {
        navigate('/register');
    };

    const styles = {
        container: {
            width: '100vw',
            height: '100vh',
            position: 'relative',
            overflow: 'hidden'
        },
        backgroundVideo: {
            position: 'fixed',
            right: 0,
            bottom: 0,
            minWidth: '100%',
            minHeight: '100%',
            zIndex: -1,
            objectFit: 'cover'
        },
        formContainer: {
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '30px',
            borderRadius: '10px',
            margin: '20px auto',
            width: '450px',
            maxWidth: '90%',
            backdropFilter: 'blur(10px)',
            zIndex: 1,
            position: 'relative',
            textAlign: 'center'
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
        }
    };

    return (
        <div className={style.loginContainer}>
            <video autoPlay loop muted className={style.backgroundVideo}>
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <form className={style.formContainer} onSubmit={handleSubmit}>
                <h2>{t.login}</h2>

                <div className={style.inputField}>
                    <label htmlFor="phone-login">{t.phone}</label>
                    <input type="text" id="phone-login" placeholder={t.phone} required />
                </div>

                <div className={style.inputField}>
                    <label htmlFor="login-password">{t.password}</label>
                    <input type="password" id="login-password" placeholder={t.password} required />
                </div>

                <button type="submit" className={style.btn}>{t.submitLogin}</button>

                {/* Toggle to Sign Up */}
                <p className={style.toggleText}>
                    {t.dontHaveAccount}
                    <button type="button" className={style.toggleBtn} onClick={handleSignUpRedirect}>{t.signUp}</button>
        <div style={styles.container}>
            {/* Video Background */}
            <video autoPlay loop muted style={styles.backgroundVideo}>
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Form */}
            <form style={styles.formContainer} onSubmit={handleSubmit}>
                <h2 style={styles.h2}>{t.login}</h2>

                <div style={styles.inputField}>
                    <label htmlFor="phone-login" style={styles.inputLabel}>{t.phone}</label>
                    <input
                        type="text"
                        id="phone-login"
                        placeholder={t.phone}
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.inputField}>
                    <label htmlFor="login-password" style={styles.inputLabel}>{t.password}</label>
                    <input
                        type="password"
                        id="login-password"
                        placeholder={t.password}
                        required
                        style={styles.input}
                    />
                </div>

                <button
                    type="submit"
                    style={styles.btn}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.btnHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.btn.backgroundColor}
                >
                    {t.submitLogin}
                </button>

                <p style={styles.toggleText}>
                    {t.dontHaveAccount}
                    <button
                        type="button"
                        style={styles.toggleBtn}
                        onMouseOver={(e) => e.currentTarget.style.textDecoration = styles.toggleBtnHover.textDecoration}
                        onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                        onClick={handleSignUpRedirect}
                    >
                        {t.signUp}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Login;