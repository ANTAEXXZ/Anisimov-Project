import './Characters.css';
const characters = [
  {
    id: 1,
    name: "Майкл Де Санта",
    age: 48,
    bio: "Бывший грабитель банков, живущий под прикрытием в роскошном особняке Вайнвуда. Страдает кризисом среднего возраста.",
    image: "michael.jpg",
    color: "#61B5CB",
  },
  {
    id: 2,
    name: "Тревор Филипс",
    age: 46,
    bio: "Бывший военный лётчик, непредсказуемый психопат. Управляет криминальной империей из трейлера в пустыне.",
    image: "trevor.jpg",
    color: "#F09E71",
  },
  {
    id: 3,
    name: "Франклин Клинтон",
    age: 25,
    bio: "Молодой уличный гангстер, который стремится к лучшей жизни. Работает только, когда заплатят.",
    image: "franklin.jpg",
    color: "#93B592",
  }
];
const Characters = () => {
  return (
    <section id="characters" className="characters">
      <div className="container">
        <h2 className="section-title">ПЕРСОНАЖИ GTA V</h2>
        <p className="section-subtitle">
          Три главных героя с уникальными историями и способностями
        </p>
        <div className="characters-grid">
          {characters.map(character => (
            <div key={character.id} className="character-card" style={{ borderColor: character.color }}>
              <div className="character-image-container">
                <div className="character-image-overlay" style={{ background: `linear-gradient(to bottom, transparent 60%, ${character.color}40 100%)` }} />
                <img src={`/images/characters/${character.image}`} alt={character.name} className="character-image"
                  onError={(e) => {
                    e.target.onerror = null;
                  }}
                />
              </div>
              <div className="character-info">
                <div className="character-header">
                  <h3 style={{ color: character.color }}>{character.name}</h3>
                  <span className="character-age">Возраст: {character.age}</span>
                </div>
                <p className="character-bio">{character.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Characters;