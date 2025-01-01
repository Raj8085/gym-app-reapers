/* eslint-disable react/prop-types */
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const menuCategories = {
//   'LIFTING GEAR': {
//     sections: [
//       {
//         title: 'WEIGHTLIFTING BELTS',
//         items: ['Lever Belts', 'Single Prong Belts', 'Double Prong Belts', 'Quick Locking Belts', 'Dip Belts', 'Gym Kits & Bundles', 'SHOP ALL']
//       },
//       {
//         title: 'JOINT SUPPORT',
//         items: ['Knee Sleeves', 'Knee Wraps', 'Elbow Sleeves', 'Elbow Wraps', 'SHOP ALL', 'Wrist Wraps', 'Stiff Wraps', 'Strength Wraps']
//       },
//       {
//         title: 'LIFTING STRAPS',
//         items: ['Padded', 'Unpadded', 'Figure-8', 'Olympic', 'Lifting Grips', 'Lifting Hooks', 'SHOP ALL']
//       },
//       {
//         title: 'TRAINING TYPE',
//         items: ['Bodybuilding', 'Cross Training', 'Powerlifting', 'Olympic Lifting', 'Strongman', 'SHOP ALL']
//       }
//     ],
//     sidebar: ['BEST SELLERS', 'NEW RELEASES', 'GIFT GUIDE'],
//     promo: {
//       image: '/strength-kits.jpg',
//       title: 'SHOP STRENGTH KITS',
//       link: '/strength-kits'
//     }
//   },
//   'EQUIPMENT': {
//     sections: [
//       {
//         title: 'GYM EQUIPMENT',
//         items: ['Barbells', 'Weight Plates', 'Dumbbells', 'Kettlebells', 'Resistance Bands', 'SHOP ALL']
//       },
//       // Add more sections as needed
//     ]
//   },
//   'MENS': {
//     sections: [
//       {
//         title: 'CLOTHING',
//         items: ['T-Shirts', 'Tank Tops', 'Hoodies', 'Shorts', 'Joggers', 'SHOP ALL']
//       },
//       // Add more sections as needed
//     ]
//   },
//   // Add other menu categories similarly
// };

// // eslint-disable-next-line react/prop-types
// export default function MegaMenu({ category, isVisible }) {
//   const menuData = menuCategories[category];
  
//   if (!menuData) return null;

//   return (
//     <AnimatePresence>
//       <Link to="/leverbelts">
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.2 }}
//           className="absolute left-0 w-[50rem] bg-black border-t border-zinc-800 z-50"
//         >
//           <div className="container mx-auto px-4 py-8">
//             <div className="grid grid-cols-12 gap-8">
//               {/* Sidebar */}
//               <div className="col-span-2">
//                 <ul className="space-y-4">
//                   {menuData.sidebar?.map((item) => (
//                     <li key={item}>
//                       <Link 
//                         to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                         className="text-white hover:text-gray-300 transition-colors duration-200"
//                       >
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Menu Sections */}
//               {menuData.sections.map((section) => (
//                 <div key={section.title} className="col-span-2">
//                   <h3 className="font-bold text-white mb-4">{section.title}</h3>
//                   <ul className="space-y-2">
//                     {section.items.map((item) => (
//                       <li key={item}>
//                         <Link
//                           to={`/${section.title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                           className="text-gray-400 hover:text-white transition-colors duration-200"
//                         >
//                           {item}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}

//               {/* Promo Image */}
//               {menuData.promo && (
//                 <div className="col-span-2">
//                   <Link to={menuData.promo.link} className="block group">
//                     <motion.div 
//                       className="relative h-64 rounded-lg overflow-hidden"
//                       whileHover={{ scale: 1.05 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <img
//                         src={menuData.promo.image}
//                         alt={menuData.promo.title}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-200">
//                         <span className="text-white font-bold text-xl text-center">
//                           {menuData.promo.title}
//                         </span>
//                       </div>
//                     </motion.div>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       )}
//       </Link>
//     </AnimatePresence>
//   );
// }


import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MegaMenu({ category, menuData, isVisible }) {
  if (!menuData) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 w-[50rem] bg-black border-t border-zinc-800 z-50"
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Sidebar */}
              {menuData.sidebar && (
                <div className="col-span-2">
                  <ul className="space-y-4">
                    {menuData.sidebar.map((item) => (
                      <li key={item}>
                        <Link 
                          to={`/${category.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-white hover:text-gray-300 transition-colors duration-200"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Menu Sections */}
              {menuData.sections.map((section) => (
                <div key={section.title} className="col-span-2">
                  <h3 className="font-bold text-white mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        {/* <Link
                          to={`/${category.toLowerCase()}/${section.title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        > */}
                        <Link to="/nav-item"  className="text-gray-400 hover:text-white transition-colors duration-200">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Promo Image */}
              {menuData.promo && (
                <div className="col-span-2">
                  <Link to={menuData.promo.link} className="block group">
                    <motion.div 
                      className="relative h-64 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={menuData.promo.image}
                        alt={menuData.promo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-200">
                        <span className="text-white font-bold text-xl text-center">
                          {menuData.promo.title}
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

