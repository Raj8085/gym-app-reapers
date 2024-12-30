
// // import { useCart } from '../../../src/components/ContextCart/CartContext'
// // import { Button } from '@/components/ui/button'
// // import {
// //   Sheet,
// //   SheetContent,
// //   SheetHeader,
// //   SheetTitle,
// //   SheetTrigger,
// // } from "@/components/ui/sheet"
// // import { HiOutlineShoppingBag } from "react-icons/hi2"
// // import { Minus, Plus, X } from 'lucide-react'

// // export default function CartDropdown() {
// //   const { items, removeFromCart, updateQuantity } = useCart()
  
// //   const total = items.reduce((sum, item) => {
// //     const price = parseFloat(item.price.replace('$', ''))
// //     return sum + price * item.quantity
// //   }, 0)

// //   return (
// //     <Sheet>
// //       <SheetTrigger asChild>
// //         <button className="relative">
// //           <HiOutlineShoppingBag className="w-6 h-6" />
// //           {items.length > 0 && (
// //             <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
// //               {items.length}
// //             </span>
// //           )}
// //         </button>
// //       </SheetTrigger>
// //       <SheetContent className="w-full sm:max-w-lg">
// //         <SheetHeader>
// //           <SheetTitle>Shopping Cart ({items.length})</SheetTitle>
// //         </SheetHeader>
// //         <div className="mt-8 space-y-4">
// //           {items.map((item) => (
// //             <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-4 items-start">
// //               <img 
// //                 src={item.image} 
// //                 alt={item.name} 
// //                 className="w-20 h-20 object-cover rounded-md"
// //               />
// //               <div className="flex-1">
// //                 <h3 className="font-medium">{item.name}</h3>
// //                 <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
// //                 <p className="text-sm font-medium">{item.price}</p>
// //                 <div className="flex items-center gap-2 mt-2">
// //                   <Button
// //                     variant="outline"
// //                     size="icon"
// //                     onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
// //                   >
// //                     <Minus className="h-4 w-4" />
// //                   </Button>
// //                   <span className="w-8 text-center">{item.quantity}</span>
// //                   <Button
// //                     variant="outline"
// //                     size="icon"
// //                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
// //                   >
// //                     <Plus className="h-4 w-4" />
// //                   </Button>
// //                 </div>
// //               </div>
// //               <Button
// //                 variant="ghost"
// //                 size="icon"
// //                 onClick={() => removeFromCart(item.id)}
// //               >
// //                 <X className="h-4 w-4" />
// //               </Button>
// //             </div>
// //           ))}
// //           {items.length > 0 ? (
// //             <div className="border-t pt-4">
// //               <div className="flex justify-between text-lg font-medium">
// //                 <span>Total</span>
// //                 <span>${total.toFixed(2)}</span>
// //               </div>
// //               <Button className="w-full mt-4">
// //                 Checkout
// //               </Button>
// //             </div>
// //           ) : (
// //             <div className="text-center text-gray-500">
// //               Your cart is empty
// //             </div>
// //           )}
// //         </div>
// //       </SheetContent>
// //     </Sheet>
// //   )
// // }









// import { useState } from 'react';
// import { useCart } from '../../components/ContextCart/CartContext';
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';

// export default function CartDropdown() {
//   const { items, removeFromCart, updateQuantity } = useCart();
//   const [isOpen, setIsOpen] = useState(false);
  
//   const total = items.reduce((sum, item) => {
//     const price = parseFloat(item.price.replace('$', ''));
//     return sum + price * item.quantity;
//   }, 0);

//   return (
//     <div className="relative">
//       <button onClick={() => setIsOpen(!isOpen)} className="relative">
//         <HiOutlineShoppingBag className="w-6 h-6" />
//         {items.length > 0 && (
//           <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//             {items.length}
//           </span>
//         )}
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-96 bg-black rounded-md shadow-lg z-10">
//           <div className="p-4">
//             <h2 className="text-lg font-semibold mb-4">Shopping Cart ({items.length})</h2>
//             <div className="space-y-4">
//               {items.map((item) => (
//                 <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-4 items-start">
//                   <img 
//                     src={item.image} 
//                     alt={item.name} 
//                     className="w-20 h-20 object-cover rounded-md"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-medium">{item.name}</h3>
//                     <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
//                     <p className="text-sm font-medium">{item.price}</p>
//                     <div className="flex items-center gap-2 mt-2">
//                       <button
//                         className="p-1 bg-gray-200 rounded-md"
//                         onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
//                       >
//                         <FaMinus className="h-3 w-3" />
//                       </button>
//                       <span className="w-8 text-center">{item.quantity}</span>
//                       <button
//                         className="p-1 bg-gray-200 rounded-md"
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       >
//                         <FaPlus className="h-3 w-3" />
//                       </button>
//                     </div>
//                   </div>
//                   <button
//                     className="text-gray-500 hover:text-red-500"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     <FaTimes className="h-4 w-4" />
//                   </button>
//                 </div>
//               ))}
//               {items.length > 0 ? (
//                 <div className="border-t pt-4">
//                   <div className="flex justify-between text-lg font-medium">
//                     <span>Total</span>
//                     <span>${total.toFixed(2)}</span>
//                   </div>
//                   <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
//                     Checkout
//                   </button>
//                 </div>
//               ) : (
//                 <div className="text-center text-gray-500">
//                   Your cart is empty
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import  { useState } from 'react';
import { useCart } from '../../components/ContextCart/CartContext';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CartDropdown() {
  const { items, removeFromCart, updateQuantity, getTotal } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="relative">
        <HiOutlineShoppingBag className="w-6 h-6" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {items.length}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-md shadow-lg z-10">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Shopping Cart ({items.length})</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-4 items-start">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                    <p className="text-sm font-medium">{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="p-1 bg-gray-200 rounded-md"
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <FaMinus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        className="p-1 bg-gray-200 rounded-md"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <FaPlus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    className="text-gray-500 hover:text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTimes className="h-4 w-4" />
                  </button>
                </div>
              ))}
              {items.length > 0 ? (
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                  <Link 
                    to="/checkout" 
                    className="block w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  Your cart is empty
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

