
import { Link } from 'react-router-dom';
import ProductsFifthList from './ProductFifthList';



function ProductFifthGrid() {
    return (
        <>
         <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">BEST SELLING GYM ACCESSORIES

</h2>  
        {/* <HeroSection/> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-6 ">
               
        {ProductsFifthList.map((product) => (
          
          <Link
            to={`/productsFifth/${product.id}`}
            key={product.id}
            className="group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300"
          >
           

            {/* Image Section */}
            <div className="relative w-full  md:h-72 lg:h-96 bg-gray-100">
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
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm">{product.price}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-sm mr-1">⭐</span>
                <span className="text-gray-600 text-sm">{product.rating}</span>
              </div>
  
              {/* Color Options */}
              <div className="flex space-x-2 mt-3">
                
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-red-600"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      </>
    );
  }
export default ProductFifthGrid;