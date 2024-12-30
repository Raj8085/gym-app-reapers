
// // import { Star } from 'lucide-react'
// // import { Badge } from "@/components/ui/badge"
// // import { Link } from 'react-router-dom'

import SectionOne, { SectionSecond } from "../SectionOneImage/SectionOne"
import ProductDetails from "./ProductDetails/ProductDetails"
import ProductDetailsTwo from "./ProductDetails/ProductTwoDetails"
import ProductFifthGrid from "./ProductFifth/ProductFifthGrid"
import ProductFourthGrid from "./ProductFourth/ProductFourthGrid"
import ProductThirdGrid from "./ProductThird/ProductThirdGrid"


// // const products = [
// //   {
// //     id: 1,
// //     name: "10MM Lever Belt - Black",
// //     price: "Rs.11,300.00",
// //     rating: 4.9,
// //     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
// //     initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
// //     colors: [ 
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever_green.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //     ],
// //     sizes: [
// //       { size: "XS (24-31\")", price: "24,900.00" },
// //       { size: "S (26-33\")", price: "24,500.00" },
// //       { size: "M (30-36\")", price: "24,800.00" },
// //       { size: "L (34-41\")", price: "25,000.00" },
// //       { size: "XL (38-45\")", price: "25,300.00" },
// //       { size: "2XL (39-46\")", price: "25,500.00" },
// //     ],
// //   },
// //   // ... (include all other products from the original array)
// // ]

// // export default function ProductGrid() {
// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //       {products.map((product) => (
// //         <Link href={`/product/${product.id}`} key={product.id} className="group">
// //           <div className="relative aspect-square mb-3">
// //             <img
// //               src={product.initialImg}
// //               alt={product.name}
// //               className="object-cover rounded-lg transition-opacity group-hover:opacity-0"
// //             />
        
// //             <img
// //               src={product.hoverImg}
// //               alt={product.name}
// //               className="object-cover rounded-lg opacity-0 transition-opacity group-hover:opacity-100"
// //             />
// //             {product.badge && (
// //               <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
// //                 {product.badge}
// //               </Badge>
// //             )}
// //           </div>
// //           <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
// //           <p className="text-muted-foreground mb-1">{product.price}</p>
// //           <div className="flex items-center">
// //             <div className="flex mr-1">
// //               {[...Array(5)].map((_, i) => (
// //                 <Star
// //                   key={i}
// //                   className={`w-4 h-4 ${
// //                     i < Math.floor(product.rating)
// //                       ? "text-yellow-400 fill-yellow-400"
// //                       : "text-gray-300"
// //                   }`}
// //                 />
// //               ))}
// //             </div>
// //             <span className="text-sm text-muted-foreground">{product.rating}</span>
// //           </div>
// //         </Link>
// //       ))}
// //     </div>
// //   )
// // }




// // import { Link } from 'react-router-dom';

// // const products = [
// //   {
// //     id: 1,
// //     name: "10MM Lever Belt - Black",
// //     price: "Rs.11,300.00",
// //     rating: 4.9,
// //     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
// //     initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
// //     colors: [ 
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever_green.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //     ],
// //     sizes: [
// //       { size: "XS (24-31\")", price: "24,900.00" },
// //       { size: "S (26-33\")", price: "24,500.00" },
// //       { size: "M (30-36\")", price: "24,800.00" },
// //       { size: "L (34-41\")", price: "25,000.00" },
// //       { size: "XL (38-45\")", price: "25,300.00" },
// //       { size: "2XL (39-46\")", price: "25,500.00" },
// //     ],
// //   },
// //   {
// //     id: 2,
// //     name: "20MM Lever Belt - Black",
// //     price: "Rs.12,300.00",
// //     rating: 5.9,
// //     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
// //     initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
// //     colors: [ 
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever_green.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //     ],
// //     sizes: [
// //       { size: "XS (24-31\")", price: "24,900.00" },
// //       { size: "S (26-33\")", price: "24,500.00" },
// //       { size: "M (30-36\")", price: "24,800.00" },
// //       { size: "L (34-41\")", price: "25,000.00" },
// //       { size: "XL (38-45\")", price: "25,300.00" },
// //       { size: "2XL (39-46\")", price: "25,500.00" },
// //     ],
// //   },
// //   {
// //     id: 3,
// //     name: "30MM Lever Belt - Black",
// //     price: "Rs.12,300.00",
// //     rating: 5.9,
// //     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
// //     initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
// //     colors: [ 
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever_green.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //     ],
// //     sizes: [
// //       { size: "XS (24-31\")", price: "24,900.00" },
// //       { size: "S (26-33\")", price: "24,500.00" },
// //       { size: "M (30-36\")", price: "24,800.00" },
// //       { size: "L (34-41\")", price: "25,000.00" },
// //       { size: "XL (38-45\")", price: "25,300.00" },
// //       { size: "2XL (39-46\")", price: "25,500.00" },
// //     ],
// //   }, {
// //     id: 4,
// //     name: "40MM Lever Belt - Black",
// //     price: "Rs.12,300.00",
// //     rating: 5.9,
// //     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
// //     initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
// //     colors: [ 
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever_green.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //     ],
// //     sizes: [
// //       { size: "XS (24-31\")", price: "24,900.00" },
// //       { size: "S (26-33\")", price: "24,500.00" },
// //       { size: "M (30-36\")", price: "24,800.00" },
// //       { size: "L (34-41\")", price: "25,000.00" },
// //       { size: "XL (38-45\")", price: "25,300.00" },
// //       { size: "2XL (39-46\")", price: "25,500.00" },
// //     ],
// //   }, {
// //     id: 5,
// //     name: "50MM Lever Belt - Black",
// //     price: "Rs.12,300.00",
// //     rating: 5.9,
// //     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
// //     initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
// //     colors: [ 
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever_green.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //     ],
// //     sizes: [
// //       { size: "XS (24-31\")", price: "24,900.00" },
// //       { size: "S (26-33\")", price: "24,500.00" },
// //       { size: "M (30-36\")", price: "24,800.00" },
// //       { size: "L (34-41\")", price: "25,000.00" },
// //       { size: "XL (38-45\")", price: "25,300.00" },
// //       { size: "2XL (39-46\")", price: "25,500.00" },
// //     ],
// //   }, {
// //     id: 6,
// //     name: "60MM Lever Belt - Black",
// //     price: "Rs.12,300.00",
// //     rating: 5.9,
// //     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
// //     initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
// //     colors: [ 
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever_green.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //     ],
// //     sizes: [
// //       { size: "XS (24-31\")", price: "24,900.00" },
// //       { size: "S (26-33\")", price: "24,500.00" },
// //       { size: "M (30-36\")", price: "24,800.00" },
// //       { size: "L (34-41\")", price: "25,000.00" },
// //       { size: "XL (38-45\")", price: "25,300.00" },
// //       { size: "2XL (39-46\")", price: "25,500.00" },
// //     ],
// //   }, {
// //     id: 7,
// //     name: "70MM Lever Belt - Black",
// //     price: "Rs.12,300.00",
// //     rating: 5.9,
// //     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
// //     initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
// //     colors: [ 
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever_green.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //     ],
// //     sizes: [
// //       { size: "XS (24-31\")", price: "24,900.00" },
// //       { size: "S (26-33\")", price: "24,500.00" },
// //       { size: "M (30-36\")", price: "24,800.00" },
// //       { size: "L (34-41\")", price: "25,000.00" },
// //       { size: "XL (38-45\")", price: "25,300.00" },
// //       { size: "2XL (39-46\")", price: "25,500.00" },
// //     ],
// //   },
// //   {
// //     id: 8,
// //     name: "80MM Lever Belt - Black",
// //     price: "Rs.12,300.00",
// //     rating: 5.9,
// //     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
// //     initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
// //     colors: [ 
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever_green.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //     ],
// //     sizes: [
// //       { size: "XS (24-31\")", price: "24,900.00" },
// //       { size: "S (26-33\")", price: "24,500.00" },
// //       { size: "M (30-36\")", price: "24,800.00" },
// //       { size: "L (34-41\")", price: "25,000.00" },
// //       { size: "XL (38-45\")", price: "25,300.00" },
// //       { size: "2XL (39-46\")", price: "25,500.00" },
// //     ],
// //   },
// //   {
// //     id: 9,
// //     name: "90MM Lever Belt - Black",
// //     price: "Rs.12,300.00",
// //     rating: 5.9,
// //     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
// //     initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
// //     colors: [ 
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever_green.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //     ],
// //     sizes: [
// //       { size: "XS (24-31\")", price: "24,900.00" },
// //       { size: "S (26-33\")", price: "24,500.00" },
// //       { size: "M (30-36\")", price: "24,800.00" },
// //       { size: "L (34-41\")", price: "25,000.00" },
// //       { size: "XL (38-45\")", price: "25,300.00" },
// //       { size: "2XL (39-46\")", price: "25,500.00" },
// //     ],
// //   },
// //   {
// //     id: 10,
// //     name: "100MM Lever Belt - Black",
// //     price: "Rs.12,300.00",
// //     rating: 5.9,
// //     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
// //     initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
// //     colors: [ 
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //       "/ProductPage/gravestone_backpack_lever_green.jpg",
// //       "/ProductPage/gravestone_backpack_lever2.jpg",
// //     ],
// //     sizes: [
// //       { size: "XS (24-31\")", price: "24,900.00" },
// //       { size: "S (26-33\")", price: "24,500.00" },
// //       { size: "M (30-36\")", price: "24,800.00" },
// //       { size: "L (34-41\")", price: "25,000.00" },
// //       { size: "XL (38-45\")", price: "25,300.00" },
// //       { size: "2XL (39-46\")", price: "25,500.00" },
// //     ],
// //   },
 
 
// // ];

// // function ProductGrid() {
// //   return (
// //     <div className="product-grid">
// //       {products.map((product) => (
// //         <Link to={`/product/${product.id}`} key={product.id}>
// //           <div className="product-card">
// //             <img src={product.initialImg} alt={product.name} />
// //             <h3>{product.name}</h3>
// //             <p>{product.price}</p>
// //             <p>Rating: {product.rating}</p>
// //           </div>
// //         </Link>
// //       ))}
// //     </div>
// //   );
// // }

// // export default ProductGrid;


// import { Link } from 'react-router-dom';

// const products = [
//   {
//     id: 1,
//     name: "10MM Lever Belt - Black",
//     price: "Rs.11,300.00",
//     rating: 4.9,
//     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
//     initialImg: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
//     colors: [ 
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever_green.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//     ],
//     sizes: [
//       { size: "XS (24-31\")", price: "24,900.00" },
//       { size: "S (26-33\")", price: "24,500.00" },
//       { size: "M (30-36\")", price: "24,800.00" },
//       { size: "L (34-41\")", price: "25,000.00" },
//       { size: "XL (38-45\")", price: "25,300.00" },
//       { size: "2XL (39-46\")", price: "25,500.00" },
//     ],
//   },
//   {
//     id: 2,
//     name: "20MM Lever Belt - Black",
//     price: "Rs.12,300.00",
//     rating: 5.9,
//     initialImg:"/ProductGridImage/10mm-lever-belt-black-black-main.jpg",
//     hoverImg:  "/ProductGridImage/10mm-lever-belt-black-black-back.jpg",
   

//     colors: [ 
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever_green.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//     ],
//     sizes: [
//       { size: "XS (24-31\")", price: "24,900.00" },
//       { size: "S (26-33\")", price: "24,500.00" },
//       { size: "M (30-36\")", price: "24,800.00" },
//       { size: "L (34-41\")", price: "25,000.00" },
//       { size: "XL (38-45\")", price: "25,300.00" },
//       { size: "2XL (39-46\")", price: "25,500.00" },
//     ],
//   },
//   {
//     id: 3,
//     name: "30MM Lever Belt - Black",
//     price: "Rs.12,300.00",
//     rating: 5.9,
//     hoverImg: "/ProductGridImage/10mm-lever-belt-gray-back.jpg",
//     initialImg: "/ProductGridImage/10mm-lever-belt-gray-main_2.jpg",
//     colors: [ 
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever_green.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//     ],
//     sizes: [
//       { size: "XS (24-31\")", price: "24,900.00" },
//       { size: "S (26-33\")", price: "24,500.00" },
//       { size: "M (30-36\")", price: "24,800.00" },
//       { size: "L (34-41\")", price: "25,000.00" },
//       { size: "XL (38-45\")", price: "25,300.00" },
//       { size: "2XL (39-46\")", price: "25,500.00" },
//     ],
//   }, {
//     id: 4,
//     name: "40MM Lever Belt - Black",
//     price: "Rs.12,300.00",
//     rating: 5.9,
//     hoverImg: "/ProductGridImage/10mm-lever-belt-red-back.jpg",
//     initialImg: "/ProductGridImage/10mm-lever-belt-red-main_2.jpg",
//     colors: [ 
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever_green.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//     ],
//     sizes: [
//       { size: "XS (24-31\")", price: "24,900.00" },
//       { size: "S (26-33\")", price: "24,500.00" },
//       { size: "M (30-36\")", price: "24,800.00" },
//       { size: "L (34-41\")", price: "25,000.00" },
//       { size: "XL (38-45\")", price: "25,300.00" },
//       { size: "2XL (39-46\")", price: "25,500.00" },
//     ],
//   }, {
//     id: 5,
//     name: "50MM Lever Belt - Black",
//     price: "Rs.12,300.00",
//     rating: 5.9,
//     hoverImg: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
//     initialImg: "/ProductGridImage/10mm-strength-kit-black-main.jpg",
//     colors: [ 
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever_green.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//     ],
//     sizes: [
//       { size: "XS (24-31\")", price: "24,900.00" },
//       { size: "S (26-33\")", price: "24,500.00" },
//       { size: "M (30-36\")", price: "24,800.00" },
//       { size: "L (34-41\")", price: "25,000.00" },
//       { size: "XL (38-45\")", price: "25,300.00" },
//       { size: "2XL (39-46\")", price: "25,500.00" },
//     ],
//   }, {
//     id: 6,
//     name: "60MM Lever Belt - Black",
//     price: "Rs.12,300.00",
//     rating: 5.9,
//     hoverImg:"/ProductGridImage/10mm-lever-belt-black-black-main.jpg",
//     initialImg: "/ProductGridImage/10blkblkkit.jpg",
//     colors: [ 
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever_green.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//     ],
//     sizes: [
//       { size: "XS (24-31\")", price: "24,900.00" },
//       { size: "S (26-33\")", price: "24,500.00" },
//       { size: "M (30-36\")", price: "24,800.00" },
//       { size: "L (34-41\")", price: "25,000.00" },
//       { size: "XL (38-45\")", price: "25,300.00" },
//       { size: "2XL (39-46\")", price: "25,500.00" },
//     ],
//   }, {
//     id: 7,
//     name: "70MM Lever Belt - Black",
//     price: "Rs.12,300.00",
//     rating: 5.9,
//     hoverImg: "/ProductGridImage/10mm-lever-belt-gray-back.jpg",
//     initialImg: "/ProductGridImage/10mm-strength-kit-gray-main.jpg",
//     colors: [ 
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever_green.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//     ],
//     sizes: [
//       { size: "XS (24-31\")", price: "24,900.00" },
//       { size: "S (26-33\")", price: "24,500.00" },
//       { size: "M (30-36\")", price: "24,800.00" },
//       { size: "L (34-41\")", price: "25,000.00" },
//       { size: "XL (38-45\")", price: "25,300.00" },
//       { size: "2XL (39-46\")", price: "25,500.00" },
//     ],
//   },
//   {
//     id: 8,
//     name: "80MM Lever Belt - Black",
//     price: "Rs.12,300.00",
//     rating: 5.9,
//     hoverImg: "/ProductGridImage/10mm-lever-belt-red-back.jpg",
//     initialImg: "/ProductGridImage/10mm-strength-kit-red-main.jpg",
//     colors: [ 
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//       "/ProductPage/gravestone_backpack_lever_green.jpg",
//       "/ProductPage/gravestone_backpack_lever2.jpg",
//     ],
//     sizes: [
//       { size: "XS (24-31\")", price: "24,900.00" },
//       { size: "S (26-33\")", price: "24,500.00" },
//       { size: "M (30-36\")", price: "24,800.00" },
//       { size: "L (34-41\")", price: "25,000.00" },
//       { size: "XL (38-45\")", price: "25,300.00" },
//       { size: "2XL (39-46\")", price: "25,500.00" },
//     ],
//   },
 
 
// ];

// function ProductGrid() {
//     return (
//         <>
        
//         {/* <HeroSection/> */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-6 ">
          
//         {products.map((product) => (
          
//           <Link
//             to={`/product/${product.id}`}
//             key={product.id}
//             className="group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300"
//           >
           

//             {/* Image Section */}
//             <div className="relative w-full h-36 md:h-72 bg-gray-100">
//               <img
//                 src={product.initialImg}
//                 alt={product.name}
//                 className="w-full h-full object-cover transition duration-300 group-hover:opacity-0"
//               />
//               <img
//                 src={product.hoverImg}
//                 alt={product.name}
//                 className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-300 group-hover:opacity-100"
//               />
//             </div>
          

  
//             {/* Product Info */}
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600">
//                 {product.name}
//               </h3>
//               <p className="text-gray-500 text-sm">{product.price}</p>
//               <div className="flex items-center mt-2">
//                 <span className="text-yellow-500 text-sm mr-1">⭐</span>
//                 <span className="text-gray-600 text-sm">{product.rating}</span>
//               </div>
  
//               {/* Color Options */}
//               <div className="flex space-x-2 mt-3">
                
//                 {product.colors.map((color, index) => (
//                   <div
//                     key={index}
//                     className="w-4 h-4 rounded-full border border-red-600"
//                     style={{ backgroundColor: color }}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//       </>
//     );
//   }
// export default ProductGrid;



const ProductGrid = () => {
  return (
    <div>
      <ProductDetails/>
      <SectionOne/>
      <ProductDetailsTwo/>
      <SectionOne/>
      <ProductThirdGrid/>
      <SectionSecond/>
      <ProductFourthGrid/>
      <ProductFifthGrid/>
    </div>
  )
}
export default ProductGrid