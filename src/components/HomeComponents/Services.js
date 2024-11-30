import { FaPrint, FaImages, FaSign, FaEnvelope, FaPaintBrush, FaFileAlt, FaCamera, FaGift } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom'; // For navigation to other pages
import colorSharp from "../../assets/img/color-sharp.png";

export const Services = () => {
  // Define an array of services
  const services = [
    { icon: <FaPrint />, title: 'Копировальные работы', description: 'Ч/б и полноцветное копирование, масштабирование, ризография, копирование на различных видах бумаг.', link: '/copywork' },
    { icon: <FaSign />, title: 'Таблички и инфодоски', description: 'Изготовление различных видов табличек, указателей, информационных стендов.', link: '/signboards' },
    { icon: <FaPaintBrush />, title: 'Дизайн и Верстка', description: 'Разработка дизайн-макетов, верстка, редактирование, цветокоррекция, ретушь, разработка фирменного стиля.', link: '/design' },
    { icon: <FaFileAlt />, title: 'Полиграфия', description: 'Цветная и ч/б печать, копировальные работы, изготовление флаеров, буклетов, широкоформатная печать.', link: '/printing' },
    { icon: <FaCamera />, title: 'Печать фотографий', description: 'Печать фотографий стандартных размеров, печать широкоформатных (больших) фотографий.', link: '/photoprint' },
    { icon: <FaGift />, title: 'Изготовление сувениров', description: 'Печать на футболках, кружках. Изготовление пазлов, ковриков для мыши, брелков, магнитов.', link: '/gifts' }
  ];

  return (
    <section className="service py-16" id="services" >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Наши Услуги</h2>
          <p className="text-lg mt-4">
            Мы предлагаем широкий спектр услуг в области полиграфии. Создание бизнес карт, буклетов, стикеров и многое другое. <br />
            Мы воплощаем ваши идеи в идеальном дизайне.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="no-underline">
              <div className="service-item bg-white shadow-lg p-6 rounded-lg hover:scale-105 transform transition-all duration-300 flex flex-col h-full">
                <div className="service-icon text-8xl mb-2 text-blue-600 flex-shrink-0">
                  {service.icon}
                </div>
                <h5 className="text-xl font-bold text-black mb-2 flex-shrink-0">{service.title}</h5>
                <p className="text-sm text-gray-600 flex-grow">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <img className="background-image-left absolute top-0 left-0 w-full h-full object-cover opacity-30" src={colorSharp} alt="Background" />
    </section>
  );
};
