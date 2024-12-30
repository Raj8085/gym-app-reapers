// import { useState } from 'react';
// import { useFilters } from '../../components/ContextCart/FilterContext';
// import { X, Filter, ChevronDown, ChevronUp } from 'lucide-react';

// export default function ProductFilters() {
//   const { filters, updateFilter, clearFilters } = useFilters();
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeAccordion, setActiveAccordion] = useState('');

//   const categories = ['Hoodies', 'Jackets', 'Shorts', 'Leggings'];
//   const genders = ['Men', 'Women', 'Unisex'];
//   const availableSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
//   const availableColors = ['Black', 'White', 'Blue', 'Red', 'Green'];

//   const toggleAccordion = (section) => {
//     setActiveAccordion(activeAccordion === section ? '' : section);
//   };

//   // eslint-disable-next-line react/prop-types
//   const FilterAccordion = ({ title, children }) => (
//     <div className="border-b border-gray-200">
//       <button
//         className="flex justify-between items-center w-full py-4 px-2 text-left"
//         onClick={() => toggleAccordion(title)}
//       >
//         <span className="font-medium">{title}</span>
//         {activeAccordion === title ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//       </button>
//       {activeAccordion === title && (
//         <div className="p-4 bg-gray-50">{children}</div>
//       )}
//     </div>
//   );

//   return (
//     <div className="relative">
//       {/* Mobile Filter Button */}
//       <button
//         className="md:hidden fixed bottom-4 right-4 z-50 bg-black text-white p-4 rounded-full shadow-lg flex items-center gap-2"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <Filter size={20} />
//         <span>Filters</span>
//       </button>

//       {/* Filter Sidebar */}
//       <div className={`
//         fixed md:sticky top-0 left-0 h-full w-full md:w-auto
//         bg-white md:bg-transparent z-40 transform transition-transform duration-300
//         ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
//       `}>
//         <div className="p-4 md:p-0">
//           {/* Mobile Header */}
//           <div className="flex justify-between items-center md:hidden mb-4">
//             <h2 className="text-xl font-bold">Filters</h2>
//             <button onClick={() => setIsOpen(false)}>
//               <X size={24} />
//             </button>
//           </div>

//           {/* Search */}
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={filters.search}
//               onChange={(e) => updateFilter('search', e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           {/* Category Filter */}
//           <FilterAccordion title="Category">
//             <div className="space-y-2">
//               {categories.map((category) => (
//                 <label key={category} className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="category"
//                     checked={filters.category === category}
//                     onChange={() => updateFilter('category', category)}
//                     className="form-radio text-black"
//                   />
//                   <span>{category}</span>
//                 </label>
//               ))}
//             </div>
//           </FilterAccordion>

//           {/* Gender Filter */}
//           <FilterAccordion title="Gender">
//             <div className="space-y-2">
//               {genders.map((gender) => (
//                 <label key={gender} className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name="gender"
//                     checked={filters.gender === gender}
//                     onChange={() => updateFilter('gender', gender)}
//                     className="form-radio text-black"
//                   />
//                   <span>{gender}</span>
//                 </label>
//               ))}
//             </div>
//           </FilterAccordion>

//           {/* Size Filter */}
//           <FilterAccordion title="Sizes">
//             <div className="grid grid-cols-3 gap-2">
//               {availableSizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => updateFilter('sizes', size)}
//                   className={`p-2 border rounded-md ${
//                     filters.sizes.includes(size)
//                       ? 'bg-black text-white'
//                       : 'bg-white text-black'
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </FilterAccordion>

//           {/* Color Filter */}
//           <FilterAccordion title="Colors">
//             <div className="grid grid-cols-3 gap-2">
//               {availableColors.map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => updateFilter('colors', color)}
//                   className={`p-2 border rounded-md ${
//                     filters.colors.includes(color)
//                       ? 'bg-black text-white'
//                       : 'bg-white text-black'
//                   }`}
//                 >
//                   {color}
//                 </button>
//               ))}
//             </div>
//           </FilterAccordion>

//           {/* Clear Filters */}
//           <button
//             onClick={clearFilters}
//             className="w-full mt-6 p-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
//           >
//             Clear All Filters
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from 'react';
import { useFilters } from '../../components/ContextCart/FilterContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductFilters() {
  const { filters, updateFilter, clearFilters } = useFilters();
  const [activeAccordion, setActiveAccordion] = useState('');

  const categories = ['Hoodies', 'Jackets', 'Shorts', 'Leggings'];
  const genders = ['Men', 'Women', 'Unisex'];
  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
  const availableColors = ['Black', 'White', 'Blue', 'Red', 'Green'];

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? '' : section);
  };

  // eslint-disable-next-line react/prop-types
  const FilterAccordion = ({ title, children }) => (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-2 text-left"
        onClick={() => toggleAccordion(title)}
      >
        <span className="font-medium">{title}</span>
        {activeAccordion === title ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {activeAccordion === title && (
        <div className="p-4 bg-gray-50">{children}</div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={filters.search}
          onChange={(e) => updateFilter('search', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Category Filter */}
      <FilterAccordion title="Category">
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                checked={filters.category === category}
                onChange={() => updateFilter('category', category)}
                className="form-radio text-black"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </FilterAccordion>

      {/* Gender Filter */}
      <FilterAccordion title="Gender">
        <div className="space-y-2">
          {genders.map((gender) => (
            <label key={gender} className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                checked={filters.gender === gender}
                onChange={() => updateFilter('gender', gender)}
                className="form-radio text-black"
              />
              <span>{gender}</span>
            </label>
          ))}
        </div>
      </FilterAccordion>

      {/* Size Filter */}
      <FilterAccordion title="Sizes">
        <div className="grid grid-cols-3 gap-2">
          {availableSizes.map((size) => (
            <button
              key={size}
              onClick={() => updateFilter('sizes', size)}
              className={`p-2 border rounded-md ${
                filters.sizes.includes(size)
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterAccordion>

      {/* Color Filter */}
      <FilterAccordion title="Colors">
        <div className="grid grid-cols-3 gap-2">
          {availableColors.map((color) => (
            <button
              key={color}
              onClick={() => updateFilter('colors', color)}
              className={`p-2 border rounded-md ${
                filters.colors.includes(color)
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </FilterAccordion>

      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        className="w-full mt-6 p-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
}

