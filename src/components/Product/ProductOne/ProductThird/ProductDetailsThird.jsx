import ProductsThreeList from "./ThirdCommonProduct"


import { useState } from 'react';
import { useParams } from 'react-router-dom';


function ProductThirdDetails() {
  const { id } = useParams();
  const product = ProductsThreeList.find(p => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  if (!product) {
    return <div className="text-center text-lg text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.colors[selectedColor]}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>

          <p className="text-xl text-gray-600 font-semibold">
            <span className="text-gray-900">{product.price}</span>
          </p>
          <p className="text-lg text-gray-500">
            Rating: <span className="text-yellow-500 font-bold">{product.rating}⭐</span>
          </p>

          <div className="color-selection">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Colors:</h3>
            <div className="flex gap-4">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`border rounded-md p-1 ${
                    selectedColor === index ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedColor(index)}
                >
                  <img src={color} alt={`Color ${index + 1}`} className="w-10 h-10 rounded-md" />
                </button>
              ))}
            </div>
          </div>

          <div className="size-selection">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Sizes:</h3>
            <div className="flex gap-4">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-md text-white ${
                    selectedSize === index
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                  onClick={() => setSelectedSize(index)}
                >
                  {size.size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductThirdDetails;