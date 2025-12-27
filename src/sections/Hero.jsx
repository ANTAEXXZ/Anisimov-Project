import './Hero.css';
const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">ДОБРО ПОЖАЛОВАТЬ В МИР GTA V</h1>
          <p className="hero-subtitle">
            Фанатский сайт по популярной игре Grand Theft Auto V
          </p>
          <p className="hero-description">
            Исследуй с нами мир одного из самых популярных экшенов с открытым миром.
            Узнай интересную информацию о персонажах, транспорте, оружии и присоединяйся
            к нашему сообществу!
          </p>
          <div className="hero-buttons">
            <button className="hero-btn" onClick={() => scrollToSection('characters')}>
              Начать знакомство
            </button>
            <button className="hero-btn" onClick={() => scrollToSection('community')}>
              Присоединиться к сообществу
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;