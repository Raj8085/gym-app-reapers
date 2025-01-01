// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {  ChevronDown } from 'lucide-react';
// import MegaMenu from '../../components/Navbar/MegaMenu';
// import "./Navbar.css"
// import { FaSearch } from 'react-icons/fa';
// import CartDropdown from '../ContextCart/CartDropDown';
// import { CgProfile } from "react-icons/cg";
// export default function Navbar() {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleMouseEnter = (menu) => {
//     setActiveMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     setActiveMenu(null);
//   };

//   const navItems = [
//     'LIFTING GEAR',
//     'EQUIPMENT',
//     'MENS',
//     'WOMENS',
//     'ACCESSORIES'
//   ];

//   return (
//     <nav 
//       className={`navbar sticky top-0 z-50 ${
//         isScrolled ? 'bg-black shadow-lg' : 'bg-black'
//       }`}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex-shrink-0">
//             <img 
//               src="/HeroVideo/GR_Logo_Transparent_Black_1-removebg-preview (1).png" 
//               alt="GYMREAPERS" 
//               className="h-12 w-auto"
//             />
//           </Link>

//           {/* Navigation Items */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <div
//                 key={item}
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter(item)}
//               >
//                 <motion.button
//                   className="flex items-center space-x-1 py-8 text-white hover:text-gray-300 transition-colors duration-200"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <span>{item}</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </motion.button>
//                 <MegaMenu category={item} isVisible={activeMenu === item}/>
//               </div>
//             ))}
//           </div>

//           {/* Right Side Icons */}
//           <div className="flex items-center space-x-6">
//             {/* <motion.button 
//               className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200"
//               whileHover={{ scale: 1.05 }}
//             >
//               <HelpCircle className="w-5 h-5" />
//               <span className="hidden md:inline">NEED HELP?</span>
//             </motion.button>

//             <motion.button 
//               className="text-white hover:text-gray-300 transition-colors duration-200"
//               whileHover={{ scale: 1.1 }}
//             >
//               <Search className="w-6 h-6" />
//             </motion.button>

//             <motion.button 
//               className="text-white hover:text-gray-300 transition-colors duration-200"
//               whileHover={{ scale: 1.1 }}
//             >
//               <User className="w-6 h-6" />
//             </motion.button>

//             <motion.button 
//               className="text-white hover:text-gray-300 transition-colors duration-200 relative"
//               whileHover={{ scale: 1.1 }}
//             > */}
//               {/* <ShoppingBag className="w-6 h-6" />
//               <span className="absolute -top-1 -right-1 bg-white text-black text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                 0
//               </span> */}
//             <div className="flex items-center space-x-4 text-white">
//            <FaSearch className="w-5 h-5" />
//            <CartDropdown/>
//            <CgProfile className="w-6 h-6" />
//          </div>
//             {/* </motion.button> */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }




import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import CartDropdown from '../ContextCart/CartDropDown';
import NavItem from '../../components/Navbar/NavBarItem';
import { menuCategories } from '../../components/Navbar/MenuData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`navbar sticky top-0 z-50 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-black'
      }`}
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
            {Object.keys(menuCategories).map((category) => (
              <NavItem key={category} category={category} menuData={menuCategories[category]} />
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4 text-white">
            <FaSearch className="w-5 h-5" />
            <CartDropdown />
            <CgProfile className="w-6 h-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}

