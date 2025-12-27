import React, { useState } from 'react';
import './About.css';
const About = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        rating: '',
        category: 'general'
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const validateForm = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Введите ваше имя';
        else if (form.name.length < 2) newErrors.name = 'Минимум 2 символа';
        if (!form.email.trim()) newErrors.email = 'Введите email';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Неверный формат email';
        if (!form.rating) newErrors.rating = 'Поставьте оценку';
        return newErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        const feedbacks = JSON.parse(localStorage.getItem('gtaFeedbacks') || '[]');
        const newFeedback = {
            ...form,
            id: Date.now(),
            date: new Date().toISOString()
        };
        feedbacks.push(newFeedback);
        localStorage.setItem('gtaFeedbacks', JSON.stringify(feedbacks));
        setSubmitted(true);
        setErrors({});
        setTimeout(() => {
            setForm({
                name: '',
                email: '',
                message: '',
                rating: '',
                category: 'general'
            });
            setSubmitted(false);
        }, 3000);
    };
    const handleRatingClick = (rating) => {
        setForm({ ...form, rating: rating.toString() });
    };
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">О САЙТЕ</h2>
                <p className="section-subtitle">Оценка фан-сайта Grand Theft Auto V</p>
                <div className="about-content">
                    <div className="feedback-container">
                        <h3>Обратная связь</h3>
                        <p>Оставьте отзыв о сайте или предложите улучшения</p>
                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon">✓</div>
                                <h4>Спасибо за отзыв!</h4>
                                <p>Ваше сообщение сохранено в localStorage.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="feedback-form">
                                <div className="form-group">
                                    <label htmlFor="name">Ваше имя *</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Иван Иванов"
                                        value={form.name}
                                        onChange={(e) => setForm({...form, name: e.target.value})}
                                        className={errors.name ? 'error' : ''}
                                    />
                                    {errors.name && <span className="error-message">{errors.name}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="example@mail.com"
                                        value={form.email}
                                        onChange={(e) => setForm({...form, email: e.target.value})}
                                        className={errors.email ? 'error' : ''}
                                    />
                                    {errors.email && <span className="error-message">{errors.email}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="category">Тема сообщения</label>
                                    <select id="category" value={form.category} onChange={(e) => setForm({...form, category: e.target.value})}>
                                        <option value="general">Общий вопрос</option>
                                        <option value="bug">Сообщить об ошибке</option>
                                        <option value="suggestion">Предложение</option>
                                        <option value="content">Контент</option>
                                        <option value="other">Другое</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Оценка сайта *</label>
                                    <div className="rating-buttons">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <button key={star} type="button" className={`rating-btn ${form.rating === star.toString() ? 'active' : ''}`} onClick={() => handleRatingClick(star)}>
                                                {star} ★
                                            </button>
                                        ))}
                                    </div>
                                    {errors.rating && <span className="error-message">{errors.rating}</span>}
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="message">Сообщение</label>
                                    <textarea id="message"
                                        placeholder="Ваш отзыв или предложение... (необязательно)"
                                        value={form.message}
                                        onChange={(e) => setForm({...form, message: e.target.value})}
                                        className={errors.message ? 'error' : ''}
                                        rows="5"
                                    />
                                    {errors.message && <span className="error-message">{errors.message}</span>}
                                </div>
                                <button type="submit" className="submit-btn">
                                    Отправить отзыв
                                </button>
                            </form>
                        )}
                    </div>
                </div>
                <div className="copyright-text">
                    <p>
                        Этот сайт создан фанатами GTA V для фанатов. Здесь вы найдете информацию 
                        о персонажах, транспорте, оружии и многое другое.
                    </p>
                    <p className="copyright">
                        Все права принадлежат Rockstar Games.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;