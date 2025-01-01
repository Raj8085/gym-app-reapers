/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import MegaMenu from '../../components/Navbar/MegaMenu';

export default function NavItem({ category, menuData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        className="flex items-center space-x-1 py-8 text-white hover:text-gray-300 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <span>{category}</span>
        <ChevronDown className="w-4 h-4" />
      </motion.button>
      <MegaMenu category={category} menuData={menuData} isVisible={isMenuOpen} />
    </div>
  );
}

