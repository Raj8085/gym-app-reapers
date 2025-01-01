import { Link } from 'react-router-dom';
import productsTwoList from '../TwoCommonProducts';



const ProductDetailsTwo = () => {
  return (
    <>
      <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">BEST SELLING WOMEN&apos;S APPAREL</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {productsTwoList.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
            >


              <div className=" top-2 left-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded">
                {product.badge}
              </div>
              {/* Image Section */}
              <div className="relative w-full md:h-60 lg:h-80 bg-gray-100">
                <img
                  src={product.initialImg}
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={product.hoverImg}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{product.price}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 text-sm mr-1">⭐</span>
                  <span className="text-gray-600 text-sm">{product.rating}</span>
                </div>

                {/* Color Options */}
                <div className="flex space-x-2 mt-3">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-5 h-5 rounded-full border border-gray-300 shadow-sm"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default  ProductDetailsTwo;