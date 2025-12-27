import Slider from '../components/Slider';
import './Vehicles.css';
const vehicles = [
  {
    id: 1,
    name: "Obey Tailgater",
    type: "Седан",
    speed: "169 км/ч",
    price: "55000 $GTA",
    description: "Любимая машина Майкла.",
    image: "tailgater.jpg"
  },
  {
    id: 2,
    name: "Canis Bodhi",
    type: "Вездеход",
    speed: "160 км/ч",
    price: "25000 $GTA",
    description: "Любимая машина Тревора.",
    image: "bodhi.jpg"
  },
  {
    id: 3,
    name: "Bravado Buffalo S",
    type: "Спорткар",
    speed: "182 км/ч",
    price: "95000 $GTA",
    description: "Любимая машина Франклина.",
    image: "buffalo.jpg"
  },
  {
    id: 4,
    name: "Bravado Bison",
    type: "Фургон",
    speed: "160 км/ч",
    price: "30000 $GTA",
    description: "Брутальный пикап.",
    image: "bison.jpg"
  },
  {
    id: 5,
    name: "Benefactor Dubsta",
    type: "Внедорожник",
    speed: "164 км/ч",
    price: "70000 $GTA",
    description: "Тот самый GTAшный гелик.",
    image: "dubsta.jpg"
  },
  {
    id: 6,
    name: "Truffade Z-Type",
    type: "Спортивная классика",
    speed: "204 км/ч",
    price: "10000000 $GTA",
    description: "Быстрая и элегантная классика.",
    image: "ztype.jpg"
  },
  {
    id: 7,
    name: "Übermacht Sentinel XS",
    type: "Купе",
    speed: "187 км/ч",
    price: "60000 $GTA",
    description: "Стильная копия BMW.",
    image: "sentinel.jpg"
  },
  {
    id: 8,
    name: "Karin Dilettante",
    type: "Компакт",
    speed: "142 км/ч",
    price: "25000 $GTA",
    description: "Гибридный автомобиль для повседневной езды.",
    image: "dilettante.jpg"
  },
  {
    id: 9,
    name: "Vapid Dominator",
    type: "Маслкар",
    speed: "194 км/ч",
    price: "35000 $GTA",
    description: "Мощный и резвый маслкар.",
    image: "dominator.jpg"
  },
  {
    id: 10,
    name: "Bravado Banshee",
    type: "Спорткар",
    speed: "191 км/ч",
    price: "105000 $GTA",
    description: "Один из самых популярных автомобилей в игре.",
    image: "banshee.jpg"
  },
  {
    id: 11,
    name: "Pegassi Bati 801",
    type: "Мотоцикл",
    speed: "217 км/ч",
    price: "15000 $GTA",
    description: "Красивый и быстрый байк.",
    image: "bati.jpg"
  },
  {
    id: 12,
    name: "Pegassi Vacca",
    type: "Суперкар",
    speed: "194 км/ч",
    price: "240000 $GTA",
    description: "Стильный автомобиль, похожий на Lamborghini.",
    image: "vacca.jpg"
  }
];
const Vehicles = () => {
  return (
    <section id="vehicles" className="vehicles">
      <div className="container">
        <h2 className="section-title">ТРАНСПОРТ В GTA V</h2>
        <p className="section-subtitle">Одни из самых интересных автомобилей в игре</p>
        <Slider items={vehicles} title="Коллекция транспорта" category="vehicles" />
      </div>
    </section>
  );
};
export default Vehicles;