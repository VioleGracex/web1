import { useState } from "react";
import { products } from "../data/products";
export default function ProductPage() {

    
  const product = {
    name: "Евробуклет",
    description: "Глянцевая бумага, 115 г/м2",
    price: 2835.47,
    imageSrc: "/path/to/product-image.jpg",
  };

  // Move the useState hooks outside of any conditionals or early returns
  const [quantity, setQuantity] = useState(50); // default quantity
  const [totalPrice, setTotalPrice] = useState(product.price); // initial total price

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * product.price);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name} to cart`);
  };

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
          <p>{product.description}</p>
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
