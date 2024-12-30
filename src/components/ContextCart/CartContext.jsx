// import  { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// // eslint-disable-next-line react/prop-types
// export function CartProvider({ children }) {
//   const [items, setItems] = useState(() => {
//     if (typeof window !== 'undefined') {
//       const savedItems = localStorage.getItem('cart');
//       return savedItems ? JSON.parse(savedItems) : [];
//     }
//     return [];
//   });

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(items));
//   }, [items]);

//   const addToCart = (newItem) => {
//     setItems(currentItems => {
//       const existingItem = currentItems.find(
//         item => 
//           item.id === newItem.id && 
//           item.selectedColor === newItem.selectedColor && 
//           item.selectedSize === newItem.selectedSize
//       );

//       if (existingItem) {
//         return currentItems.map(item =>
//           item === existingItem
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...currentItems, newItem];
//     });
//   };

//   const removeFromCart = (id) => {
//     setItems(currentItems => currentItems.filter(item => item.id !== id));
//   };

//   const updateQuantity = (id, quantity) => {
//     setItems(currentItems =>
//       currentItems.map(item =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// // eslint-disable-next-line react-refresh/only-export-components
// export function useCart() {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// }




import  { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedItems = localStorage.getItem('cart');
      return savedItems ? JSON.parse(savedItems) : [];
    }
    return [];
  });
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (newItem) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(
        item => 
          item.id === newItem.id && 
          item.selectedColor === newItem.selectedColor && 
          item.selectedSize === newItem.selectedSize
      );

      if (existingItem) {
        return currentItems.map(item =>
          item === existingItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, newItem];
    });
  };

  const removeFromCart = (id) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyCoupon = (code) => {
    // Simple coupon logic - you can expand this as needed
    if (code === 'DISCOUNT10') {
      setCoupon({ code, discount: 0.1 }); // 10% discount
    } else if (code === 'DISCOUNT20') {
      setCoupon({ code, discount: 0.2 }); // 20% discount
    } else {
      setCoupon(null);
    }
  };

  const removeCoupon = () => {
    setCoupon(null);
  };

  const getSubtotal = () => {
    return items.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
  };

  const getTotal = () => {
    const subtotal = getSubtotal();
    const discount = coupon ? subtotal * coupon.discount : 0;
    return subtotal - discount;
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      coupon,
      applyCoupon,
      removeCoupon,
      getSubtotal,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
