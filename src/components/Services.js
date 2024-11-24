import businessCardImage from "../assets/img/business-card.png"; 
import brochureImage from "../assets/img/Tri Fold Showcase Mockup.png";
import stickerImage from "../assets/img/sticker-1.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg"; 
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"; 

export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="service" id="services">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="service-bx wow zoomIn">
                        <h2>Наши Услуги</h2>
                        <p>Мы предлагаем широкий спектр услуг в области полиграфии. Создание бизнес карт, буклетов, стикеров и многое другое.<br></br>Мы воплощаем ваши идеи в идеальном дизайне.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme service-slider">
                            <div className="item">
                                <div className="service-item">
                                  <img className="service-image" src={businessCardImage} alt="Бизнес карты" />
                                  <h5>Дизайн Бизнес Карты</h5>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service-item">
                                  <img className="service-image" src={brochureImage} alt="Буклеты" />
                                  <h5>Дизайн Буклетов</h5>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service-item">
                                  <img className="service-image" src={stickerImage} alt="Стикеры" />
                                  <h5>Дизайн Стикеров</h5>
                                </div>
                            </div>
                            <div className="item">
                                <div className="service-item">
                                  <img className="service-image" src={businessCardImage} alt="Пакеты для стикеров" />
                                  <h5>Пакеты для Стикеров</h5>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
