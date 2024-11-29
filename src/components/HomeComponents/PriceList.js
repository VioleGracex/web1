import { React ,useState } from "react";
import classNames from "classnames";

const commonTableCellStyles = "px-4 py-3 text-white text-center border border-gray-200";
const commonTableHeaderStyles = "px-4 py-3 bg-yellow-500 text-black text-center border border-gray-200";


export const PriceList = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Тарифы на дизайн услуг</h1>
      <p className="text-center mb-4">Выберите подходящий для вас тариф:</p>

      {/* Design Services */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className={commonTableHeaderStyles}>Услуга</th>
              <th className={commonTableHeaderStyles}>Стандарт</th>
              <th className={commonTableHeaderStyles}>Бизнес ХИТ</th>
              <th className={commonTableHeaderStyles}>✨VIP✨</th>
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
                <td className={commonTableCellStyles}>{item.service}</td>
                <td className={commonTableCellStyles}>{item.standard}</td>
                <td className={commonTableCellStyles}>{item.business}</td>
                <td className={commonTableCellStyles}>{item.vip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        <strong>Важно:</strong> Стоимость указана за одну сторону. 2-я сторона макета оплачивается по двойному тарифу.<br />
        В тарифе VIP цена может увеличиваться в зависимости от требований и сложности разработки дизайна.
      </p>

      {/* Additional Info */}
      <h2 className="text-2xl font-semibold my-6 text-center">Что входит в дизайн?</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className={commonTableHeaderStyles}>Перечень</th>
              <th className={commonTableHeaderStyles}>Стандарт</th>
              <th className={commonTableHeaderStyles}>Бизнес</th>
              <th className={commonTableHeaderStyles}>✨VIP✨</th>
            </tr>
          </thead>
          <tbody>
            {[
              { service: 'Подготовка к печати', standard: 'х', business: 'х', vip: '2' },
              { service: 'Логотип клиента (в виде изображения или вектора)', standard: 'х', business: 'х', vip: '2' },
              { service: 'Фото для добавления', standard: '1', business: '1', vip: '2' },
              { service: 'Фон всего дизайна', standard: 'Однотонный', business: 'Градиент или простой рисунок', vip: 'Градиент, текстура или изображение' },
              { service: 'Кол-во бесплатных правок дизайна', standard: '2', business: '3', vip: '4' },
              { service: 'Полное переделывание', standard: 'х', business: '1', vip: '2' },
              { service: 'Формат выдачи макета', standard: 'PDF, имена шрифтов', business: 'PDF, имена шрифтов', vip: 'PDF, имена шрифтов, EPS/CDR, мокап' },
              { service: 'Срок выполнения до согласования', standard: 'от 1 до 3 дней', business: 'от 2 до 3 дней', vip: 'от 3 дней' }
            ].map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className={commonTableCellStyles}>{item.service}</td>
                <td className={commonTableCellStyles}>{item.standard}</td>
                <td className={commonTableCellStyles}>{item.business}</td>
                <td className={commonTableCellStyles}>{item.vip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};



export const PriceList2 = () => {
  // Data for the tables
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
    <section id="price-list" className="p-8 bg-white rounded-lg">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-center text-4xl mb-6 text-yellow-500">КОПИРОВАНИЕ Услуги</h2>

        {/* Printing Services Table */}
        <div className="printing-services mb-10 p-6 rounded-lg shadow-lg">
          <h3 className="text-center text-2xl mb-4 text-gray-900">Печать</h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-separate rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr>
                  <th className={commonTableHeaderStyles}>Формат</th>
                  <th className={commonTableHeaderStyles}>Тип/Кол-во</th>
                  <th className={commonTableHeaderStyles}>От 1</th>
                  <th className={commonTableHeaderStyles}>От 2</th>
                  <th className={commonTableHeaderStyles}>От 10</th>
                  <th className={commonTableHeaderStyles}>От 50</th>
                  <th className={commonTableHeaderStyles}>От 100</th>
                  <th className={commonTableHeaderStyles}>От 200</th>
                </tr>
              </thead>
              <tbody>
                {printServices.map((service) =>
                  service.services.map((row, index) => (
                    <tr key={`${service.format}-${index}`} className="hover:bg-gray-700 hover:text-yellow-500">
                      {index === 0 && (
                        <td rowSpan={service.services.length} className={commonTableCellStyles}>
                          {service.format}
                        </td>
                      )}
                      <td className={commonTableCellStyles}>{row.type}</td>
                      {row.prices.map((price, priceIndex) => (
                        <td key={priceIndex} className={commonTableCellStyles}>
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
                  <th className={commonTableHeaderStyles}>Услуга</th>
                  <th className={commonTableHeaderStyles}>A4 (ч/б)</th>
                  <th className={commonTableHeaderStyles}>A4 (цветная)</th>
                  <th className={commonTableHeaderStyles}>A3 (ч/б)</th>
                  <th className={commonTableHeaderStyles}>A3 (цветная)</th>
                  <th className={commonTableHeaderStyles}>Сканирование (300 dpi)</th>
                  <th className={commonTableHeaderStyles}>Сканирование (600 dpi)</th>
                </tr>
              </thead>
              <tbody>
                {additionalServices.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-700 hover:text-yellow-500">
                    <td className={commonTableCellStyles}>{row.service}</td>
                    {row.prices.map((price, priceIndex) => (
                      <td key={priceIndex} className={commonTableCellStyles}>
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
      </div>
    </section>
  );
};



export const PriceCalculator = () => {
  const [isColor, setIsColor] = useState(false);
  const [size, setSize] = useState('A4');
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Data for price calculation
  const prices = {
    A4: {
      'ч/б': [12, 12, 10, 8, 7, 6.5], // Prices for black & white printing
      'цвет': [40, 37, 34, 31, 24, 21], // Prices for color printing
    },
    A3: {
      'ч/б': [25, 23, 21, 18, 16, 15], // Prices for black & white printing
      'цвет': [90, 79, 75, 69, 59, 49], // Prices for color printing
    },
  };

  const handleCalculate = () => {
    const sizePrices = prices[size][isColor ? 'цвет' : 'ч/б'];
    let pricePerPage = 0;

    // Determine the price based on amount
    if (amount >= 200) pricePerPage = sizePrices[5];
    else if (amount >= 100) pricePerPage = sizePrices[4];
    else if (amount >= 50) pricePerPage = sizePrices[3];
    else if (amount >= 10) pricePerPage = sizePrices[2];
    else if (amount >= 2) pricePerPage = sizePrices[1];
    else pricePerPage = sizePrices[0];

    setTotalPrice(pricePerPage * amount);
  };

  return (
    <section id="price-list" className="p-8 bg-white rounded-lg">
      <div className="container mx-auto max-w-screen-xl">
        {/* Your previous code for the price list here */}
        
        {/* Calculator Section */}
        <div className="calculator mt-12 p-6 rounded-lg shadow-lg bg-gray-100">
          <h3 className="text-center text-2xl mb-4 text-gray-900">Калькулятор Печати</h3>
          
          <div className="flex justify-center space-x-6 mb-4">
            {/* Color/Black & White Toggle */}
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
              <label className="block w-100 text-gray-700">Размер</label>
              <select
                className="px-4 py-2 w-[100px] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="A4">A4</option>
                <option value="A3">A3</option>
              </select>
            </div>
          </div>

          {/* Amount Input */}
          <div className="flex justify-center space-x-6 mb-4">
            <div>
              <label className="block text-black-700">Количество</label>
              <input
                type="number"
                className="px-4 py-2 w-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              onClick={handleCalculate}
            >
              Рассчитать
            </button>
          </div>

          {/* Total Price */}
          <div className="mt-6 text-center text-lg text-gray-800">
            <p className="font-semibold">Общая сумма: {totalPrice} ₽</p>
          </div>
        </div>
      </div>
    </section>
  );
};
