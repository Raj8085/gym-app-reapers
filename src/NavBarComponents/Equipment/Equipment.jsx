import  { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { useCart } from '@/components/ContextCart/CartContext';

export const HipBands = () => {
    const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M (32-34")');
  const [selectedImage, setSelectedImage] = useState('/NavCompo/Equipment/hip-bands-3-pack-military-green-stacked.jpg');
  const [expandedSection, setExpandedSection] = useState(null);
  const colors = [
  { name: 'Black', value: 'black' },
  { name: 'Gray', value: 'gray' },
  { name: 'Dark Black', value: 'darkblack' },
  { name: 'Light Gray', value: 'lightgray' },
  { name: 'Military Green', value: 'olive' },
  { name: 'Sand', value: 'tan' },
  { name: 'Stealth', value: 'charcoal' }
  ];
  
  const sizes = [
  'S (28-30")',
  'M (32-34")',
  'L (36-38")',
  'XL (40-42")',
  '2XL (44-46")'
  ];
  
  const relatedProducts = [
  {
    name: 'Gymreapers TRX Knee Sleeves - Dark/Black',
    price: '3,200.00',
    image: '/placeholder.svg?height=60&width=60'
  },
  {
    name: 'Gymreapers Knee Wraps - 14" WeightLifting Knee Support',
    price: '2,100.00',
    image: '/placeholder.svg?height=60&width=60'
  }
  ];
  
  const toggleSection = (section) => {
  setExpandedSection(expandedSection === section ? null : section);
  };
  
  const handleAddToCart = () => {
  addToCart({
    name: "Hip Bands 3-Pack - Military Green",
    image : '/NavCompo/Equipment/hip-bands-3-pack-military-green-stacked.jpg',
    price: '1,800.00',
    quantity: 1,
    total : '1,800.00'
  });
  
  alert(`Product has been added to your cart.`);
  
  };
  
  return (
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Column - Images */}
      <div className="lg:w-1/2 space-y-4">
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={selectedImage}
            alt="10MM SINGLE PRONG BELT"
            className="w-full h-full object-cover"
          />
        </div>
    
  <div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/Equipment/hip-bands-3-pack-nude-stacked_x280.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/Equipment/hip-bands-3-pack-black-stacked_x280.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/Equipment/hip-bands-3-pack-military-green-lay-flat.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <img src='/NavCompo/Equipment/hip-bands-3-pack-military-green-flat.jpg' alt=''
        className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden" />
        </div>
          
          <div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <button
            onClick={() => setSelectedImage('/NavCompo/Equipment/military-green-hip-bands-3-pack-bands-and-bag.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/Equipment/military-green-hip-bands-infographic.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/Equipment/hip-bands-3-pack-military-green-close-up.jpg"
              alt="Thumbnail 3"
              className="w-full h-full object-cover"
            />
          </button>
        
        </div>
      
  
      </div>
  
      {/* Right Column - Product Details */}
      <div className="lg:w-1/2">
        <div className="space-y-6">
          {/* Product Title and Badge */}
          <div className="space-y-2">
            <div className="inline-block bg-emerald-500 text-white text-xs px-2 py-1 rounded">
              LIFETIME WARRANTY
            </div>
            <h1 className="text-2xl font-bold">Hip Bands 3-Pack - Military Green
            </h1>
          </div>
  
          {/* Price */}
          <div className="text-xl">
            Rs. 1,800.00
          </div>
  
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600">4.5 Stars (51 Reviews)</span>
          </div>
  
          {/* Color Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Color</label>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.value ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
  
          {/* Size Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Size</label>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
  
          {/* Add to Cart Button */}
          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition-colors "   onClick={handleAddToCart}
          >
            Add to cart
          </button>
  
          {/* Feature Icons */}
          <div className="flex justify-between py-12 border-t border-b">
            <div className="flex flex-col items-center">
              <div className="w-full h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <img src="/NavCompo/Confidence_Badges_L.png" alt="Feature 1"/>
              </div>
            </div>
            {/* Repeat for other feature icons */}
          </div>
  
          {/* Free Shipping Section */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <img src="/NavCompo/a9c7213ff8854905344f0251857dec88.png" alt="Free Shipping" className="w-6 h-6" />
            </div>
            <p className="text-sm">Free shipping when you spend ₹75+</p>
            <p className="text-xs text-gray-500">(2-4 Business days)</p>
          </div>
  
          {/* Pairs Well With */}
          <div className="space-y-4">
            <h3 className="font-medium">Pairs well with</h3>
            <div className="space-y-2">
              {relatedProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">Rs. {product.price}</p>
                    </div>
                  </div>
                  <button className="px-4 py-1 border rounded hover:bg-gray-50">
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>
  
          {/* Expandable Sections */}
          <div className="space-y-2">
            {['Features', 'Intended Use', 'Warranty'].map((section) => (
              <div key={section} className="border rounded">
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full px-4 py-3 flex justify-between items-center"
                >
                  <span className="font-medium">{section}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSection === section ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedSection === section && (
                  <div className="px-4 py-3 border-t">
                    <p className="text-sm text-gray-600">
                      {section === 'Features' && 'Product features description...'}
                      {section === 'Intended Use' && 'Intended use description...'}
                      {section === 'Warranty' && 'Warranty information...'}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
  };



  export const BarbellPad = () => {
    const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M (32-34")');
  const [selectedImage, setSelectedImage] = useState('/NavCompo/Equipment/barbell-pad-black-main.png');
  const [expandedSection, setExpandedSection] = useState(null);
  const colors = [
  { name: 'Black', value: 'black' },
  { name: 'Gray', value: 'gray' },
  { name: 'Dark Black', value: 'darkblack' },
  { name: 'Light Gray', value: 'lightgray' },
  { name: 'Military Green', value: 'olive' },
  { name: 'Sand', value: 'tan' },
  { name: 'Stealth', value: 'charcoal' }
  ];
  
  const sizes = [
  'S (28-30")',
  'M (32-34")',
  'L (36-38")',
  'XL (40-42")',
  '2XL (44-46")'
  ];
  
  const relatedProducts = [
  {
    name: 'Gymreapers TRX Knee Sleeves - Dark/Black',
    price: '3,200.00',
    image: '/placeholder.svg?height=60&width=60'
  },
  {
    name: 'Gymreapers Knee Wraps - 14" WeightLifting Knee Support',
    price: '2,100.00',
    image: '/placeholder.svg?height=60&width=60'
  }
  ];
  
  const toggleSection = (section) => {
  setExpandedSection(expandedSection === section ? null : section);
  };
  
  const handleAddToCart = () => {
  addToCart({
    name: "Gymreapers Barbell Squat Pad - Black",
    image : '/NavCompo/Equipment/barbell-pad-black-main.png',
    price: '1,800.00',
    quantity: 1,
    total : '1,800.00'
  });
  
  alert(`Product has been added to your cart.`);
  
  };
  
  return (
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Column - Images */}
      <div className="lg:w-1/2 space-y-4">
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={selectedImage}
            alt="10MM SINGLE PRONG BELT"
            className="w-full h-full object-cover"
          />
        </div>
    
  <div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/Equipment/barbell-pad-green-solo-side.png"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/Equipment/barbell-squat-pad-marble-main.png"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/Equipment/barbell-pad-black-inside.png"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <img src='/NavCompo/Equipment/barbell-pad-black-main.png' alt=''
        className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden" />
        </div>
          
    
  
      </div>
  
      {/* Right Column - Product Details */}
      <div className="lg:w-1/2">
        <div className="space-y-6">
          {/* Product Title and Badge */}
          <div className="space-y-2">
            <div className="inline-block bg-emerald-500 text-white text-xs px-2 py-1 rounded">
              LIFETIME WARRANTY
            </div>
            <h1 className="text-2xl font-bold">Gymreapers Barbell Squat Pad - Black
            </h1>
          </div>
  
          {/* Price */}
          <div className="text-xl">
            Rs. 1,800.00
          </div>
  
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600">4.5 Stars (51 Reviews)</span>
          </div>
  
          {/* Color Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Color</label>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.value ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
  
          {/* Size Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Size</label>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
  
          {/* Add to Cart Button */}
          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition-colors "   onClick={handleAddToCart}
          >
            Add to cart
          </button>
  
          {/* Feature Icons */}
          <div className="flex justify-between py-12 border-t border-b">
            <div className="flex flex-col items-center">
              <div className="w-full h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <img src="/NavCompo/Confidence_Badges_L.png" alt="Feature 1"/>
              </div>
            </div>
            {/* Repeat for other feature icons */}
          </div>
  
          {/* Free Shipping Section */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <img src="/NavCompo/a9c7213ff8854905344f0251857dec88.png" alt="Free Shipping" className="w-6 h-6" />
            </div>
            <p className="text-sm">Free shipping when you spend ₹75+</p>
            <p className="text-xs text-gray-500">(2-4 Business days)</p>
          </div>
  
          {/* Pairs Well With */}
          <div className="space-y-4">
            <h3 className="font-medium">Pairs well with</h3>
            <div className="space-y-2">
              {relatedProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">Rs. {product.price}</p>
                    </div>
                  </div>
                  <button className="px-4 py-1 border rounded hover:bg-gray-50">
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>
  
          {/* Expandable Sections */}
          <div className="space-y-2">
            {['Features', 'Intended Use', 'Warranty'].map((section) => (
              <div key={section} className="border rounded">
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full px-4 py-3 flex justify-between items-center"
                >
                  <span className="font-medium">{section}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSection === section ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedSection === section && (
                  <div className="px-4 py-3 border-t">
                    <p className="text-sm text-gray-600">
                      {section === 'Features' && 'Product features description...'}
                      {section === 'Intended Use' && 'Intended use description...'}
                      {section === 'Warranty' && 'Warranty information...'}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
  };




  export const AnkleStraps = () => {
    const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M (32-34")');
  const [selectedImage, setSelectedImage] = useState('/NavCompo/AnkleStripe/ankle-pair-black-new-1.jpg');
  const [expandedSection, setExpandedSection] = useState(null);
  const colors = [
  { name: 'Black', value: 'black' },
  { name: 'Gray', value: 'gray' },
  { name: 'Dark Black', value: 'darkblack' },
  { name: 'Light Gray', value: 'lightgray' },
  { name: 'Military Green', value: 'olive' },
  { name: 'Sand', value: 'tan' },
  { name: 'Stealth', value: 'charcoal' }
  ];
  
  const sizes = [
  'S (28-30")',
  'M (32-34")',
  'L (36-38")',
  'XL (40-42")',
  '2XL (44-46")'
  ];
  
  const relatedProducts = [
  {
    name: 'Gymreapers TRX Knee Sleeves - Dark/Black',
    price: '3,200.00',
    image: '/placeholder.svg?height=60&width=60'
  },
  {
    name: 'Gymreapers Knee Wraps - 14" WeightLifting Knee Support',
    price: '2,100.00',
    image: '/placeholder.svg?height=60&width=60'
  }
  ];
  
  const toggleSection = (section) => {
  setExpandedSection(expandedSection === section ? null : section);
  };
  
  const handleAddToCart = () => {
  addToCart({
    name: "Gymreapers Ankle Straps - (Pair)",
    image : '/NavCompo/AnkleStripe/ankle-pair-black-new-1.jpg',
    price: '1,800.00',
    quantity: 1,
    total : '1,800.00'
  });
  
  alert(`Product has been added to your cart.`);
  
  };
  
  return (
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Column - Images */}
      <div className="lg:w-1/2 space-y-4">
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={selectedImage}
            alt="10MM SINGLE PRONG BELT"
            className="w-full h-full object-cover"
          />
        </div>
    
  <div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/ankle-pair-seafoam-new-1.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/ankle-pair-toffee-new-1.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/ankle-strap-red-angle-flat_54f27b69-979f-424d-9781-3e786d590b1a.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <img src='/NavCompo/AnkleStripe/ankle-strap-seafoam-angle-flat_6cb50802-b666-45a0-9411-15685261c2b2.jpg' alt=''
        className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden" />
        </div>
          
          <div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <button
            onClick={() => setSelectedImage('/NavCompo/Equipment/military-green-hip-bands-3-pack-bands-and-bag.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/ankle-straps-pink-flat_5334d41e-3f25-4838-8dda-e6941aff5514.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/ankle-straps-toffee-angle-flat_5d447b74-d40d-408d-8231-fbc69a0d81d1.jpg"
              alt="Thumbnail 3"
              className="w-full h-full object-cover"
            />
          </button>
        
        </div>
      
  
      </div>
  
      {/* Right Column - Product Details */}
      <div className="lg:w-1/2">
        <div className="space-y-6">
          {/* Product Title and Badge */}
          <div className="space-y-2">
            <div className="inline-block bg-emerald-500 text-white text-xs px-2 py-1 rounded">
              LIFETIME WARRANTY
            </div>
            <h1 className="text-2xl font-bold">Gymreapers Ankle Straps - (Pair)
            </h1>
          </div>
  
          {/* Price */}
          <div className="text-xl">
            Rs. 1,800.00
          </div>
  
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600">4.5 Stars (51 Reviews)</span>
          </div>
  
          {/* Color Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Color</label>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.value ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
  
          {/* Size Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Size</label>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
  
          {/* Add to Cart Button */}
          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition-colors "   onClick={handleAddToCart}
          >
            Add to cart
          </button>
  
          {/* Feature Icons */}
          <div className="flex justify-between py-12 border-t border-b">
            <div className="flex flex-col items-center">
              <div className="w-full h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <img src="/NavCompo/Confidence_Badges_L.png" alt="Feature 1"/>
              </div>
            </div>
            {/* Repeat for other feature icons */}
          </div>
  
          {/* Free Shipping Section */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <img src="/NavCompo/a9c7213ff8854905344f0251857dec88.png" alt="Free Shipping" className="w-6 h-6" />
            </div>
            <p className="text-sm">Free shipping when you spend ₹75+</p>
            <p className="text-xs text-gray-500">(2-4 Business days)</p>
          </div>
  
          {/* Pairs Well With */}
          <div className="space-y-4">
            <h3 className="font-medium">Pairs well with</h3>
            <div className="space-y-2">
              {relatedProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">Rs. {product.price}</p>
                    </div>
                  </div>
                  <button className="px-4 py-1 border rounded hover:bg-gray-50">
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>
  
          {/* Expandable Sections */}
          <div className="space-y-2">
            {['Features', 'Intended Use', 'Warranty'].map((section) => (
              <div key={section} className="border rounded">
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full px-4 py-3 flex justify-between items-center"
                >
                  <span className="font-medium">{section}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSection === section ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedSection === section && (
                  <div className="px-4 py-3 border-t">
                    <p className="text-sm text-gray-600">
                      {section === 'Features' && 'Product features description...'}
                      {section === 'Intended Use' && 'Intended use description...'}
                      {section === 'Warranty' && 'Warranty information...'}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
  };



  export const ArmBlaster = () => {
    const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M (32-34")');
  const [selectedImage, setSelectedImage] = useState('/NavCompo/AnkleStripe/arm-blaster-black-front_16839b31-cfd2-4447-b12b-a51cfe3799b0.jpg');
  const [expandedSection, setExpandedSection] = useState(null);
  const colors = [
  { name: 'Black', value: 'black' },
  { name: 'Gray', value: 'gray' },
  { name: 'Dark Black', value: 'darkblack' },
  { name: 'Light Gray', value: 'lightgray' },
  { name: 'Military Green', value: 'olive' },
  { name: 'Sand', value: 'tan' },
  { name: 'Stealth', value: 'charcoal' }
  ];
  
  const sizes = [
  'S (28-30")',
  'M (32-34")',
  'L (36-38")',
  'XL (40-42")',
  '2XL (44-46")'
  ];
  
  const relatedProducts = [
  {
    name: 'Gymreapers TRX Knee Sleeves - Dark/Black',
    price: '3,200.00',
    image: '/placeholder.svg?height=60&width=60'
  },
  {
    name: 'Gymreapers Knee Wraps - 14" WeightLifting Knee Support',
    price: '2,100.00',
    image: '/placeholder.svg?height=60&width=60'
  }
  ];
  
  const toggleSection = (section) => {
  setExpandedSection(expandedSection === section ? null : section);
  };
  
  const handleAddToCart = () => {
  addToCart({
    name: "Gymreapers Arm Blaster - Black",
    image : '/NavCompo/AnkleStripe/arm-blaster-black-front_16839b31-cfd2-4447-b12b-a51cfe3799b0.jpg',
    price: '5,300.00',
    quantity: 1,
    total : '5,300.00'
  });
  
  alert(`Product has been added to your cart.`);
  
  };
  
  return (
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Column - Images */}
      <div className="lg:w-1/2 space-y-4">
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={selectedImage}
            alt="10MM SINGLE PRONG BELT"
            className="w-full h-full object-cover"
          />
        </div>
    
  <div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/arm-blaster-black-flat.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/arm-blaster-black-handle.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/arm-blaster-red-front.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <img src='/NavCompo/AnkleStripe/arm-blaster-green-front.jpg' alt=''
        className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden" />
        </div>
          
          <div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <button
            onClick={() => setSelectedImage('/NavCompo/Equipment/military-green-hip-bands-3-pack-bands-and-bag.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/arm-blaster-green-front_d26c6893-9f4c-4264-95c0-19b60ae0de86.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-60 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/Arm-Blaster-Details.jpg"
              alt="Thumbnail 3"
              className="w-full h-full object-cover"
            />
          </button>
        
        </div>
      
  
      </div>
  
      {/* Right Column - Product Details */}
      <div className="lg:w-1/2">
        <div className="space-y-6">
          {/* Product Title and Badge */}
          <div className="space-y-2">
            <div className="inline-block bg-emerald-500 text-white text-xs px-2 py-1 rounded">
              LIFETIME WARRANTY
            </div>
            <h1 className="text-2xl font-bold">Gymreapers Arm Blaster - Black

            </h1>
          </div>
  
          {/* Price */}
          <div className="text-xl">
            Rs. 1,800.00
          </div>
  
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600">4.5 Stars (51 Reviews)</span>
          </div>
  
          {/* Color Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Color</label>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.value ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
  
          {/* Size Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Size</label>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
  
          {/* Add to Cart Button */}
          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition-colors "   onClick={handleAddToCart}
          >
            Add to cart
          </button>
  
          {/* Feature Icons */}
          <div className="flex justify-between py-12 border-t border-b">
            <div className="flex flex-col items-center">
              <div className="w-full h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <img src="/NavCompo/Confidence_Badges_L.png" alt="Feature 1"/>
              </div>
            </div>
            {/* Repeat for other feature icons */}
          </div>
  
          {/* Free Shipping Section */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <img src="/NavCompo/a9c7213ff8854905344f0251857dec88.png" alt="Free Shipping" className="w-6 h-6" />
            </div>
            <p className="text-sm">Free shipping when you spend ₹75+</p>
            <p className="text-xs text-gray-500">(2-4 Business days)</p>
          </div>
  
          {/* Pairs Well With */}
          <div className="space-y-4">
            <h3 className="font-medium">Pairs well with</h3>
            <div className="space-y-2">
              {relatedProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">Rs. {product.price}</p>
                    </div>
                  </div>
                  <button className="px-4 py-1 border rounded hover:bg-gray-50">
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>
  
          {/* Expandable Sections */}
          <div className="space-y-2">
            {['Features', 'Intended Use', 'Warranty'].map((section) => (
              <div key={section} className="border rounded">
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full px-4 py-3 flex justify-between items-center"
                >
                  <span className="font-medium">{section}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSection === section ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedSection === section && (
                  <div className="px-4 py-3 border-t">
                    <p className="text-sm text-gray-600">
                      {section === 'Features' && 'Product features description...'}
                      {section === 'Intended Use' && 'Intended use description...'}
                      {section === 'Warranty' && 'Warranty information...'}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
  };



  export const ResistanceBands = () => {
    const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M (32-34")');
  const [selectedImage, setSelectedImage] = useState('/NavCompo/AnkleStripe/black-resistancebands-new-1.jpg');
  const [expandedSection, setExpandedSection] = useState(null);
  const colors = [
  { name: 'Black', value: 'black' },
  { name: 'Gray', value: 'gray' },
  { name: 'Dark Black', value: 'darkblack' },
  { name: 'Light Gray', value: 'lightgray' },
  { name: 'Military Green', value: 'olive' },
  { name: 'Sand', value: 'tan' },
  { name: 'Stealth', value: 'charcoal' }
  ];
  
  const sizes = [
  'S (28-30")',
  'M (32-34")',
  'L (36-38")',
  'XL (40-42")',
  '2XL (44-46")'
  ];
  
  const relatedProducts = [
  {
    name: 'Gymreapers TRX Knee Sleeves - Dark/Black',
    price: '3,200.00',
    image: '/placeholder.svg?height=60&width=60'
  },
  {
    name: 'Gymreapers Knee Wraps - 14" WeightLifting Knee Support',
    price: '2,100.00',
    image: '/placeholder.svg?height=60&width=60'
  }
  ];
  
  const toggleSection = (section) => {
  setExpandedSection(expandedSection === section ? null : section);
  };
  
  const handleAddToCart = () => {
  addToCart({
    name: "Military Resistance Band Set",
    image : '/NavCompo/AnkleStripe/black-resistancebands-new-1.jpg',
    price: '6,300.00',
    quantity: 1,
    total : '6,300.00'
  });
  
  alert(`Product has been added to your cart.`);
  
  };
  
  return (
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Column - Images */}
      <div className="lg:w-1/2 space-y-4">
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={selectedImage}
            alt="10MM SINGLE PRONG BELT"
            className="w-full h-full object-cover"
          />
        </div>
    
  <div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/military-resistance-bands-main_x280.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/military-green-resistance-bands-set-call-outs.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <button
            onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
            className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
          >
            <img
              src="/NavCompo/AnkleStripe/resistance-bands-set-sizes-military.jpg"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </button>
          <img src='/NavCompo/AnkleStripe/black-resistancebands-new-1.jpg' alt=''
        className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden" />
        </div>
          
    
  
      </div>
  
      {/* Right Column - Product Details */}
      <div className="lg:w-1/2">
        <div className="space-y-6">
          {/* Product Title and Badge */}
          <div className="space-y-2">
            <div className="inline-block bg-emerald-500 text-white text-xs px-2 py-1 rounded">
              LIFETIME WARRANTY
            </div>
            <h1 className="text-2xl font-bold">Military Resistance Band Set
            </h1>
          </div>
  
          {/* Price */}
          <div className="text-xl">
            Rs. 1,800.00
          </div>
  
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600">4.5 Stars (51 Reviews)</span>
          </div>
  
          {/* Color Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Color</label>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color.value ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
  
          {/* Size Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Size</label>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
  
          {/* Add to Cart Button */}
          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition-colors "   onClick={handleAddToCart}
          >
            Add to cart
          </button>
  
          {/* Feature Icons */}
          <div className="flex justify-between py-12 border-t border-b">
            <div className="flex flex-col items-center">
              <div className="w-full h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <img src="/NavCompo/Confidence_Badges_L.png" alt="Feature 1"/>
              </div>
            </div>
            {/* Repeat for other feature icons */}
          </div>
  
          {/* Free Shipping Section */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <img src="/NavCompo/a9c7213ff8854905344f0251857dec88.png" alt="Free Shipping" className="w-6 h-6" />
            </div>
            <p className="text-sm">Free shipping when you spend ₹75+</p>
            <p className="text-xs text-gray-500">(2-4 Business days)</p>
          </div>
  
          {/* Pairs Well With */}
          <div className="space-y-4">
            <h3 className="font-medium">Pairs well with</h3>
            <div className="space-y-2">
              {relatedProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-600">Rs. {product.price}</p>
                    </div>
                  </div>
                  <button className="px-4 py-1 border rounded hover:bg-gray-50">
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>
  
          {/* Expandable Sections */}
          <div className="space-y-2">
            {['Features', 'Intended Use', 'Warranty'].map((section) => (
              <div key={section} className="border rounded">
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full px-4 py-3 flex justify-between items-center"
                >
                  <span className="font-medium">{section}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedSection === section ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedSection === section && (
                  <div className="px-4 py-3 border-t">
                    <p className="text-sm text-gray-600">
                      {section === 'Features' && 'Product features description...'}
                      {section === 'Intended Use' && 'Intended use description...'}
                      {section === 'Warranty' && 'Warranty information...'}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
  }