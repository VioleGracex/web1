import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGift,
  faBox,
  faCalendarAlt,
  faTrophy,
  faPrint,
  faTextHeight,
  faSchool,
  faStamp,
  faTools,
  faSign,
  faHandsHelping,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

const FloatingCatalogMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const menuItems = [
    {
      title: "Новый Год",
      link: "#novyj-god",
      icon: faGift, // Icon for Новый Год
      subItems: [
        { title: "Гирлянды", link: "#girlyandy" },
        { title: "Шары елочные", link: "#shary" },
        { title: "Упаковка подарочная", link: "#upakovka" },
      ],
    },
    {
      title: "Сувенирная продукция",
      link: "#suveniry",
      icon: faBox, // Icon for Сувенирная продукция
      subItems: [
        { title: "Антистрессы", link: "#antistressy" },
        { title: "Брелоки", link: "#breloki" },
        { title: "Бейджи", link: "#bejdzhi" },
      ],
    },
    {
      title: "УПАКОВКА",
      link: "#upakovka",
      icon: faBoxOpen, // Icon for УПАКОВКА
      subItems: [
        { title: "Пакеты", link: "#pakety" },
        { title: "Коробки", link: "#korobki" },
        { title: "Ленты", link: "#lenty" },
      ],
    },
    {
      title: "Деловые подарки",
      link: "#delovye-podarki",
      icon: faCalendarAlt, // Icon for Деловые подарки
      subItems: [
        { title: "Календари", link: "#kalendari" },
        { title: "Планеры", link: "#planery" },
        { title: "Книги", link: "#knigi" },
      ],
    },
    {
      title: "Наградная продукция",
      link: "#nagradnaya-produkciya",
      icon: faTrophy, // Icon for Наградная продукция
      subItems: [
        { title: "Трофеи", link: "#trofei" },
        { title: "Медали", link: "#medali" },
        { title: "Грамоты", link: "#gramoty" },
      ],
    },
    {
      title: "Текстиль",
      link: "#tekstil",
      icon: faTextHeight, // Icon for Текстиль
      subItems: [
        { title: "Полотенца", link: "#polotentsa" },
        { title: "Наволочки", link: "#navolochki" },
        { title: "Подушки", link: "#podushki" },
      ],
    },
    {
      title: "ОФИС и ШКОЛА",
      link: "#ofis-i-shkola",
      icon: faSchool, // Icon for ОФИС и ШКОЛА
      subItems: [
        { title: "Блокноты", link: "#bloknoty" },
        { title: "Ручки", link: "#ruchki" },
        { title: "Органайзеры", link: "#organaizery" },
      ],
    },
    {
      title: "Печати и штампы",
      link: "#pechati-i-shtampy",
      icon: faStamp, // Icon for Печати и штампы
      subItems: [
        { title: "Печати", link: "#pechati" },
        { title: "Штампы", link: "#shtampy" },
      ],
    },
    {
      title: "Сувениры Кузбасса",
      link: "#suveniry-kuzbassa",
      icon: faTools, // Icon for Сувениры Кузбасса
      subItems: [
        { title: "Таблички", link: "#tabliki" },
        { title: "Магниты", link: "#magnity" },
        { title: "Фигурки", link: "#figurki" },
      ],
    },
    {
      title: "Знаки безопасности",
      link: "#znaki-bezopasnosti",
      icon: faSign, // Icon for Знаки безопасности
      subItems: [
        { title: "Предупреждающие знаки", link: "#preduprezhdayushchie" },
        { title: "Ограничительные знаки", link: "#ogranichitelnye" },
      ],
    },
    {
      title: "Рекламные конструкции",
      link: "#reklamnye-konstrukcii",
      icon: faTools, // Icon for Рекламные конструкции
      subItems: [
        { title: "Щиты", link: "#shchity" },
        { title: "Билборды", link: "#bilbordy" },
        { title: "Стойки", link: "#stoyki" },
      ],
    },
    {
      title: "Готовые ПОДАРКИ",
      link: "#gotovye-podarki",
      icon: faHandsHelping, // Icon for Готовые ПОДАРКИ
      subItems: [
        { title: "Подарочные наборы", link: "#podarochnye-nabory" },
        { title: "Сертификаты", link: "#sertifikaty" },
        { title: "Подарочные корзины", link: "#podarochnye-korziny" },
      ],
    },
  ];

  return (
    <div className="floating-catalog">
      <button className="catalog-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} style={{ marginRight: "8px" }} />
        <span>Каталог</span>
      </button>
      {menuOpen && (
        <ul className="catalog-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.link} onClick={() => toggleSubMenu(index)}>
                <FontAwesomeIcon icon={item.icon} style={{ marginRight: "8px" }} />
                {item.title}
              </a>
              {item.subItems && openSubMenu === index && (
                <ul className="submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <HashLink smooth to={subItem.link}>
                        {subItem.title}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FloatingCatalogMenu;
