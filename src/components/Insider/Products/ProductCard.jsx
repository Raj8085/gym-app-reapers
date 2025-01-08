  /* eslint-disable react/prop-types */
  // /* eslint-disable react/prop-types */
import { useCart } from "@/components/ContextCart/CartContext";
import { Star } from "lucide-react";
  // import { useNavigate } from "react-router-dom";

  export const ProductCard = ({
    id, 
    name,
    price,
    rating,
    colors,
    image,
    selectedColor,
    onColorSelect,
  }) => {
    const getColorClass = (color) => {
      const colorClasses = {
        black: "bg-black",
        red: "bg-red-600",
        blue: "bg-blue-600",
        green: "bg-green-700",
        gray: "bg-gray-500",
      };
      return colorClasses[color] || "";
    };

    // const navigate = useNavigate();

      const { addToCart } = useCart();
    
    


    const handleAddToCart = () => {
      addToCart({
        id: id,
        name: name,
        price: price,
        image: image,
        selectedColor,
        // selectedSize: sizes[selectedSize].size,
        quantity: 1
      });
      
      alert(`${name} has been added to your cart.`);
      // navigate(`/checkout-page?id=${id}`); 
    };
    
    return (
      <>
      <div className="group relative">
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <div className="absolute top-2 left-2 z-10 bg-emerald-500 text-white text-xs px-2 py-1 rounded">
            LIFETIME WARRANTY
          </div>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <h3 className="text-sm font-medium text-gray-900">{name}</h3>
            <div className="flex items-center">
              <span className="mr-1 text-sm">{rating}</span>
              <Star className="h-4 w-4 fill-primary" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-900">
            Rs. {price.toLocaleString()}
          </p>
          <div className="flex gap-1">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => onColorSelect?.(color)}
                className={`h-4 w-4 rounded-full border border-gray-300 ${getColorClass(
                  color
                )} ${
                  selectedColor === color ? "ring-2 ring-offset-1 ring-black" : ""
                }`}
              />
            ))}
            {colors.length > 5 && (
              <span className="text-xs text-gray-500 ml-1">
                +{colors.length - 5} More
              </span>
            )}
          </div>
        
        </div>
        <div className="mt-6 flex justify-center">
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 sm:w-auto sm:px-6"
      >
        Add to Cart
      </button>
    </div>
      </div>
      </>
    );
  };




// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Star } from 'lucide-react';

// export const ProductCard = ({ name, price, rating, colors, image }) => {
//   const [selectedColor, setSelectedColor] = useState(colors[0]);
//   const navigate = useNavigate();

//   const getColorClass = (color) => {
//     const colorClasses = {
//       black: 'bg-black',
//       red: 'bg-red-600',
//       blue: 'bg-blue-600',
//       green: 'bg-green-700',
//       gray: 'bg-gray-500'
//     };
//     return colorClasses[color] || '';
//   };

//   const handleAddToCart = () => {
//     navigate('/checkout-page');
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="w-full md:w-1/2">
//           <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 relative">
//             <div className="absolute top-2 left-2 z-10 bg-emerald-500 text-white text-xs px-2 py-1 rounded">
//               LIFETIME WARRANTY
//             </div>
//             <img
//               src={image}
//               alt={name}
//               className="h-full w-full object-cover object-center"
//             />
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 space-y-4">
//           <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
//           <div className="flex items-center">
//             <span className="mr-1 text-sm">{rating}</span>
//             <Star className="h-4 w-4 fill-yellow-400" />
//           </div>
//           <p className="text-xl font-medium text-gray-900">Rs. {price.toLocaleString()}</p>
//           <div className="space-y-2">
//             <p className="text-sm text-gray-600">Select Color:</p>
//             <div className="flex gap-2">
//               {colors.map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`h-8 w-8 rounded-full border ${getColorClass(color)} ${
//                     selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : ''
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           <button
//             onClick={handleAddToCart}
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

