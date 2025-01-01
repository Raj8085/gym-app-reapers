
// import { Link } from 'react-router-dom';
// import ProductsFourthList from './FourthComponentList';



// function ProductFourthGrid() {
//     return (
//         <>
        
//         {/* <HeroSection/> */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-6 ">
          
//         {ProductsFourthList.map((product) => (
          
//           <Link
//             to={`/productsFourth/${product.id}`}
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
// export default ProductFourthGrid;











// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFilters } from '../../../../components/ContextCart/FilterContext';
// import ProductFilters from '../../../../components/ContextCart/ProductFilters';
// import { Filter, X } from 'lucide-react';
import ProductsFourthList from './FourthComponentList';


function ProductFourthGrid() {
  const { filters, clearFilters } = useFilters();
  // const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter products based on all criteria
  const filteredProducts = ProductsFourthList.filter(product => {
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.category && !product.name.includes(filters.category)) {
      return false;
    }
    if (filters.gender && !product.name.includes(filters.gender)) {
      return false;
    }
    if (filters.sizes.length > 0) {
      const productSizes = product.sizes.map(s => s.size.split(' ')[0]);
      if (!filters.sizes.some(size => productSizes.includes(size))) {
        return false;
      }
    }
    if (filters.colors.length > 0) {
      const productColors = product.colors.map(c => c.split('/').pop().split('-')[0]);
      if (!filters.colors.some(color => productColors.includes(color.toLowerCase()))) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="relative">
      {/* Mobile Filter Toggle Button */}
      {/* <button
        className="fixed bottom-4 right-4 z-50 md:hidden bg-black text-red-900 p-4 rounded-full shadow-lg"
        onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
      >
        {isMobileFilterOpen ? <X size={24} /> : <Filter size={24} />}
      </button> */}

      <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6">
        {/* Filters */}
        {/* <aside className={`
          fixed inset-0 z-40 bg-white md:relative md:bg-transparent
          transform transition-transform duration-300 ease-in-out
          ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:w-64 overflow-y-auto
        `}>
          <div className="p-4 md:p-0">
            <div className="flex justify-between items-center md:hidden mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setIsMobileFilterOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <ProductFilters />
          </div>
        </aside> */}

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <Link
                to={`/productsfourth/${product.id}`}
                key={product.id}
                className="group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300"
              >
                {/* Image Section */}
                <div className="relative w-full  sm:h-56 md:h-64 lg:h-72 bg-gray-100">
                  <img
                    src={product.initialImg}
                    alt={product.name}
                    className="w-full h-full object-cover transition duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={product.hoverImg}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-300 group-hover:opacity-100"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 group-hover:text-gray-600 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">{product.price}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 text-xs sm:text-sm mr-1">⭐</span>
                    <span className="text-gray-600 text-xs sm:text-sm">{product.rating}</span>
                  </div>

                  {/* Color Options */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {product.colors.slice(0, 4).map((color, index) => (
                      <div
                        key={index}
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                    {product.colors.length > 4 && (
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                        +{product.colors.length - 4}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">No products match your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductFourthGrid;