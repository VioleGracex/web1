import { useState } from "react";
import { products } from "../data/products";
import { FaTh, FaBars } from "react-icons/fa"; // For view icons (install react-icons if not done)

export default function ProductList() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [viewType, setViewType] = useState("grid"); // 'grid' or 'list'
  const [cardSize, setCardSize] = useState(200); // Initial card size in pixels

  const categories = [
    "Новый Год",
    "Сувениры",
    "Упаковка",
    "Деловые подарки",
    "Награды",
    "Текстиль",
    "Офис и Школа",
    "Печати и Штампы",
    "Рекламные конструкции",
    "Знаки безопасности",
    "Готовые подарки",
    "Бизнес полиграфия",
    "Бумажные пакеты",
    "Картонная упаковка",
    "Брошюры и каталоги",
    "Рекламные технологии",
    "Печать на одежде",
    "Рекламная полиграфия",
    "Листовки",
    "Флаеры",
    "Буклеты",
    "Бирки",
    "Наклейки и этикетки",
    "Хенгеры",
    "Рекламные магниты",
    "Магнитный планер",
    "Воблеры",
    "Полимерные наклейки",
    "Стикерпаки",
    "Шоколад с логотипом",
    "Визитки",
    "Простые открытки",
    "Фирменные папки",
    "Фирменные бланки",
    "Блокноты",
    "Дипломы и грамоты",
    "Карманные календари",
    "Квартальные календари",
    "Настенные календари",
    "Настольные календари",
    "Маленькие пакеты",
    "Средние пакеты",
    "Большие пакеты",
    "Винные пакеты",
    "Упаковка для аромасвечей",
    "Упаковка для парфюмерии",
    "Упаковка для шоколада",
    "Упаковка для чая и кофе",
    "Упаковка для косметики",
    "Упаковка для канцтоваров",
    "Упаковка для медицинских масок",
    "Упаковка для антисептика",
    "Упаковка для зубной пасты и щеток",
    "Упаковка для игральных карт",
    "Упаковка для дисконтных карт",
    "Брошюры на скобе",
    "Каталоги на пружине",
    "Каталоги на винтах",
    "Интерьерная печать на бумаге",
    "Интерьерная печать на плёнке",
    "Интерьерная печать на холсте",
    "Печать изготовление картин на холсте",
    "Изготовление стендов Roll Up",
  ];

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  const filteredProducts = selectedCategories.length
    ? products.filter((product) => selectedCategories.includes(product.category))
    : products;

    return (
      <div className="main-container flex p-4">
        {/* Categories Column */}
        <div className="categories-container w-64 mr-8"> {/* Fixed width container for categories */}
          <div className="categories-column p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold mb-2">Категории</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="mr-2"
                    />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Products Section */}
        <div className="products-container flex-1 flex flex-col"> {/* Takes up the remaining space */}
          {/* View Type Toggle and Slider on Right */}
          <div className="view-toggle mb-4 flex justify-end items-center">
            <button
              onClick={() => setViewType(viewType === "grid" ? "list" : "grid")}
              className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 mr-4"
            >
              {viewType === "grid" ? <FaBars /> : <FaTh />}
            </button>
  
            {/* Slider for Card Size */}
            <label className="mr-4">Размер карточек</label>
            <input
              type="range"
              min="150"
              max="300"
              value={cardSize}
              onChange={(e) => setCardSize(e.target.value)}
              className="slider"
            />
          </div>
  
          {/* Products Display */}
          <div
            className={`products-section ${viewType === "grid" ? "grid gap-4" : "block"}`}
            style={{
              gridTemplateColumns:
                viewType === "grid" && cardSize >= 150
                  ? `repeat(auto-fit, minmax(${cardSize}px, 1fr))`
                  : "none",
              gridAutoRows: "minmax(250px, auto)", // Consistent row height
              justifyItems: "center",
              rowGap: "16px",
            }}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`product-card p-4 bg-white rounded-lg shadow-md ${viewType === "list" ? "flex items-center space-x-4" : ""}`}
                style={{
                  width: viewType === "list" ? "100%" : `${cardSize}px`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxSizing: "border-box",
                }}
              >
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className={`rounded-lg ${viewType === "list" ? "w-16 h-16" : "w-full"}`}
                  style={{
                    height: `${cardSize - 60}px`,
                    maxHeight: "250px",
                    objectFit: "cover",
                    aspectRatio: "4 / 3",
                  }}
                />
                <div className="product-text mt-4 text-center">
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="text-lg font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
