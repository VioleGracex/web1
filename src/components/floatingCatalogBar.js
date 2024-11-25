import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift, faBox, faCalendarAlt, faTrophy, faTextHeight,
  faSchool, faStamp, faTools, faSign, faHandsHelping, faBoxOpen
} from "@fortawesome/free-solid-svg-icons";

import './floatingCatalogBar.css';

const FloatingCatalogMenuBar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const menuItems = [
    { title: "Новый Год", link: "#novyj-god", icon: faGift },
    { title: "Сувениры", link: "#suveniry", icon: faBox },
    { title: "Упаковка", link: "#upakovka", icon: faBoxOpen },
    { title: "Деловые подарки", link: "#delovye-podarki", icon: faCalendarAlt },
    { title: "Награды", link: "#nagradnaya-produkciya", icon: faTrophy },
    { title: "Текстиль", link: "#tekstil", icon: faTextHeight },
    { title: "Офис и Школа", link: "#ofis-i-shkola", icon: faSchool },
    { title: "Печати и Штампы", link: "#pechati-i-shtampy", icon: faStamp },
    { title: "Рекламные конструкции", link: "#reklamnye-konstrukcii", icon: faTools },
    { title: "Знаки безопасности", link: "#znaki-bezopasnosti", icon: faSign },
    { title: "Готовые подарки", link: "#gotovye-podarki", icon: faHandsHelping },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  return (
    <div className="floating-catalog-bar">
        <Carousel responsive={responsive} infinite={true} draggable={true} showDots={false}>
            {menuItems.map((item, index) => (
                <div key={index} className="menu-item-bar">
                <a href={item.link}>
                    <FontAwesomeIcon icon={item.icon} className="icon" />
                    <span>{item.title}</span>
                </a>
                </div>
            ))}
        </Carousel>
    </div>
  );
};

export default FloatingCatalogMenuBar;
