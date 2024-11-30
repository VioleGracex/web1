import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaTh, FaBars, FaFilter, FaTimes } from "react-icons/fa"; // For view icons (install react-icons if not done)
import { categories } from "../data/categories";
import { products } from "../data/products";
import '../Styles.css';

export default function Catalog() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [viewType, setViewType] = useState("grid"); // 'grid' or 'list'
  const [cardSize, setCardSize] = useState(200); // Initial card size in pixels
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State for filter menu

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
    <div className="py-12 mt-20 catalog-container bg-soft-white min-h-screen flex flex-col p-4">
      {/* Filter Menu (Mobile) */}
      <div
        className={`filter-menu fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 p-4 z-20 ${isFilterOpen ? "block" : "hidden"}`}
      >
        <div className="mt-24 bg-white rounded-lg p-4 max-w- mx-auto relative max-h-[calc(100vh-80px)] overflow-auto">
          {/* Close Button */}
          <button
            onClick={() => setIsFilterOpen(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 z-30" // Added z-index here
          >
            <FaTimes size={30} />
          </button>

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
          <button
            onClick={() => setIsFilterOpen(false)}
            className="mt-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-md w-full"
          >
            Закрыть
          </button>
        </div>
      </div>

      {/* Main Catalog Area (Categories + Products) */}
      <div className="flex-1 flex flex-col sm:flex-row bg-white rounded-lg shadow-md">
        {/* Categories Column */}
        <div
          className={`categories-container w-full sm:w-64 max-h-[90vh] overflow-y-auto bg-gray-100 rounded-lg p-4 sm:mr-4 ${isFilterOpen ? "block" : "hidden sm:block"}`}
        >
          <h3 className="font-semibold mb-2">Категории</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <label className="text-black flex items-center mt-2 space-x-2">
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
        <div className="products-container flex-1 flex flex-col bg-white p-4">
          {/* View Type Toggle, Filter Button (for small screens), and Slider */}
          <div className="view-toggle mb-4 flex justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={() => setViewType(viewType === "grid" ? "list" : "grid")}
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 mr-4"
              >
                {viewType === "grid" ? <FaBars /> : <FaTh />}
              </button>

              {/* Filter Button (for small screens only) */}
              <button
                onClick={() => setIsFilterOpen((prev) => !prev)}
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 sm:hidden"
              >
                <FaFilter />
              </button>
            </div>

            {/* Slider for Card Size */}
            <div className="flex items-center">
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
              <Link
                key={product.id} // Unique key for each product
                to={`/product/${product.id}`} // Link to the product page using the product ID
                className={`mt-24 product-card p-4 bg-white rounded-lg shadow-md ${
                  viewType === "list" ? "flex items-center space-x-4" : ""
                }`}
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
