import { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsTwoList from './TwoCommonProducts';
import { useCart } from '@/components/ContextCart/CartContext';

  const products = [
    {
      id: 1,
      name: "10MM Lever Belt - Black",
      price: "Rs.11,300.00",
      rating: 4.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
      initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
      colors: [ 
        "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
        "/ProductPage/gravestone_backpack_lever_green.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
      ],
      sizes: [
        { size: "XS (24-31\")" },
        { size: "S (26-33\")", price: "24,500.00" },
        { size: "M (30-36\")", price: "24,800.00" },
        { size: "L (34-41\")", price: "25,000.00" },
        { size: "XL (38-45\")", price: "25,300.00" },
        { size: "2XL (39-46\")", price: "25,500.00" },
      ],
    },
    {
      id: 2,
      name: "10MM Lever Belt - Black/Black",
      price: "Rs.11,300.00",
      rating: 4.9,
      initialImg:"/ProductGridImage/10mm-lever-belt-black-black-main.jpg",
      hoverImg:  "/ProductGridImage/10mm-lever-belt-black-black-back.jpg",
     
  
      colors: [ 
        "/ProductGridImage/10mm-lever-belt-black-black-main.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
        "/ProductPage/gravestone_backpack_lever_green.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
      ],
      sizes: [
        { size: "XS (24-31\")", price: "24,900.00" },
        { size: "S (26-33\")", price: "24,500.00" },
        { size: "M (30-36\")", price: "24,800.00" },
        { size: "L (34-41\")", price: "25,000.00" },
        { size: "XL (38-45\")", price: "25,300.00" },
        { size: "2XL (39-46\")", price: "25,500.00" },
      ],
    },
    {
      id: 3,
      name: "10MM Lever Belt - Gray",
      price: "Rs.11,300.00",
      rating: 4.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-gray-back.jpg",
      initialImg: "/ProductGridImage/10mm-lever-belt-gray-main_2.jpg",
      colors: [ 
        "/ProductGridImage/10mm-lever-belt-gray-main_2.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
        "/ProductPage/gravestone_backpack_lever_green.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
      ],
      sizes: [
        { size: "XS (24-31\")", price: "24,900.00" },
        { size: "S (26-33\")", price: "24,500.00" },
        { size: "M (30-36\")", price: "24,800.00" },
        { size: "L (34-41\")", price: "25,000.00" },
        { size: "XL (38-45\")", price: "25,300.00" },
        { size: "2XL (39-46\")", price: "25,500.00" },
      ],
    }, {
      id: 4,
      name: "10MM Lever Belt - Red",
      price: "Rs.11,300.00",
      rating: 4.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-red-back.jpg",
      initialImg: "/ProductGridImage/10mm-lever-belt-red-main_2.jpg",
      colors: [ 
        "/ProductGridImage/10mm-lever-belt-red-main_2.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
        "/ProductPage/gravestone_backpack_lever_green.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
      ],
      sizes: [
        { size: "XS (24-31\")", price: "24,900.00" },
        { size: "S (26-33\")", price: "24,500.00" },
        { size: "M (30-36\")", price: "24,800.00" },
        { size: "L (34-41\")", price: "25,000.00" },
        { size: "XL (38-45\")", price: "25,300.00" },
        { size: "2XL (39-46\")", price: "25,500.00" },
      ],
    }, {
      id: 5,
      name: "Gymreapers Strength Kit - 10MM Black",
      price: "Rs. 17,400.00",
      rating: 4.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
      initialImg: "/ProductGridImage/10mm-strength-kit-black-main.jpg",
      colors: [ 
        "/ProductGridImage/10mm-strength-kit-black-main.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
        "/ProductPage/gravestone_backpack_lever_green.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
      ],
      sizes: [
        { size: "XS (24-31\")", price: "24,900.00" },
        { size: "S (26-33\")", price: "24,500.00" },
        { size: "M (30-36\")", price: "24,800.00" },
        { size: "L (34-41\")", price: "25,000.00" },
        { size: "XL (38-45\")", price: "25,300.00" },
        { size: "2XL (39-46\")", price: "25,500.00" },
      ],
    }, {
      id: 6,
      name: "Gymreapers Strength Kit - 10MM Black/Black",
      price: "Rs. 17,400.00",
      rating: 4.9,
      hoverImg:"/ProductGridImage/10mm-lever-belt-black-black-main.jpg",
      initialImg: "/ProductGridImage/10blkblkkit.jpg",
      colors: [ 
        "/ProductGridImage/10blkblkkit.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
        "/ProductPage/gravestone_backpack_lever_green.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
      ],
      sizes: [
        { size: "XS (24-31\")", price: "24,900.00" },
        { size: "S (26-33\")", price: "24,500.00" },
        { size: "M (30-36\")", price: "24,800.00" },
        { size: "L (34-41\")", price: "25,000.00" },
        { size: "XL (38-45\")", price: "25,300.00" },
        { size: "2XL (39-46\")", price: "25,500.00" },
      ],
    }, {
      id: 7,
      name: "Gymreapers Strength Kit - 10MM Gray",
      price: "Rs. 17,400.00",
      rating: 4.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-gray-back.jpg",
      initialImg: "/ProductGridImage/10mm-strength-kit-gray-main.jpg",
      colors: [ 
        "/ProductGridImage/10mm-strength-kit-gray-main.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
        "/ProductPage/gravestone_backpack_lever_green.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
      ],
      sizes: [
        { size: "XS (24-31\")", price: "24,900.00" },
        { size: "S (26-33\")", price: "24,500.00" },
        { size: "M (30-36\")", price: "24,800.00" },
        { size: "L (34-41\")", price: "25,000.00" },
        { size: "XL (38-45\")", price: "25,300.00" },
        { size: "2XL (39-46\")", price: "25,500.00" },
      ],
    },
    {
      id: 8,
      name: "Gymreapers Strength Kit - 10MM Red",
      price: "Rs.174,00.00",
      rating: 4.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-red-back.jpg",
      initialImg: "/ProductGridImage/10mm-strength-kit-red-main.jpg",
      colors: [ 
        "/ProductGridImage/10mm-strength-kit-red-main.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
        "/ProductPage/gravestone_backpack_lever_green.jpg",
        "/ProductPage/gravestone_backpack_lever2.jpg",
      ],
      sizes: [
        { size: "XS (24-31\")", price: "24,900.00" },
        { size: "S (26-33\")", price: "24,500.00" },
        { size: "M (30-36\")", price: "24,800.00" },
        { size: "L (34-41\")", price: "25,000.00" },
        { size: "XL (38-45\")", price: "25,300.00" },
        { size: "2XL (39-46\")", price: "25,500.00" },
      ],
    },
  ];

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  if (!product) {
    return <div className="text-center text-lg text-red-500">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.colors[selectedColor],
      selectedColor,
      selectedSize: product.sizes[selectedSize].size,
      quantity: 1
    });
    
    alert(`${product.name} has been added to your cart.`);
  };


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
            Price: <span className="text-gray-900">{product.price}</span>
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
          
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
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
          <button 
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductPage;





function ProductPageTwo() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productsTwoList.find(p => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  if (!product) {
    return <div className="text-center text-lg text-red-500">Product not found</div>;
  }
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.colors[selectedColor],
      selectedColor,
      selectedSize: product.sizes[selectedSize].size,
      quantity: 1
    });
    
    alert(`${product.name} has been added to your cart.`);
  };


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
            Price: <span className="text-gray-900">{product.price}</span>
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

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Sizes:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
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
          <button 
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              onClick={handleAddToCart}
              
          >
            Add to cart
          </button>
        </div>
      
      </div>
    </div>
  );
}

export {ProductPageTwo};
