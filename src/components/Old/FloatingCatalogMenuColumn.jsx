import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
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
  faChevronRight, // > icon for the button
  faChevronDown, // Dropdown icon for submenus
} from "@fortawesome/free-solid-svg-icons"; // Import relevant icons

const FloatingCatalogMenuColumn = () => {
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
      icon: faGift,
      subItems: [
        { title: "Гирлянды", link: "#girlyandy" },
        { title: "Шары елочные", link: "#shary" },
        { title: "Упаковка подарочная", link: "#upakovka" },
      ],
    },
    {
      title: "Сувенирная продукция",
      link: "#suveniry",
      icon: faBox,
      subItems: [
        { title: "Антистрессы", link: "#antistressy" },
        { title: "Брелоки", link: "#breloki" },
        { title: "Бейджи", link: "#bejdzhi" },
      ],
    },
    {
      title: "УПАКОВКА",
      link: "#upakovka",
      icon: faBoxOpen,
      subItems: [
        { title: "Пакеты", link: "#pakety" },
        { title: "Коробки", link: "#korobki" },
        { title: "Ленты", link: "#lenty" },
      ],
    },
    {
      title: "Деловые подарки",
      link: "#delovye-podarki",
      icon: faCalendarAlt,
      subItems: [
        { title: "Календари", link: "#kalendari" },
        { title: "Планеры", link: "#planery" },
        { title: "Книги", link: "#knigi" },
      ],
    },
    {
      title: "Наградная продукция",
      link: "#nagradnaya-produkciya",
      icon: faTrophy,
      subItems: [
        { title: "Трофеи", link: "#trofei" },
        { title: "Медали", link: "#medali" },
        { title: "Грамоты", link: "#gramoty" },
      ],
    },
    {
      title: "Текстиль",
      link: "#tekstil",
      icon: faTextHeight,
      subItems: [
        { title: "Полотенца", link: "#polotentsa" },
        { title: "Наволочки", link: "#navolochki" },
        { title: "Подушки", link: "#podushki" },
      ],
    },
    {
      title: "ОФИС и ШКОЛА",
      link: "#ofis-i-shkola",
      icon: faSchool,
      subItems: [
        { title: "Блокноты", link: "#bloknoty" },
        { title: "Ручки", link: "#ruchki" },
        { title: "Органайзеры", link: "#organaizery" },
      ],
    },
    {
      title: "Печати и штампы",
      link: "#pechati-i-shtampy",
      icon: faStamp,
      subItems: [
        { title: "Печати", link: "#pechati" },
        { title: "Штампы", link: "#shtampy" },
      ],
    },
    {
      title: "Сувениры Кузбасса",
      link: "#suveniry-kuzbassa",
      icon: faTools,
      subItems: [
        { title: "Таблички", link: "#tabliki" },
        { title: "Магниты", link: "#magnity" },
        { title: "Фигурки", link: "#figurki" },
      ],
    },
    {
      title: "Знаки безопасности",
      link: "#znaki-bezopasnosti",
      icon: faSign,
      subItems: [
        { title: "Предупреждающие знаки", link: "#preduprezhdayushchie" },
        { title: "Ограничительные знаки", link: "#ogranichitelnye" },
      ],
    },
    {
      title: "Рекламные конструкции",
      link: "#reklamnye-konstrukcii",
      icon: faTools,
      subItems: [
        { title: "Щиты", link: "#shchity" },
        { title: "Билборды", link: "#bilbordy" },
        { title: "Стойки", link: "#stoyki" },
      ],
    },
    {
      title: "Готовые ПОДАРКИ",
      link: "#gotovye-podarki",
      icon: faHandsHelping,
      subItems: [
        { title: "Подарочные наборы", link: "#podarochnye-nabory" },
        { title: "Корпоративные подарки", link: "#korporativnye-podarki" },
      ],
    },
  ];

  return (
    <div className="floating-catalog-column">
      {/* Button to toggle the column menu */}
      <button
        className={`catalog-button-column ${menuOpen ? "rotate" : ""}`}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faChevronRight} /> {/* Changed to > icon */}
      </button>

      {/* Column Menu */}
      <div className={`catalog-menu-column ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <div key={index}>
            <div className="menu-item-column" onClick={() => toggleSubMenu(index)}>
              <FontAwesomeIcon icon={item.icon} className="icon" />
              <a href={item.link}>{item.title}</a>
              {item.subItems.length > 0 && (
                <FontAwesomeIcon
                  icon={faChevronDown} // Dropdown icon for submenus
                  className={`dropdown-icon ${openSubMenu === index ? "rotate" : ""}`}
                />
              )}
            </div>
            {openSubMenu === index && item.subItems.length > 0 && (
              <ul className="submenu-column">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={subItem.link}>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingCatalogMenuColumn;