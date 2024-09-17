import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './Register.module.css'; // Ensure this file exists and is correctly imported
import video3 from '../../assets/RegisterBg.mp4'; // Ensure the path is correct
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
        navigate('/login');
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
            {/* Video Background */}
            <video autoPlay loop muted className={style.backgroundVideo}>
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={style.content}>
                {/* Language Selector */}
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
                        </p>
                    </form>
                ) : (
                    <Login t={t} toggleForm={toggleForm} />
                )}
            </div>
        </div>
    );
};

export default Signup;
