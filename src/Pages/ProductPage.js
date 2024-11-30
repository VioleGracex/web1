import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products"; // Ensure the path is correct

export default function ProductPage() {
  const { id } = useParams(); // Extract the product ID from the URL
  
  // Convert the ID to a number since the product IDs in the array are numbers
  const productId = Number(id);

  // Find the product based on the product ID from the URL
  const product = products.find((prod) => prod.id === productId);

  // Default state initialization for quantity and total price
  const [quantity, setQuantity] = useState(50); // Default quantity
  const [totalPrice, setTotalPrice] = useState(product ? parseFloat(product.price) : 0); // Convert price to float for calculations

  // Update total price when quantity or product changes
  useEffect(() => {
    if (product) {
      setTotalPrice(quantity * parseFloat(product.price));
    }
  }, [quantity, product]);

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
  };

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    alert(`Добавлено ${quantity} ${product.name} в корзину`);
  };

  // If the product is not found, show a "not found" message
  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className="product-page p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="flex gap-6">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="w-1/3 h-auto object-cover rounded-lg"
        />
        <div className="product-details w-2/3">
          <p>{product.category}</p>
          <p>{product.description}</p> {/* Assuming 'description' exists in your data */}
          <div className="quantity-selector mt-4">
            <label htmlFor="quantity" className="block font-semibold mb-2">
              Выберите тираж:
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="price mt-4">
            <p className="text-lg font-medium">
              Стоимость заказа: <span className="font-bold">{totalPrice.toFixed(2)} ₽</span>
            </p>
          </div>
          <div className="file-upload mt-4">
            <label htmlFor="file" className="block font-semibold mb-2">
              Загрузить макет для проверки:
            </label>
            <input type="file" id="file" className="border p-2 rounded" />
          </div>
          <div className="mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white p-3 rounded-md w-full"
            >
              Добавить в корзину
            </button>
          </div>
          <div className="callback-request mt-4">
            <button className="text-blue-500 underline">Заказать обратный звонок</button>
          </div>
        </div>
      </div>
    </div>
  );
}
