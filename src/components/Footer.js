import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./HomeComponents/MailchimpForm";
import logo from "../assets/img/logo 2x2.png";
import navIcon1 from "../assets/img/vk-white.png";
import navIcon2 from "../assets/img/telegram-white.png";
import navIcon3 from "../assets/img/whatsapp-white.png";
import footerBg from "../assets/img/footer-bg.png";
import { faCreditCard, faBullhorn, faFileAlt, faUtensils, faBook, faCopy, faCut, faBookOpen, faCalendar, faHome, faPrint, faMobileAlt, faPaintBrush, faGift } from "@fortawesome/free-solid-svg-icons";

// Importing the icons individually
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Services using Font Awesome icons
const services = [
  { icon: faCreditCard, label: "Визитки", href: "#" },
  { icon: faBullhorn, label: "Цифровые Баннеры", href: "#" },
  { icon: faFileAlt, label: "Листовки и флаеры", href: "#" },
  { icon: faUtensils, label: "Меню для ресторанов", href: "#" },
  { icon: faBook, label: "Брошюры", href: "#" },
  { icon: faCopy, label: "Копии", href: "#" },
  { icon: faCut, label: "Контурная резка", href: "#" },
  { icon: faBookOpen, label: "Каталоги Евробуклеты", href: "#" },
  { icon: faCalendar, label: "Календари", href: "#" },
  { icon: faHome, label: "Монтажные работы, оформление объектов", href: "#" },
  { icon: faPrint, label: "Офсетная печать", href: "#" },
  { icon: faMobileAlt, label: "Цифровая печать / Оперативная печать", href: "#" },
  { icon: faPaintBrush, label: "Дизайнерские услуги", href: "#" },
  { icon: faGift, label: "Сувенирная продукция", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="relative w-full bg-slate-800 text-white py-12">
      <img
        src={footerBg}
        alt="Footer Background"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-[-1]"
      />
      <Container>
        <Row className="align-items-start">
          {/* Mailchimp Form Column with Fixed Width */}
          <Col xs={12} sm={4} className="d-flex flex-column align-items-center border-r border-slate-600 pr-8 mb-6 sm:mb-0">
            <img className="w-[26%] mb-4" src={logo} alt="Logo" />
            <div className="flex space-x-4 mt-2">
              {[navIcon1, navIcon2, navIcon3].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 overflow-hidden group"
                >
                  <span className="absolute w-full h-full bg-cyan-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
                  <img
                    src={icon}
                    alt="social-icon"
                    className="relative z-10 w-5 h-5 transition-transform duration-300 ease-in-out group-hover:brightness-0"
                  />
                </a>
              ))}
            </div>
          </Col>

          {/* Services Column with Normal Bootstrap Grid */}
          <Col xs={12} sm={8} className="d-flex flex-column align-items-start">
            <Row>
              {services.map((service, index) => (
                <Col xs={12} md={6} key={index} className="mb-4">
                  <a
                    href={service.href}
                    className="ml-2 footer-icon-link text-white d-flex align-items-center text-sm group hover:text-cyan-500"
                  >
                    <FontAwesomeIcon icon={service.icon} size="lg" className="ml-2 group-hover:text-cyan-500" />
                    <span className="group-hover:max-w-[none] c group-hover:whitespace-normal group-hover:text-cyan-500 overflow-visible transition-all duration-300 ease-in-out">
                      {service.label}
                    </span>
                  </a>
                </Col>
              ))}
            </Row>
            <p className="font-normal text-sm text-slate-200 tracking-[0.5px] mt-5 text-center sm:text-right">
              Авторские права 2024. Все права защищены.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
