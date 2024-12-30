// // // import { useState, useEffect } from "react";
// // // import { FaSearch } from "react-icons/fa";
// // // import { HiOutlineShoppingBag } from "react-icons/hi2";
// // // import { CgProfile } from "react-icons/cg";
// // // import "./Navbar.css";
// // // import DropDownContent from "./DropDownContent";

// // // const Navbar = () => {
// // //   const [isScrolling, setIsScrolling] = useState(false);
// // //   const [activeMenu, setActiveMenu] = useState(null);

// // //   const handleMouseEnter = (menu) => {
// // //     setActiveMenu(menu);
// // //   };

// // //   const handleMouseLeave = () => {
// // //     setActiveMenu(null);
// // //   };

// // //   // Add a scroll event listener
// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       if (window.scrollY > 50) {
// // //         setIsScrolling(true);
// // //       } else {
// // //         setIsScrolling(false);
// // //       }
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, []);

// // //   return (
// // //     <nav className={`navbar ${isScrolling ? "scrolled" : ""}`} onMouseLeave={handleMouseLeave}>
// // //        <div className="navbar-logo">
// // //           <img src="public/HeroVideo/GR_Logo_Transparent_Black_1-removebg-preview (1).png" alt="GymReapers Logo" />
// // //         </div>
// // //         <ul className="navbar-menu">
// // //         {["LIFTING GEAR ▼", "SPORTS BRAS", "SHORTS", "OUTERWEAR", "COLLECTIONS"].map((item) => (
// // //           <li
// // //             key={item}
// // //             onMouseEnter={() => handleMouseEnter(item)}
// // //             className="navbar-item"
// // //           >
// // //             {item}
// // //             {activeMenu === item && (
// // //               <div className="dropdown-content">
// // //                 {item === "LIFTING GEAR ▼" && (
// // //                   <ul>
// // //                     <li><DropDownContent/></li>
// // //                     {/* <li>GIFT GUIDE</li>  */}
// // //                   </ul>
// // //                 )}
// // //                 {item === "SPORTS BRAS" && (
// // //                   <ul>
// // //                     <li>Light Support</li>
// // //                     <li>Medium Support</li>
// // //                     <li>Heavy Support</li>
// // //                     <li>SHOP ALL</li>
// // //                   </ul>
// // //                 )}
// // //                 {item === "SHORTS" && (
// // //                   <ul>
// // //                     <li>Seamless</li>
// // //                     <li>Pocketed</li>
// // //                     <li>SHOP ALL</li>
// // //                   </ul>
// // //                 )}
// // //                 {item === "COLLECTIONS" && (
// // //                   <div className="collection-dropdown">
// // //                     <div className="collection-text">
// // //                       <ul>
// // //                         <li>Infinity</li>
// // //                         <li>Performance</li>
// // //                         <li>Legacy</li>
// // //                         <li>Battle</li>
// // //                         <li>SHOP ALL</li>
// // //                       </ul>
// // //                     </div>
// // //                     <div className="collection-image">
// // //                       <img src="" alt="Legacy Collection" />
// // //                       <p>LEGACY COLLECTION</p>
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </li>
// // //         ))}
// // //       </ul>







// // //       {/* <ul className="navbar-menu">
// // //         <li><a href="#">LIFTING GEAR ▼</a></li>
// // //         <li><a href="#">EQUIPMENT ▼</a></li>
// // //         <li><a href="#">MENS ▼</a></li>
// // //         <li><a href="#">WOMENS ▼</a></li>
// // //         <li><a href="#">ACCESSORIES ▼</a></li>
// // //         <li><a href="#" className="help">NEED HELP?</a></li>
// // //       </ul> */}




// // //       <div className="navbar-icons">
// // //       <FaSearch />
// // //         {/* <a href="#"><span className="icon">🔍</span></a> */}
// // //         {/* <a href="#"><span className="icon">👤</span></a> */}
// // //         <HiOutlineShoppingBag />
// // //         {/* <a href="#">
// // //           <span className="icon">🛒</span>
// // //           <span className="cart-count">4</span>
// // //         </a> */}
// // //         <CgProfile />
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;



// // import { useState, useEffect } from "react";
// // import { FaSearch } from "react-icons/fa";
// // import { HiOutlineShoppingBag } from "react-icons/hi2";
// // import { CgProfile } from "react-icons/cg";
// // import "./Navbar.css"; 
// // import DropDownContent from "./DropDownContent";

// // const Navbar = () => {
// //   const [isScrolling, setIsScrolling] = useState(false);
// //   const [activeMenu, setActiveMenu] = useState(null);

// //   const handleMouseEnter = (menu) => {
// //     setActiveMenu(menu);
// //   };

// //   const handleMouseLeave = () => {
// //     setActiveMenu(null);
// //   };

// //   // Add a scroll event listener
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 50) {
// //         setIsScrolling(true);
// //       } else {
// //         setIsScrolling(false);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <nav className={`navbar ${isScrolling ? "scrolled" : ""}`} onMouseLeave={handleMouseLeave}>
// //        <div className="navbar-logo">
// //           <img src="public/HeroVideo/GR_Logo_Transparent_Black_1-removebg-preview (1).png" alt="GymReapers Logo" />
// //         </div>
// //         <ul className="navbar-menu">
// //         {["LIFTING GEAR ▼", "SPORTS BRAS", "SHORTS", "OUTERWEAR", "COLLECTIONS"].map((item) => (
// //           <li
// //             key={item}
// //             onMouseEnter={() => handleMouseEnter(item)}
// //             className="navbar-item"
// //           >
// //             {item}
// //             {activeMenu === item && (
// //               <div className="dropdown-content">
// //                 {item === "LIFTING GEAR ▼" && (
// //                   <ul>
// //                     <li><DropDownContent/></li>
// //                     {/* <li>GIFT GUIDE</li>  */}
// //                   </ul>
// //                 )}
// //                 {item === "SPORTS BRAS" && (
// //                   <ul>
// //                     <li>Light Support</li>
// //                     <li>Medium Support</li>
// //                     <li>Heavy Support</li>
// //                     <li>SHOP ALL</li>
// //                   </ul>
// //                 )}
// //                 {item === "SHORTS" && (
// //                   <ul>
// //                     <li>Seamless</li>
// //                     <li>Pocketed</li>
// //                     <li>SHOP ALL</li>
// //                   </ul>
// //                 )}
// //                 {item === "COLLECTIONS" && (
// //                   <div className="collection-dropdown">
// //                     <div className="collection-text">
// //                       <ul>
// //                         <li>Infinity</li>
// //                         <li>Performance</li>
// //                         <li>Legacy</li>
// //                         <li>Battle</li>
// //                         <li>SHOP ALL</li>
// //                       </ul>
// //                     </div>
// //                     <div className="collection-image">
// //                       <img src="" alt="Legacy Collection" />
// //                       <p>LEGACY COLLECTION</p>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             )}
// //           </li>
// //         ))}
// //       </ul>







// //       {/* <ul className="navbar-menu">
// //         <li><a href="#">LIFTING GEAR ▼</a></li>
// //         <li><a href="#">EQUIPMENT ▼</a></li>
// //         <li><a href="#">MENS ▼</a></li>
// //         <li><a href="#">WOMENS ▼</a></li>
// //         <li><a href="#">ACCESSORIES ▼</a></li>
// //         <li><a href="#" className="help">NEED HELP?</a></li>
// //       </ul> */}




// //       <div className="navbar-icons">
// //       <FaSearch />
// //         {/* <a href="#"><span className="icon">🔍</span></a> */}
// //         {/* <a href="#"><span className="icon">👤</span></a> */}
// //         <HiOutlineShoppingBag />
// //         {/* <a href="#">
// //           <span className="icon">🛒</span>
// //           <span className="cart-count">4</span>
// //         </a> */}
// //         <CgProfile />
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;






// import { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
// import CartDropdown from "../../components/ContextCart/CartDropDown";
// import DropDownContent from "./DropDownContent";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const handleMouseEnter = (menu) => {
//     setActiveMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     setActiveMenu(null);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolling(true);
//       } else {
//         setIsScrolling(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`bg-black shadow-md ${isScrolling ? "fixed top-0 left-0 right-0 z-50" : ""}`} onMouseLeave={handleMouseLeave}>
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="navbar-logo">
//           <Link to="/"/>
//           <img src="/HeroVideo/GR_Logo_Transparent_Black_1-removebg-preview (1).png" alt="GymReapers Logo" className="h-10" />
//         </div>
//         <ul className="hidden md:flex space-x-6">
//           {["LIFTING GEAR ▼", "Men ▼", "Womens ▼", "Equipment ▼", "Accessories ▼"].map((item) => (
//             <li
//               key={item}
//               onMouseEnter={() => handleMouseEnter(item)}
//               className="relative group"
//             >
//               <span className="cursor-pointer">{item}</span>
//               {activeMenu === item && (
//                 <div className="absolute left-0 mt-2 w-48 bg-black shadow-lg rounded-md py-2 z-10">
//                   {item === "LIFTING GEAR ▼" && <DropDownContent />}
//                   {item === "Men ▼" && (
//                     <ul>
//                       <li className="px-4 py-2 hover:bg-black">Light Support</li>
//                       <li className="px-4 py-2 hover:bg-black">Medium Support</li>
//                       <li className="px-4 py-2 hover:bg-black">Heavy Support</li>
//                       <li className="px-4 py-2 hover:bg-black">SHOP ALL</li>
//                     </ul>
//                   )}
//                   {item === "Womens ▼" && (
//                     <ul>
//                       <li className="px-4 py-2 hover:bg-black">Seamless</li>
//                       <li className="px-4 py-2 hover:bg-black">Pocketed</li>
//                       <li className="px-4 py-2 hover:bg-black">SHOP ALL</li>
//                     </ul>
//                   )}
//                   {item === "Equipment ▼" && (
//                     <div>
//                       <ul>
//                         <li className="px-4 py-2 hover:bg-black">Infinity</li>
//                         <li className="px-4 py-2 hover:bg-black">Performance</li>
//                         <li className="px-4 py-2 hover:bg-black">Legacy</li>
//                         <li className="px-4 py-2 hover:bg-black">Battle</li>
//                         <li className="px-4 py-2 hover:bg-black">SHOP ALL</li>
//                       </ul>
//                       <div className="px-4 py-2">
//                         <img src="/placeholder.svg" alt="Legacy Collection" className="w-full h-32 object-cover" />
//                         <p className="mt-2 text-center">LEGACY COLLECTION</p>
//                       </div>
//                     </div>
//                   )}
//                    {item === "Accessories ▼" && (
//                     <div>
//                       <ul>
//                         <li className="px-4 py-2 hover:bg-black">Infinity</li>
//                         <li className="px-4 py-2 hover:bg-black">Performance</li>
//                         <li className="px-4 py-2 hover:bg-black">Legacy</li>
//                         <li className="px-4 py-2 hover:bg-black">Battle</li>
//                         <li className="px-4 py-2 hover:bg-black">SHOP ALL</li>
//                       </ul>
//                       <div className="px-4 py-2">
//                         <img src="/placeholder.svg" alt="Legacy Collection" className="w-full h-32 object-cover" />
//                         <p className="mt-2 text-center">LEGACY COLLECTION</p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center space-x-4">
//           <FaSearch className="w-5 h-5" />
//           <CartDropdown />
//           <CgProfile className="w-6 h-6" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {  ChevronDown } from 'lucide-react';
import MegaMenu from '../../components/Navbar/MegaMenu';
import "./Navbar.css"
import { FaSearch } from 'react-icons/fa';
import CartDropdown from '../ContextCart/CartDropDown';
import { CgProfile } from "react-icons/cg";
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const navItems = [
    'LIFTING GEAR',
    'EQUIPMENT',
    'MENS',
    'WOMENS',
    'ACCESSORIES'
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/40 shadow-lg' : 'bg-white/20'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/HeroVideo/GR_Logo_Transparent_Black_1-removebg-preview (1).png" 
              alt="GYMREAPERS" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
              >
                <motion.button
                  className="flex items-center space-x-1 py-8 text-white hover:text-gray-300 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>{item}</span>
                  <ChevronDown className="w-4 h-4" />
                </motion.button>
                <MegaMenu category={item} isVisible={activeMenu === item}/>
              </div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* <motion.button 
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              <HelpCircle className="w-5 h-5" />
              <span className="hidden md:inline">NEED HELP?</span>
            </motion.button>

            <motion.button 
              className="text-white hover:text-gray-300 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              <Search className="w-6 h-6" />
            </motion.button>

            <motion.button 
              className="text-white hover:text-gray-300 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              <User className="w-6 h-6" />
            </motion.button>

            <motion.button 
              className="text-white hover:text-gray-300 transition-colors duration-200 relative"
              whileHover={{ scale: 1.1 }}
            > */}
              {/* <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-white text-black text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span> */}
            <div className="flex items-center space-x-4 ">
           <FaSearch className="w-5 h-5" />
           <CartDropdown/>
           <CgProfile className="w-6 h-6" />
         </div>
            {/* </motion.button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

