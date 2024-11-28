import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./HomeComponents/MailchimpForm";
import logo from "../assets/img/logo 2x2.png";
import navIcon1 from "../assets/img/vk white.png";
import navIcon2 from "../assets/img/telegram white.png";
import navIcon3 from "../assets/img/whatsapp white.png";
import footerBg from "../assets/img/footer-bg.png"; // Import the background image

export const Footer = () => {
  return (
    <footer>
      <div className="relative w-full">
        <img 
          src={footerBg} 
          alt="Footer Background" 
          className="w-full h-auto object-cover absolute top-0 left-0 right-0 bottom-0 z-[-1]" 
        />
        <Container>
          <Row className="align-items-center">
            <MailchimpForm />
            <Col size={12} sm={6}>
              <img className="w-[26%]" src={logo} alt="Logo" />
            </Col>
            <Col>
              <div className="flex space-x-4 ml-6">
                {[navIcon1, navIcon2, navIcon3].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="relative w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 overflow-hidden group"
                  >
                    {/* Circle fill effect */}
                    <span className="absolute w-full h-full bg-cyan-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
                    {/* Social icon */}
                    <img 
                      src={icon} 
                      alt="social-icon" 
                      className="relative z-10 w-5 h-5 transition-transform duration-300 ease-in-out group-hover:brightness-0"
                    />
                  </a>
                ))}
              </div>
              <p className="font-normal text-sm text-slate-200 tracking-[0.5px] mt-5">Авторские права 2024. Все права защищены.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
