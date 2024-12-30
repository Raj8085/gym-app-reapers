import { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsTwoList from './TwoCommonProducts';

const products = [
    {
      id: 1,
      name: "10MM Lever Belt - Black",
      price: "Rs.11,300.00",
      rating: 4.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
      initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
      colors: [ 
        "/ProductPage/gravestone_backpack_lever2.jpg",
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
      id: 2,
      name: "20MM Lever Belt - Black",
      price: "Rs.12,300.00",
      rating: 5.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
      initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
      colors: [ 
        "/ProductPage/gravestone_backpack_lever2.jpg",
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
      name: "30MM Lever Belt - Black",
      price: "Rs.12,300.00",
      rating: 5.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
      initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
      colors: [ 
        "/ProductPage/gravestone_backpack_lever2.jpg",
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
      name: "40MM Lever Belt - Black",
      price: "Rs.12,300.00",
      rating: 5.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
      initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
      colors: [ 
        "/ProductPage/gravestone_backpack_lever2.jpg",
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
      name: "50MM Lever Belt - Black",
      price: "Rs.12,300.00",
      rating: 5.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
      initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
      colors: [ 
        "/ProductPage/gravestone_backpack_lever2.jpg",
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
      name: "60MM Lever Belt - Black",
      price: "Rs.12,300.00",
      rating: 5.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
      initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
      colors: [ 
        "/ProductPage/gravestone_backpack_lever2.jpg",
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
      name: "70MM Lever Belt - Black",
      price: "Rs.12,300.00",
      rating: 5.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
      initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
      colors: [ 
        "/ProductPage/gravestone_backpack_lever2.jpg",
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
      name: "80MM Lever Belt - Black",
      price: "Rs.12,300.00",
      rating: 5.9,
      hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
      initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
      colors: [ 
        "/ProductPage/gravestone_backpack_lever2.jpg",
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
  const product = products.find(p => p.id === parseInt(id));
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
            Price: <span className="text-gray-900">{product.sizes[selectedSize].price}</span>
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

export default ProductPage;










// const productstwo = [
//     {
//       id: 1,
//       name: "200MM Lever Belt - Black",
//       price: "Rs.11,300.00",
//       rating: 4.9,
//       hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
//       initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
//       colors: [ 
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever_green.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//       ],
//       sizes: [
//         { size: "XS (24-31\")", price: "24,900.00" },
//         { size: "S (26-33\")", price: "24,500.00" },
//         { size: "M (30-36\")", price: "24,800.00" },
//         { size: "L (34-41\")", price: "25,000.00" },
//         { size: "XL (38-45\")", price: "25,300.00" },
//         { size: "2XL (39-46\")", price: "25,500.00" },
//       ],
//     },
//     {
//       id: 2,
//       name: "2600MM Lever Belt - Black",
//       price: "Rs.12,300.00",
//       rating: 5.9,
//       hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
//       initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
//       colors: [ 
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever_green.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//       ],
//       sizes: [
//         { size: "XS (24-31\")", price: "24,900.00" },
//         { size: "S (26-33\")", price: "24,500.00" },
//         { size: "M (30-36\")", price: "24,800.00" },
//         { size: "L (34-41\")", price: "25,000.00" },
//         { size: "XL (38-45\")", price: "25,300.00" },
//         { size: "2XL (39-46\")", price: "25,500.00" },
//       ],
//     },
//     {
//       id: 3,
//       name: "30MM Lever Belt - Black",
//       price: "Rs.12,300.00",
//       rating: 5.9,
//       hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
//       initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
//       colors: [ 
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever_green.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//       ],
//       sizes: [
//         { size: "XS (24-31\")", price: "24,900.00" },
//         { size: "S (26-33\")", price: "24,500.00" },
//         { size: "M (30-36\")", price: "24,800.00" },
//         { size: "L (34-41\")", price: "25,000.00" },
//         { size: "XL (38-45\")", price: "25,300.00" },
//         { size: "2XL (39-46\")", price: "25,500.00" },
//       ],
//     }, {
//       id: 4,
//       name: "40MM Lever Belt - Black",
//       price: "Rs.12,300.00",
//       rating: 5.9,
//       hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
//       initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
//       colors: [ 
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever_green.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//       ],
//       sizes: [
//         { size: "XS (24-31\")", price: "24,900.00" },
//         { size: "S (26-33\")", price: "24,500.00" },
//         { size: "M (30-36\")", price: "24,800.00" },
//         { size: "L (34-41\")", price: "25,000.00" },
//         { size: "XL (38-45\")", price: "25,300.00" },
//         { size: "2XL (39-46\")", price: "25,500.00" },
//       ],
//     }, {
//       id: 5,
//       name: "50MM Lever Belt - Black",
//       price: "Rs.12,300.00",
//       rating: 5.9,
//       hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
//       initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
//       colors: [ 
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever_green.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//       ],
//       sizes: [
//         { size: "XS (24-31\")", price: "24,900.00" },
//         { size: "S (26-33\")", price: "24,500.00" },
//         { size: "M (30-36\")", price: "24,800.00" },
//         { size: "L (34-41\")", price: "25,000.00" },
//         { size: "XL (38-45\")", price: "25,300.00" },
//         { size: "2XL (39-46\")", price: "25,500.00" },
//       ],
//     }, {
//       id: 6,
//       name: "60MM Lever Belt - Black",
//       price: "Rs.12,300.00",
//       rating: 5.9,
//       hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
//       initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
//       colors: [ 
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever_green.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//       ],
//       sizes: [
//         { size: "XS (24-31\")", price: "24,900.00" },
//         { size: "S (26-33\")", price: "24,500.00" },
//         { size: "M (30-36\")", price: "24,800.00" },
//         { size: "L (34-41\")", price: "25,000.00" },
//         { size: "XL (38-45\")", price: "25,300.00" },
//         { size: "2XL (39-46\")", price: "25,500.00" },
//       ],
//     }, {
//       id: 7,
//       name: "70MM Lever Belt - Black",
//       price: "Rs.12,300.00",
//       rating: 5.9,
//       hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
//       initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
//       colors: [ 
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever_green.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//       ],
//       sizes: [
//         { size: "XS (24-31\")", price: "24,900.00" },
//         { size: "S (26-33\")", price: "24,500.00" },
//         { size: "M (30-36\")", price: "24,800.00" },
//         { size: "L (34-41\")", price: "25,000.00" },
//         { size: "XL (38-45\")", price: "25,300.00" },
//         { size: "2XL (39-46\")", price: "25,500.00" },
//       ],
//     },
//     {
//       id: 8,
//       name: "80MM Lever Belt - Black",
//       price: "Rs.12,300.00",
//       rating: 5.9,
//       hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
//       initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
//       colors: [ 
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//         "/ProductPage/gravestone_backpack_lever_green.jpg",
//         "/ProductPage/gravestone_backpack_lever2.jpg",
//       ],
//       sizes: [
//         { size: "XS (24-31\")", price: "24,900.00" },
//         { size: "S (26-33\")", price: "24,500.00" },
//         { size: "M (30-36\")", price: "24,800.00" },
//         { size: "L (34-41\")", price: "25,000.00" },
//         { size: "XL (38-45\")", price: "25,300.00" },
//         { size: "2XL (39-46\")", price: "25,500.00" },
//       ],
//     },
   
   
//   ];


function ProductPageTwo() {
  const { id } = useParams();
  const product = productsTwoList.find(p => p.id === parseInt(id));
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
            Price: <span className="text-gray-900">{product.sizes[selectedSize].price}</span>
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

export {ProductPageTwo};
