// // import { Star } from 'lucide-react'
// // import { Button } from "@/components/ui/button"
// // import { Badge } from "@/components/ui/badge"
// // // import Image from "next/image"

// import ProductGrid from "./components/Product/ProductGrid"

// // const colors = [
// //   { name: "Black", class: "bg-black" },
// //   { name: "Black/Black", class: "bg-black border-gray-600" },
// //   { name: "Silver", class: "bg-gray-300" },
// //   { name: "Navy", class: "bg-navy-600" },
// //   { name: "Olive", class: "bg-olive-600" },
// //   { name: "Red", class: "bg-red-600" },
// //   { name: "Chrome", class: "bg-gray-200" },
// //   { name: "Green", class: "bg-green-700" },
// //   { name: "Matte Black", class: "bg-gray-900" },
// // ]

// // const sizes = [
// //   { name: "XS", measurement: '24-31"' },
// //   { name: "S", measurement: '26-33"' },
// //   { name: "M", measurement: '30-36"' },
// //   { name: "L", measurement: '34-41"' },
// //   { name: "XL", measurement: '38-45"' },
// //   { name: "2XL", measurement: '39-46"' },
// // ]

// // export default function ProductPage() {
// //   return (
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //         {/* Product Image */}
// //         <div className="relative aspect-square">
// //           {/* <Image
// //             src="/placeholder.svg"
// //             alt="10MM Lever Belt - Black/Black"
// //             fill
// //             className="object-cover rounded-lg"
// //             priority
// //           /> */}
// //           <img src='/ProductPage/gravestone_backpack_lever_green.jpg' alt=''/>
// //         </div>

// //         {/* Product Details */}
// //         <div className="space-y-6">
// //           {/* Warranty Badge */}
// //           <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">
// //             LIFETIME WARRANTY
// //           </Badge>

// //           {/* Title */}
// //           <h1 className="text-3xl font-bold">10MM LEVER BELT - BLACK/BLACK</h1>

// //           {/* Price */}
// //           <p className="text-2xl font-semibold">Rs. 11,300.00</p>

// //           {/* Rating */}
// //           <div className="flex items-center gap-2">
// //             <div className="flex">
// //               {[...Array(5)].map((_, i) => (
// //                 <Star
// //                   key={i}
// //                   className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
// //                 />
// //               ))}
// //             </div>
// //             <span className="text-sm text-gray-600">
// //               4.9 Stars (1,572 Reviews)
// //             </span>
// //           </div>

// //           {/* Color Selection */}
// //           <div className="space-y-3">
// //             <p className="font-medium">Color</p>
// //             <div className="grid grid-cols-5 gap-2">
// //               {colors.map((color) => (
// //                 <button
// //                   key={color.name}
// //                   className={`w-12 h-12 rounded-lg border-2 ${color.class} ${
// //                     color.name === "Black/Black"
// //                       ? "ring-2 ring-offset-2 ring-black"
// //                       : ""
// //                   }`}
// //                   title={color.name}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           {/* Size Selection */}
// //           <div className="space-y-3">
// //             <div className="flex justify-between items-center">
// //               <p className="font-medium">Size:</p>
// //               <button className="text-sm underline">Size chart</button>
// //             </div>
// //             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
// //               {sizes.map((size) => (
// //                 <button
// //                   key={size.name}
// //                   className={`px-4 py-3 border rounded-lg text-sm ${
// //                     size.name === "XS"
// //                       ? "border-black bg-black text-white"
// //                       : "hover:border-black"
// //                   }`}
// //                 >
// //                   {size.name} ({size.measurement})
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Add to Cart Button */}
// //           <Button className="w-full py-6 text-lg">Add to cart</Button>

// //           {/* Shipping Information */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-yellow-50 p-6 rounded-lg">
// //             <div className="flex items-start gap-3">
// //               <div className="w-6 h-6 mt-1">⏰</div>
// //               <div>
// //                 <p className="font-semibold mb-1">SHIPPING DELAY</p>
// //                 <p className="text-sm">
// //                   Lever Belts may take 5 to 10 business days to ship.
// //                 </p>
// //               </div>
// //             </div>
// //             <div className="flex items-start gap-3">
// //               <div className="w-6 h-6 mt-1">📦</div>
// //               <div>
// //                 <p className="font-semibold mb-1">FREE SHIPPING</p>
// //                 <p className="text-sm">
// //                   Free shipping in the U.S. when you spend $75+
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )

// // }





// import { useState } from 'react'
// import { Star } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"

// const productVariants = [
//   { name: "Black", image: "/ProductPage/gravestone_backpack_lever2.jpg" },
//   { name: "Silver", image: "/public/ProductGridImage/10blkblkkit.jpg" },
//   { name: "Navy", image: "/ProductPage/gravestone_backpack_lever2.jpg" },
//   { name: "Olive", image: "/ProductPage/gravestone_backpack_lever2.jpg" },
//   { name: "Red", image: "/ProductPage/gravestone_backpack_lever2.jpg" },
//   { name: "Green", image: "/ProductPage/gravestone_backpack_lever2.jpg" },
// ]

// const sizes = [
//   { name: "XS", measurement: '24-31"' },
//   { name: "S", measurement: '26-33"' },
//   { name: "M", measurement: '30-36"' },
//   { name: "L", measurement: '34-41"' },
//   { name: "XL", measurement: '38-45"' },
//   { name: "2XL", measurement: '39-46"' },
// ]

// export default function ProductPage() {
//   const [selectedVariant, setSelectedVariant] = useState(productVariants[0])
//   const [selectedSize, setSelectedSize] = useState(sizes[0].name)
//   const [quantity, setQuantity] = useState(1)
//   const [showSizeChart, setShowSizeChart] = useState(false)

//   const handleAddToCart = () => {
//     console.log(`Added to cart: ${quantity} ${selectedVariant.name} ${selectedSize} belt(s)`)
//     // Here you would typically dispatch an action to update your cart state or send a request to your backend
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div className="relative aspect-square">
//           <img
//             src={selectedVariant.image}
//             alt={`10MM Lever Belt - ${selectedVariant.name}`}
          
//             className="object-cover rounded-lg"
          
//           />
//         </div>

//         {/* Product Details */}
//         <div className="space-y-6">
//           {/* Warranty Badge */}
//           <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">
//             LIFETIME WARRANTY
//           </Badge>

//           {/* Title */}
//           <h1 className="text-3xl font-bold">10MM LEVER BELT - {selectedVariant.name.toUpperCase()}</h1>

//           {/* Price */}
//           <p className="text-2xl font-semibold">Rs. 11,300.00</p>

//           {/* Rating */}
//           <div className="flex items-center gap-2">
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
//                 />
//               ))}
//             </div>
//             <span className="text-sm text-gray-600">
//               4.9 Stars (1,572 Reviews)
//             </span>
//           </div>

//           {/* Variant Selection */}
//           <div className="space-y-3">
//             <p className="font-medium">Variant: {selectedVariant.name}</p>
//             <div className="grid grid-cols-3 gap-2">
//               {productVariants.map((variant) => (
//                 <button
//                   key={variant.name}
//                   className={`relative w-full aspect-square rounded-lg overflow-hidden ${
//                     variant.name === selectedVariant.name
//                       ? "ring-2 ring-offset-2 ring-black"
//                       : ""
//                   }`}
//                   onClick={() => setSelectedVariant(variant)}
//                 >
//                   <img
//                     src={variant.image}
//                     alt={variant.name}
//                     className="object-cover"
//                   />
//                   <span className="sr-only">{variant.name}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Size Selection */}
//           <div className="space-y-3">
//             <div className="flex justify-between items-center">
//               <p className="font-medium">Size: {selectedSize}</p>
//               <button 
//                 className="text-sm underline"
//                 onClick={() => setShowSizeChart(!showSizeChart)}
//               >
//                 {showSizeChart ? 'Hide size chart' : 'Show size chart'}
//               </button>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//               {sizes.map((size) => (
//                 <button
//                   key={size.name}
//                   className={`px-4 py-3 border rounded-lg text-sm ${
//                     size.name === selectedSize
//                       ? "border-black bg-black text-white"
//                       : "hover:border-black"
//                   }`}
//                   onClick={() => setSelectedSize(size.name)}
//                 >
//                   {size.name} ({size.measurement})
//                 </button>
//               ))}
//             </div>
//             {showSizeChart && (
//               <div className="mt-4 p-4 border rounded-lg">
//                 <h3 className="font-semibold mb-2">Size Chart</h3>
//                 <ul>
//                   {sizes.map((size) => (
//                     <li key={size.name}>{size.name}: {size.measurement}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Quantity Selection */}
//           <div className="space-y-3">
//             <p className="font-medium">Quantity:</p>
//             <div className="flex items-center space-x-3">
//               <button 
//                 className="px-3 py-1 border rounded-md"
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//               >
//                 -
//               </button>
//               <span>{quantity}</span>
//               <button 
//                 className="px-3 py-1 border rounded-md"
//                 onClick={() => setQuantity(quantity + 1)}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Add to Cart Button */}
//           <Button className="w-full py-6 text-lg" onClick={handleAddToCart}>
//             Add to cart
//           </Button>

//           {/* Shipping Information */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-yellow-50 p-6 rounded-lg">
//             <div className="flex items-start gap-3">
//               <div className="w-6 h-6 mt-1">⏰</div>
//               <div>
//                 <p className="font-semibold mb-1">SHIPPING DELAY</p>
//                 <p className="text-sm">
//                   Lever Belts may take 5 to 10 business days to ship.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <div className="w-6 h-6 mt-1">📦</div>
//               <div>
//                 <p className="font-semibold mb-1">FREE SHIPPING</p>
//                 <p className="text-sm">
//                   Free shipping in the U.S. when you spend $75+
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProductGrid from './components/Product/ProductOne/ProductGrid';
// import ProductPage from './components/Product/ProductOne/Page';
// import Navbar from './components/Navbar/Navbar';
// import HeroSection from './components/HeroSection/HeroSection';

// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <HeroSection/>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<ProductGrid />} />
//           <Route path="/product/:id" element={<ProductPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// export default App;


// import HeroSection from './components/HeroSection/HeroSection'
// import Navbar from './components/Navbar/Navbar'
// import ProductRouter from './components/Product/ProductOne/ProductRouting'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <HeroSection/>
//       <ProductRouter/>
//     </div>
//   )
//      }
// export default App




import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProductGrid from './components/Product/ProductOne/ProductGrid';
import ProductPage, { ProductPageTwo } from './components/Product/ProductOne/Page';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
// import ProductThirdGrid from './components/Product/ProductOne/ProductThird/ProductThirdGrid';
import ProductThirdDetails from './components/Product/ProductOne/ProductThird/ProductDetailsThird';
import ProductFourthDetails from './components/Product/ProductOne/ProductFourth/ProductFourth';
import Footer from '../src/components/Footer/Footer';
import ProductFifthDetails from './components/Product/ProductOne/ProductFifth/ProductFifth';
import { CartProvider } from './components/ContextCart/CartContext';
import Checkout from './components/ContextCart/Checkout';
import { FilterProvider } from './components/ContextCart/FilterContext';

function AppContent() {
  const location = useLocation();

  // Render Navbar and HeroSection only on the home page
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && (
        <>
          {/* <Navbar /> */}
          <HeroSection />
         
        </>
      )}
      <div className="App">
   
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductPageTwo/>}/>
          <Route path="/productsthree/:id" element={<ProductThirdDetails/>}/>
          <Route path='/productsFourth/:id' element={<ProductFourthDetails/>}/>
          <Route path='/productsFifth/:id' element={<ProductFifthDetails/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
      <Navbar />
      <FilterProvider>
      <AppContent />
      </FilterProvider>
      <Footer/>
      </CartProvider>
    </Router>
  );
}
export default App;