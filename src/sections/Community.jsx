import React, { useState } from 'react';
import './Community.css';
const getInitialFormData = () => {
    const savedSelections = JSON.parse(localStorage.getItem('gtaSelections') || '{}');
    const savedUser = JSON.parse(localStorage.getItem('gtaCurrentUser') || '{}');
    return {
        nickname: savedUser.nickname || '',
        email: savedUser.email || '',
        password: '',
        favoriteCharacter: savedSelections.favoriteCharacter || '',
        favoriteVehicle: savedSelections.favoriteVehicle || '',
        favoriteWeapon: savedSelections.favoriteWeapon || '',
        newsletter: savedUser.newsletter !== false
    };
};
const Community = () => {
    const [form, setForm] = useState(getInitialFormData());
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const validateForm = () => {
        const newErrors = {};
        if (!form.nickname.trim()) newErrors.nickname = 'Введите никнейм';
        else if (form.nickname.length < 3) newErrors.nickname = 'Минимум 3 символа';
        if (!form.email.trim()) newErrors.email = 'Введите email';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Неверный формат email';
        if (!form.password) newErrors.password = 'Введите пароль';
        else if (form.password.length < 6) newErrors.password = 'Минимум 6 символов';
        if (!form.favoriteCharacter) newErrors.favoriteCharacter = 'Выберите персонажа';
        if (!form.favoriteVehicle) newErrors.favoriteVehicle = 'Выберите транспорт';
        if (!form.favoriteWeapon) newErrors.favoriteWeapon = 'Выберите оружие';
        return newErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        const users = JSON.parse(localStorage.getItem('gtaUsers') || '[]');
        const newUser = {
            ...form,
            id: Date.now(),
            date: new Date().toISOString(),
            password: '*'.repeat(form.password.length)
        };
        users.push(newUser);
        localStorage.setItem('gtaUsers', JSON.stringify(users));
        const currentUser = { ...form, password: '' };
        localStorage.setItem('gtaCurrentUser', JSON.stringify(currentUser));
        setSubmitted(true);
        setErrors({});
        setTimeout(() => {
            setForm(prev => ({
                ...getInitialFormData(),
                password: ''
            }));
            setSubmitted(false);
        }, 3000);
    };
    const characters = ["Майкл Де Санта", "Тревор Филипс", "Франклин Клинтон"];
    const vehicles = [
        "Obey Tailgater", "Canis Bodhi", "Bravado Buffalo S",
        "Bravado Bison", "Benefactor Dubsta", "Truffade Z-Type",
        "Übermacht Sentinel XS", "Karin Dilettante", "Vapid Dominator",
        "Bravado Banshee", "Pegassi Bati 801", "Pegassi Vacca"
    ];
    const weapons = [
        "Бронебойный пистолет", "Шокер", "Штурмовой дробовик",
        "Тяжёлый пулемёт", "Микро-ПП", "Автоматическая винтовка",
        "Тяжёлая снайперская винтовка", "Миниган", "РПГ", "Граната"
    ];
    return (
        <section id="community" className="community">
            <div className="container">
                <h2 className="section-title">СООБЩЕСТВО GTA V</h2>
                <p className="section-subtitle">Присоединяйся к фанатам Grand Theft Auto V</p>
                <div className="form-container">
                    {submitted ? (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h4>Успешная регистрация!</h4>
                            <p>Добро пожаловать в сообщество, {form.nickname}!</p>
                            <p>Ваши данные сохранены в localStorage.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="community-form">
                            <div className="form-group">
                                <label htmlFor="nickname">Никнейм в GTA *</label>
                                <input id="nickname" type="text" placeholder="Ваш игровой никнейм" value={form.nickname} onChange={(e) => setForm({ ...form, nickname: e.target.value })} className={errors.nickname ? 'error' : ''} />
                                {errors.nickname && <span className="error-message">{errors.nickname}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input id="email" type="email" placeholder="example@mail.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={errors.email ? 'error' : ''} />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Пароль *</label>
                                <input id="password" type="password" placeholder="Минимум 6 символов" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className={errors.password ? 'error' : ''} />
                                {errors.password && <span className="error-message">{errors.password}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="favoriteCharacter">Любимый персонаж *</label>
                                <select id="favoriteCharacter" value={form.favoriteCharacter} onChange={(e) => setForm({ ...form, favoriteCharacter: e.target.value })} className={errors.favoriteCharacter ? 'error' : ''} style={{ color: form.favoriteCharacter ? '#ffffff' : '#999999' }}>
                                    <option value="" style={{ color: '#999999' }}>Выберите персонажа</option>
                                    {characters.map(char => (
                                        <option key={char} value={char} style={{ color: '#ffffff' }}>{char}</option>
                                    ))}
                                </select>
                                {errors.favoriteCharacter && <span className="error-message">{errors.favoriteCharacter}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="favoriteVehicle">Любимый транспорт *</label>
                                <select id="favoriteVehicle" value={form.favoriteVehicle} onChange={(e) => setForm({ ...form, favoriteVehicle: e.target.value })} className={errors.favoriteVehicle ? 'error' : ''} style={{ color: form.favoriteVehicle ? '#ffffff' : '#999999' }}>
                                    <option value="" style={{ color: '#999999' }}>Выберите транспорт</option>
                                    {vehicles.map(vehicle => (
                                        <option key={vehicle} value={vehicle} style={{ color: '#ffffff' }}>{vehicle}</option>
                                    ))}
                                </select>
                                {errors.favoriteVehicle && <span className="error-message">{errors.favoriteVehicle}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="favoriteWeapon">Любимое оружие *</label>
                                <select id="favoriteWeapon" value={form.favoriteWeapon} onChange={(e) => setForm({ ...form, favoriteWeapon: e.target.value })} className={errors.favoriteWeapon ? 'error' : ''} style={{ color: form.favoriteWeapon ? '#ffffff' : '#999999' }}>
                                    <option value="" style={{ color: '#999999' }}>Выберите оружие</option>
                                    {weapons.map(weapon => (
                                        <option key={weapon} value={weapon} style={{ color: '#ffffff' }}>{weapon}</option>
                                    ))}
                                </select>
                                {errors.favoriteWeapon && <span className="error-message">{errors.favoriteWeapon}</span>}
                            </div>
                            <div className="form-group checkbox-group">
                                <label className="checkbox-label">
                                    <input type="checkbox" checked={form.newsletter} onChange={(e) => setForm({ ...form, newsletter: e.target.checked })} />
                                    <span>Получать новости о GTA V и обновлениях сайта</span>
                                </label>
                            </div>
                            <button type="submit" className="submit-btn">
                                Присоединиться к сообществу
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Community;