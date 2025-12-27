import './Header.css';
const Header = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className='header-box-style'>
      <h1 className='header-text'>
        GTA V FAN
      </h1>
      <nav>
        <button onClick={() => scrollTo('characters')} className='navigation-button'>
          Персонажи
        </button>
        <button onClick={() => scrollTo('vehicles')} className='navigation-button'>
          Транспорт
        </button>
        <button onClick={() => scrollTo('weapons')} className='navigation-button'>
          Оружие
        </button>
        <button onClick={() => scrollTo('gallery')} className='navigation-button'>
          Галерея скриншотов
        </button>
        <button onClick={() => scrollTo('about')} className='navigation-button'>
          О сайте
        </button>
        <button onClick={() => scrollTo('community')} className='navigation-join-button'>
          Присоединиться
        </button>
      </nav>
    </header>
  );
};
export default Header;