import React from "react";

export const PriceList = () => {
  return (
    <section id="price-list" className="price-list">
      <div className="container">
      <h2 style={{ color: '#121212' }}>Тарифы</h2>

        <p>Выберите подходящий для вас тариф</p>

            {/* Design Services Table */}
        <div className="service-table">
          <h3>Дизайн услуг</h3>
          <table>
            <thead>
              <tr>
                <th>Услуга</th>
                <th>Стандарт</th>
                <th>Бизнес *ХИТ*</th>
                <th>✨VIP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Визитка (1 сторона)</td>
                <td>300 ₽</td>
                <td>450 ₽</td>
                <td>750 ₽</td>
              </tr>
              <tr>
                <td>Флаер (1 сторона)</td>
                <td>400 ₽</td>
                <td>600 ₽</td>
                <td>1000 ₽</td>
              </tr>
              <tr>
                <td>Листовка (1 сторона)</td>
                <td>450 ₽</td>
                <td>750 ₽</td>
                <td>1350 ₽</td>
              </tr>
              <tr>
                <td>Буклет</td>
                <td>900 ₽</td>
                <td>1600 ₽</td>
                <td>2600 ₽</td>
              </tr>
              <tr>
                <td>Наклейка</td>
                <td>от 200 ₽</td>
                <td>от 400 ₽</td>
                <td>от 600 ₽</td>
              </tr>
              <tr>
                <td>Табличка</td>
                <td>450 ₽</td>
                <td>700 ₽</td>
                <td>от 1000 ₽</td>
              </tr>
              <tr>
                <td>Баннер</td>
                <td>300 ₽</td>
                <td>600 ₽</td>
                <td>от 1500 ₽</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '10px' }}>Стоимость указана за одну сторону. 2я сторона макета оплачивается по двойному тарифу.</p>
          <p>В тарифе VIP в зависимости от требований, сложностей разработки дизайна, цена может увеличиваться.</p>
        </div>

        {/* Design Details */}
        <div className="design-details">
          <h3>Что входит в дизайн?</h3>
          <table>
            <thead>
              <tr>
                <th>Перечень</th>
                <th>Стандарт</th>
                <th>Бизнес</th>
                <th>✨VIP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Описание</td>
                <td>Простой дизайн с базовой информацией</td>
                <td>Профессиональный стиль для деловых встреч</td>
                <td>Премиальный дизайн с вниманием к деталям</td>
              </tr>
              <tr>
                <td>Подготовка к печати</td>
                <td>Да</td>
                <td>Да</td>
                <td>Да</td>
              </tr>
              <tr>
                <td>Логотип клиента</td>
                <td>Векторное изображение</td>
                <td>Да</td>
                <td>Да</td>
              </tr>
              <tr>
                <td>Фото для добавления</td>
                <td>1</td>
                <td>2</td>
                <td>Неограниченно</td>
              </tr>
              <tr>
                <td>Фон всего дизайна</td>
                <td>Однотонный</td>
                <td>Градиент</td>
                <td>Градиент/Текстура/Изображение</td>
              </tr>
              <tr>
                <td>QR-коды</td>
                <td>1</td>
                <td>2</td>
                <td>Неограниченно</td>
              </tr>
              <tr>
                <td>Количество бесплатных правок</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Полное переделывание</td>
                <td>1 раз</td>
                <td>2 раза</td>
                <td>Неограниченно</td>
              </tr>
              <tr>
                <td>Формат выдачи макета</td>
                <td>PDF</td>
                <td>PDF</td>
                <td>PDF, EPS/CDR, Мокап</td>
              </tr>
              <tr>
                <td>Срок выполнения</td>
                <td>1-3 дня</td>
                <td>2-3 дня</td>
                <td>3 дня и более</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '10px' }}>Дополнительные услуги, добавление элементов и правки оплачиваются отдельно.</p>
        </div>
        {/* Printing Services */}
        <div className="printing-services">
          <h3>Печать</h3>
          <table>
            <thead>
              <tr>
                <th>Формат</th>
                <th>Тип печати</th>
                <th>От 1</th>
                <th>От 2</th>
                <th>От 10</th>
                <th>От 50</th>
                <th>От 100</th>
                <th>От 200</th>
              </tr>
            </thead>
            <tbody>
              {/* A4 Printing */}
              <tr>
                <td rowSpan="2">A4</td>
                <td>Ч/Б</td>
                <td>14 ₽</td>
                <td>12 ₽</td>
                <td>10 ₽</td>
                <td>9 ₽</td>
                <td>8 ₽</td>
                <td>7 ₽</td>
              </tr>
              <tr>
                <td>Цветная</td>
                <td>38 ₽</td>
                <td>35 ₽</td>
                <td>31 ₽</td>
                <td>25 ₽</td>
                <td>21 ₽</td>
                <td>18 ₽</td>
              </tr>

              {/* A3 Printing */}
              <tr>
                <td rowSpan="2">A3</td>
                <td>Ч/Б (80 гр.)</td>
                <td>24 ₽</td>
                <td>18 ₽</td>
                <td>16 ₽</td>
                <td>14 ₽</td>
                <td>14 ₽</td>
                <td>–</td>
              </tr>
              <tr>
                <td>Цветная (80 гр.)</td>
                <td>55 ₽</td>
                <td>53 ₽</td>
                <td>49 ₽</td>
                <td>45 ₽</td>
                <td>42 ₽</td>
                <td>–</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Photo Printing Services */}
        <div className="photo-printing">
          <h3>Фотоуслуги</h3>
          <table>
            <thead>
              <tr>
                <th>Размер</th>
                <th>Кол-во</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10*15 170-200 гр.</td>
                <td>от 50</td>
                <td>19 ₽</td>
              </tr>
              <tr>
                <td>10*15 170-200 гр.</td>
                <td>от 100</td>
                <td>17 ₽</td>
              </tr>
              <tr>
                <td>A5 230 гр.</td>
                <td>от 50</td>
                <td>37 ₽</td>
              </tr>
              <tr>
                <td>A4 230 гр.</td>
                <td>от 50</td>
                <td>80 ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
