// import  { useState } from 'react';

// export const CheckoutPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     address: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically process the payment
//     console.log('Processing payment:', formData);
//     // After successful payment, you could redirect to a confirmation page
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6">Checkout</h1>
//       <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
//         <div className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             />
//           </div>
//           <div>
//             <label htmlFor="address" className="block text-sm font-medium text-gray-700">Shipping Address</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             />
//           </div>
//           <div>
//             <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
//             <input
//               type="text"
//               id="cardNumber"
//               name="cardNumber"
//               value={formData.cardNumber}
//               onChange={handleInputChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             />
//           </div>
//           <div className="flex gap-4">
//             <div className="w-1/2">
//               <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
//               <input
//                 type="text"
//                 id="expiryDate"
//                 name="expiryDate"
//                 value={formData.expiryDate}
//                 onChange={handleInputChange}
//                 placeholder="MM/YY"
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="w-1/2">
//               <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
//               <input
//                 type="text"
//                 id="cvv"
//                 name="cvv"
//                 value={formData.cvv}
//                 onChange={handleInputChange}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//               />
//             </div>
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//         >
//           Complete Purchase
//         </button>
//       </form>
//     </div>
//   );
// };




import  { useState, useEffect } from 'react';
import { Minus, Plus, Trash2, Star } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const initialProducts = [
    {
      id: "1",
      name: "10MM Lever Belt - Red",
      price: 11300,
      rating: 4.5,
      colors: ["red", "black", "blue", "green"],
      image: "/ProductGridImage/10mm-lever-belt-red-main_2.jpg",
    },
  
    {
      id: "2",
      name: "13mm Lever Belt",
      price: "12,200.00",
      rating: 5.0,
      colors: ["black"],
      image: "/LeverBelt/13mm-lever-belt-black-main.jpg",
    },
   
    {
      id: "3",
      name: "10MM Lever Belt - Black",
      price: "11,300.00",
      rating: 4.5,
      colors: ["black", "red", "blue", "green"],
      image: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
    },
    {
      id: "4",
      name: "10MM Lever Belt - Gray",
      price: 11300,
      rating: 4.9,
      colors: ["gray", "black", "red", "blue"],
      image: "/ProductGridImage/10mm-lever-belt-gray-main_2.jpg",
    },
    {
      id: "5",
      name: "10MM Lever Belt - Military Green",
      price: 11300,
      rating: 4.9,
      colors: ["green", "black", "red", "blue"],
      image: "/LeverBelt/10mm-belt-military-green-back.jpg",
    },
    {
      id: "6",
      name: "10MM Lever Belt - Black/Black",
      price: "11300.00",
      rating: 4.9,
      colors: ["black", "red", "blue", "green", "gray"],
      image: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
    },
    {
      id: "7",
      name: "10MM Lever Belt - Midnight Camo",
      price: 11300,
      rating: 4.5,
      colors: ["red", "black", "blue", "green"],
      image: "/LeverBelt/midnight-Camo-Lever-Belt-main.jpg",
    },  
    {
      id: "8",
      name: "10MM Lever Belt - Navy",
      price: 11300,
      rating: 4.5,
      colors: ["red", "black", "blue", "green"],
      image: "/LeverBelt/10mm-lever-belt-navy-main.jpg",
    },  
    {
      id: "8",
      name: "10MM Lever Belt - White Camo",
      price: 11300.00,
      rating: 4.5,
      colors: ["red", "black", "blue", "green"],
      image: "/LeverBelt/10mm-belt-white-camo-main.jpg",
    },  
    {
      id: "9",
      name: "10MM Lever Belt - Woodland Camo",
      price: 11300.00,
      rating: 4.5,
      colors: ["red", "black", "blue", "green"],
      image: "/LeverBelt/10mm-woodland-camo-main.jpg",
    },  
    {
      id: "10",
      name: "Gymreapers Lever Belt Attachment",
      price: "2700.00",
      rating: 4.5,
      colors: ["red", "black", "blue", "green"],
      image: "/LeverBelt/lever-attachment-full-gray-background.png",
    },  
    {
      id: "11",
      name: "Gravestone™ Backpack & 10mm Lever Belt Combo - OD Green",
      price: "24,400.00",
      rating: 4.5,
      colors: ["red", "black", "blue", "green"],
      image: "/LeverBelt/gravestone_backpack_lever_green.jpg",
    },  
    {
      id: "12",
      name: "Gravestone™ Backpack & 10mm Lever Belt Combo - Desert Sand/Black",
      price: "24,400.00",
      rating: 4.5,
      colors: ["red", "black", "blue", "green"],
      image: "/LeverBelt/gravestone_backpack_lever_sand.jpg",
    },  {
      id: "13",
      name: "Gravestone™ Backpack & 10mm Lever Belt Combo - Gunmetal/Gray",
      price: "24,400.00",
      rating: 4.5,
      colors: ["red", "black", "blue", "green"],
      image: "/LeverBelt/gravestone_backpack_lever_gunmetal.jpg",
    },  {
      id: "14",
      name: "Gravestone™ Duffle & 10mm Lever Belt Combo - Gunmetal/Gray",
      price: "26,100.00",
      rating: 4.5,
      colors: ["red", "black", "blue", "green"],
      image: "/LeverBelt/gravestone_duffle_lever_gunmetal.jpg",
    }  
  ]
export const CheckoutPage = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('id');
    const selectedProduct = initialProducts.find(product => product.id === productId);
    if (selectedProduct) {
      setCartItems([{ ...selectedProduct, quantity: 1 }]);
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQuantityChange = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/,/g, '')) : item.price;
      return total + price * item.quantity;
    }, 0);
  };

  const formatPrice = (price) => {
    return typeof price === 'string' ? price : price.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Processing payment:', { ...formData, items: cartItems, total: calculateTotal() });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center justify-between border-b py-4">
                <div className="flex items-start md:items-center mb-4 md:mb-0">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-4" />
                  <div>
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-gray-600 mt-1">Rs. {formatPrice(item.price)}</p>
                    <div className="flex items-center mt-1">
                      <span className="mr-1 text-sm">{item.rating}</span>
                      <Star className="h-4 w-4 fill-yellow-400" />
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-sm mr-2">Colors:</span>
                      {item.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 rounded-full mr-1`}
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="p-1 rounded-full hover:bg-gray-200"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-2 w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="p-1 rounded-full hover:bg-gray-200"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="ml-4 p-1 rounded-full hover:bg-gray-200 text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 text-right">
              <p className="text-xl font-semibold">Total: Rs. {formatPrice(calculateTotal())}</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Shipping Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Pay Rs. {formatPrice(calculateTotal())}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

