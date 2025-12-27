import Slider from '../components/Slider';
import './Weapons.css';
const weapons = [
  {
    id: 1,
    name: "Бронебойный пистолет",
    type: "Пистолет",
    damage: "26",
    price: "1000 $GTA",
    description: "Самый скорострельный пистолет в игре.",
    image: "pistol.jpg"
  },
  {
    id: 2,
    name: "Шокер",
    type: "Пистолет",
    damage: "1",
    price: "100 $GTA",
    description: "Шокирует вас, когда вы на него смотрите.",
    image: "shocker.jpg"
  },
  {
    id: 3,
    name: "Штурмовой дробовик",
    type: "Дробовик",
    damage: "77",
    price: "1500 $GTA",
    description: "Лучшее оружие для перестрелки в узких коридорах.",
    image: "shotgun.jpg"
  },
  {
    id: 4,
    name: "Тяжёлый пулемёт",
    type: "Пулемёт",
    damage: "55",
    price: "3700 $GTA",
    description: "Подойдёт когда много врагов бегут толпой.",
    image: "heavymachinegun.jpg"
  },
  {
    id: 5,
    name: "Микро-ПП",
    type: "Пулемёт",
    damage: "21",
    price: "850 $GTA",
    description: "Вариант для водителя-стрелка.",
    image: "micropp.jpg"
  },
  {
    id: 6,
    name: "Автоматическая винтовка",
    type: "Штурмовая винтовка",
    damage: "32",
    price: "2100 $GTA",
    description: "Оружие для быстрой перестрелки.",
    image: "rifle.jpg"
  },
  {
    id: 7,
    name: "Тяжёлая снайперская винтовка",
    type: "Снайперская винтовка",
    damage: "98",
    price: "9500 $GTA",
    description: "Попал в яблочко с километра.",
    image: "sniper.jpg"
  },
  {
    id: 8,
    name: "Миниган",
    type: "Тяжёлое оружие",
    damage: "30",
    price: "15000 $GTA",
    description: "Для тех, кто любит крушить все направо и налево.",
    image: "minigun.jpg"
  },
  {
    id: 9,
    name: "РПГ",
    type: "Тяжёлое оружие",
    damage: "100",
    price: "6500 $GTA",
    description: "Для любителей взрывов.",
    image: "rpg.jpg"
  },
  {
    id: 10,
    name: "Граната",
    type: "Метательное оружие",
    damage: "95",
    price: "150 $GTA",
    description: "Можно кинуть врагу под ноги.",
    image: "grenade.jpg"
  }
];
const Weapons = () => {
  return (
    <section id="weapons" className="weapons">
      <div className="container">
        <h2 className="section-title">ОРУЖИЕ В GTA V</h2>
        <p className="section-subtitle">Одни из лучших оружий в своём классе</p>
        <Slider items={weapons} title="Коллекция оружия" category="weapons" />
      </div>
    </section>
  );
};
export default Weapons;