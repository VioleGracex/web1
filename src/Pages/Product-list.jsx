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
    <div className="main-container relative p-4">
      {/* View and Slider Controls */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        {/* View Icons */}
        <button onClick={() => setViewType("grid")}>
          <FaTh size={24} className={`cursor-pointer ${viewType === "grid" ? "text-blue-500" : "text-gray-500"}`} />
        </button>
        <button onClick={() => setViewType("list")}>
          <FaBars size={24} className={`cursor-pointer ${viewType === "list" ? "text-blue-500" : "text-gray-500"}`} />
        </button>

        {/* Size Slider */}
        <input
          type="range"
          min="200"
          max="400"
          value={cardSize}
          onChange={(e) => setCardSize(e.target.value)}
          className="w-32"
          disabled={viewType === "list"} // Disable the slider in list view
        />
      </div>

      {/* Categories Column */}
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

      {/* Products Section */}
      <div
        className={`products-section mt-8 ${viewType === "grid" ? "grid gap-4" : "block"}`}
        style={{
          // Set gridTemplateColumns to limit the number of columns to 4
          gridTemplateColumns: viewType === "grid" && cardSize >= 150
            ? `repeat(auto-fit, minmax(${cardSize}px, 1fr))` // auto-fit with min/max card size
            : "none", // Switch to list view if card size is too small
          maxWidth: "100%", // Ensure it doesn't overflow
          overflow: "hidden", // Prevent overflow at smaller sizes
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`product-card p-4 bg-white rounded-lg shadow-md ${viewType === "list" ? "flex items-center space-x-4" : ""}`}
            style={{
              // Apply different min/max widths for grid and list views
              width: viewType === "list" ? "100%" : `${cardSize}px`, // Full width for list view, fixed width for grid
              minWidth: viewType === "grid" ? "200px" : "none", // Min width for grid items
              maxWidth: viewType === "grid" ? "400px" : "none", // Max width for grid items
            }}
          >
            {viewType === "list" ? (
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="w-16 h-16 rounded-full object-cover"
                style={{
                  flexShrink: 0,
                }}
              />
            ) : (
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="w-full rounded-lg bg-gray-200 object-cover"
                style={{
                  height: `${cardSize - 60}px`, // Adjust image height relative to card size
                  maxHeight: "400px", // Max height for the image
                  objectFit: "cover", // Ensure the image covers the area properly
                }}
              />
            )}
            <div className="product-text">
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
