import { React ,useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AccordionHeader from "../Elements/AccordionHeader";

const commonTableCellStyles = "px-4 py-3 text-white text-center border border-gray-200";
const commonTableHeaderStyles = "px-4 py-3 bg-yellow-500 text-black text-center border border-gray-200";


export const PriceListDesign = () => {
  return (
    <section id="price-list" className="p-8 bg-white rounded-lg shadow-md">
      <div className="container mx-auto px-4 text-gray-800">
        {/* Use AccordionHeader component */}
        <AccordionHeader title="Тарифы на дизайн услуг">
          {/* Description */}
          <p className="text-center my-4">Выберите подходящий для вас тариф:</p>

          {/* Design Services Table */}
          <div className="p-4 bg-white rounded-lg">
          <table className="min-w-full bg-white border border-gray-300 shadow-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Услуга</th>
                  <th className="px-4 py-2">Стандарт</th>
                  <th className="px-4 py-2">Бизнес <span className="text-blue-800">*ХИТ*</span></th>
                  <th className="px-4 py-2">❇️<span className="text-green-700">VIP</span>❇️</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: 'Визитка (1 сторона)', standard: '300 ₽', business: '450 ₽', vip: '750 ₽' },
                  { service: 'Флаер (1 сторона)', standard: '400 ₽', business: '600 ₽', vip: '1000 ₽' },
                  { service: 'Листовка (1 сторона)', standard: '450 ₽', business: '750 ₽', vip: '1350 ₽' },
                  { service: 'Буклет', standard: '900 ₽', business: '1600 ₽', vip: '2600 ₽' },
                  { service: 'Наклейка', standard: 'от 200 ₽', business: 'от 400 ₽', vip: 'от 600 ₽' },
                  { service: 'Табличка', standard: '450 ₽', business: '700 ₽', vip: 'от 1000 ₽' },
                  { service: 'Баннер', standard: '300 ₽', business: '600 ₽', vip: 'от 1500 ₽' }
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{item.service}</td>
                    <td className="px-4 py-2 border">{item.standard}</td>
                    <td className="px-4 py-2 border">{item.business}</td>
                    <td className="px-4 py-2 border">{item.vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-gray-600 mt-4">
            <strong>Важно:</strong> Стоимость указана за одну сторону. 2-я сторона макета оплачивается по двойному тарифу.
            <br />
            В тарифе VIP цена может увеличиваться в зависимости от требований и сложности разработки дизайна.
          </p>
        </AccordionHeader>
      </div>
    </section>
  );
};


export const PriceListCopy = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State for accordion toggle

  const printServices = [
    {
      format: 'A4',
      services: [
        { type: 'Печать ч/б (80 гр)', prices: ['12 ₽', '12 ₽', '10 ₽', '8 ₽', '7 ₽', '6,5 ₽'] },
        { type: 'Печать цвет (80 гр)', prices: ['40 ₽', '37 ₽', '34 ₽', '31 ₽', '24 ₽', '21 ₽'] },
      ],
    },
    {
      format: 'A3',
      services: [
        { type: 'Печать ч/б (80 гр)', prices: ['25 ₽', '23 ₽', '21 ₽', '18 ₽', '16 ₽', '15 ₽'] },
        { type: 'Печать цвет (80 гр)', prices: ['90 ₽', '79 ₽', '75 ₽', '69 ₽', '59 ₽', '49 ₽'] },
      ],
    },
  ];

  const additionalServices = [
    {
      service: 'Копирование',
      prices: ['14 ₽', 'Прайс печати', '25 ₽', 'Прайс печати', '30 ₽ / 25 ₽', '50 ₽ / 40 ₽'],
    },
    {
      service: 'Сканирование A3',
      prices: ['–', '–', '–', '–', '60 ₽ / 55 ₽', '120 ₽ / 110 ₽'],
    },
  ];

  return (
    <section id="price-list" className="p-8 bg-white rounded-lg shadow-md">
      <div className="container mx-auto px-4  text-gray-800">
      
      <AccordionHeader title= "Копировальные услуги">
        
          {/* Printing Services Table */}
          <div className="printing-services mb-10 p-6 rounded-lg shadow-lg">
            <h3 className="text-center text-2xl mb-4 text-gray-900">Печать</h3>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-separate rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr>
                    <th className="commonTableHeaderStyles">Формат</th>
                    <th className="commonTableHeaderStyles">Тип/Кол-во</th>
                    <th className="commonTableHeaderStyles">От 1</th>
                    <th className="commonTableHeaderStyles">От 2</th>
                    <th className="commonTableHeaderStyles">От 10</th>
                    <th className="commonTableHeaderStyles">От 50</th>
                    <th className="commonTableHeaderStyles">От 100</th>
                    <th className="commonTableHeaderStyles">От 200</th>
                  </tr>
                </thead>
                <tbody>
                  {printServices.map((service) =>
                    service.services.map((row, index) => (
                      <tr key={`${service.format}-${index}`} className="hover:bg-gray-50">
                        {index === 0 && (
                          <td rowSpan={service.services.length} className="px-4 py-2 border text-center">
                            {service.format}
                          </td>
                        )}
                        <td className="px-4 py-2 border">{row.type}</td>
                        {row.prices.map((price, priceIndex) => (
                          <td key={priceIndex} className="px-4 py-2 border">
                            {price}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* A4 and A3 Services Table */}
          <div className="additional-services mb-10 p-6 rounded-lg shadow-lg">
            <h3 className="text-center text-2xl mb-4 text-gray-900">Печать и Сканирование (A4 и A3)</h3>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-separate rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr>
                    <th className="commonTableHeaderStyles">Услуга</th>
                    <th className="commonTableHeaderStyles">A4 (ч/б)</th>
                    <th className="commonTableHeaderStyles">A4 (цветная)</th>
                    <th className="commonTableHeaderStyles">A3 (ч/б)</th>
                    <th className="commonTableHeaderStyles">A3 (цветная)</th>
                    <th className="commonTableHeaderStyles">Сканирование (300 dpi)</th>
                    <th className="commonTableHeaderStyles">Сканирование (600 dpi)</th>
                  </tr>
                </thead>
                <tbody>
                  {additionalServices.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border">{row.service}</td>
                      {row.prices.map((price, priceIndex) => (
                        <td key={priceIndex} className="px-4 py-2 border">
                          {price}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-gray-700 text-sm mt-4">
            <p>* при заливке Ч/Б счет идет по тарифу x2</p>
            <p>* Цена за ксерокопирование включает стоимость размещения документа, его сканирования и печати.</p>
            <p>* Каждое размещение документа считается как одна копия, дополнительные копии оплачиваются по цене печати.</p>
          </div>

      </AccordionHeader>
      </div>
    </section>
  );
};
export const PriceListPhoto = () => {

  // Data for the tables
  const expressPrintServices = [
    { 
      service: '10х15 (170-230) гр.', 
      price1: '28 ₽ ', 
      price10: '24 ₽ ', 
      price50: '20 ₽ ' 
    },
    { 
      service: 'А5 230 гр.', 
      price1: '43 ₽ ', 
      price10: '41 ₽ ', 
      price50: '40 ₽' 
    },
    { 
      service: 'А4 108-115 гр.', 
      price1: '80 ₽', 
      price10: '78 ₽ ', 
      price50: '75 ₽' 
    },
    { 
      service: 'А4 230 гр.', 
      price1: '100 ₽ ', 
      price10: '95 ₽ ', 
      price50: '92 ₽ ' 
    },
  ];
  

  const additionalServices = [
    { service: 'Цветокоррекция/улучшение фото/удаление фона', price: '30-50 ₽ за 1 фото' },
  ];

  return (
    <section id="price-list-photo" className="p-8 bg-white rounded-lg">
      <div className="container mx-auto px-4 text-gray-800">
          <AccordionHeader title="Фотоуслуги оперативная печать">
              <div className="p-4">
                <table className="w-full table-auto border-separate rounded-lg shadow-lg">
                  <thead>
                    <tr>
                      <th className={commonTableHeaderStyles}>Услуга</th>
                      <th className={commonTableHeaderStyles}>От 1</th>
                      <th className={commonTableHeaderStyles}>От 10</th>
                      <th className={commonTableHeaderStyles}>От 50</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expressPrintServices.map((service, index) => (
                      <tr key={index} className="hover:bg-gray-700 hover:text-yellow-500">
                        <td className={commonTableCellStyles}>{service.service}</td>
                        <td className={commonTableCellStyles}>{service.price1}</td>
                        <td className={commonTableCellStyles}>{service.price10}</td>
                        <td className={commonTableCellStyles}>{service.price50}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </AccordionHeader>
      </div>
    </section>
  );
};



export const PriceCalculator = () => {
  const [isColor, setIsColor] = useState(false);
  const [size, setSize] = useState('A4');
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [activeTab, setActiveTab] = useState('digital'); // 'digital' or 'photo'

  // Prices for digital printing
  const digitalPrices = {
    A4: {
      'ч/б': [12, 12, 10, 8, 7, 6.5], // Black & white printing
      'цвет': [40, 37, 34, 31, 24, 21], // Color printing
    },
    A3: {
      'ч/б': [25, 23, 21, 18, 16, 15], // Black & white printing
      'цвет': [90, 79, 75, 69, 59, 49], // Color printing
    },
  };

  // Prices for photo printing
  const photoPrices = {
    '10x15': { price: 19 },  // 10x15 size
    A5: { price: 37 },       // A5 size
    A4: { price: 60 },       // A4 size
  };

  const handleCalculateDigital = () => {
    const sizePrices = digitalPrices[size][isColor ? 'цвет' : 'ч/б'];
    let pricePerPage = 0;

    if (amount >= 200) pricePerPage = sizePrices[5];
    else if (amount >= 100) pricePerPage = sizePrices[4];
    else if (amount >= 50) pricePerPage = sizePrices[3];
    else if (amount >= 10) pricePerPage = sizePrices[2];
    else if (amount >= 2) pricePerPage = sizePrices[1];
    else pricePerPage = sizePrices[0];

    setTotalPrice(pricePerPage * amount);
  };

  const handleCalculatePhoto = () => {
    const pricePerPhoto = photoPrices[size]?.price || 0;
    setTotalPrice(pricePerPhoto * amount);
  };

  return (
    <section id="price-list" className="p-8 bg-white rounded-lg">
      <div className="container mx-auto max-w-screen-xl">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-3 rounded-l-lg ${activeTab === 'digital' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
            onClick={() => setActiveTab('digital')}
          >
            Цифровая печать
          </button>
          <button
            className={`px-6 py-3 rounded-r-lg ${activeTab === 'photo' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
            onClick={() => setActiveTab('photo')}
          >
            Фотопечать
          </button>
        </div>

        {/* Calculator Section */}
        {activeTab === 'digital' ? (
          // Digital Printing Calculator
          <div className="calculator p-6 rounded-lg shadow-lg bg-gray-100">
            <h3 className="text-center text-2xl mb-4 text-gray-900">Калькулятор Цифровой Печати</h3>

            {/* Color/Black & White Toggle */}
            <div className="flex justify-center space-x-6 mb-4">
              <div>
                <label className="block text-gray-700">Тип печати</label>
                <div className="flex items-center space-x-4">
                  <button
                    className={`px-4 py-2 rounded-lg ${!isColor ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
                    onClick={() => setIsColor(false)}
                  >
                    Ч/Б
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${isColor ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
                    onClick={() => setIsColor(true)}
                  >
                    Цвет
                  </button>
                </div>
              </div>

              {/* Size Dropdown */}
              <div>
                <label className="block text-gray-700">Размер</label>
                <select
                  className="px-4 py-2 w-32 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="A4">A4</option>
                  <option value="A3">A3</option>
                </select>
              </div>
            </div>

            {/* Amount Input */}
            <div className="flex justify-center mb-4">
              <div className="flex flex-col items-center">
                <label className="block text-gray-700 mb-2">Количество</label>
                <input
                  type="number"
                  className="px-4 py-2 w-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  min="1"
                />
              </div>
            </div>

            {/* Calculate Button */}
            <div className="text-center">
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                onClick={handleCalculateDigital}
              >
                Рассчитать
              </button>
            </div>

            {/* Total Price */}
            <div className="mt-6 text-center text-lg text-gray-800">
              <p className="font-semibold">Общая сумма: {totalPrice} ₽</p>
            </div>
          </div>
        ) : (
          // Photo Printing Calculator
          <div className="calculator p-6 rounded-lg shadow-lg bg-gray-100">
            <h3 className="text-center text-2xl mb-4 text-gray-900">Калькулятор Фотопечати</h3>

            {/* Size Dropdown */}
            <div className="flex justify-center mb-4">
              <div className="flex flex-col items-center">
                <label className="block  text-gray-700">Размер</label>
                <select
                  className="px-12 py-2 w-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="10x15">10x15</option>
                  <option value="A5">A5</option>
                  <option value="A4">A4</option>
                </select>
              </div>
            </div>

            {/* Amount Input */}
            <div className="flex justify-center mb-4">
            <div className="flex flex-col items-center">
                <label className="block text-gray-700 ">Количество</label>
                <input
                  type="number"
                  className="px-4 py-3 w-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  min="1"
                />
              </div>
            </div>

            {/* Calculate Button */}
            <div className="text-center">
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                onClick={handleCalculatePhoto}
              >
                Рассчитать
              </button>
            </div>

            {/* Total Price */}
            <div className="mt-6 text-center text-lg text-gray-800">
              <p className="font-semibold">Общая сумма: {totalPrice} ₽</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};