import  { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { useCart } from '@/components/ContextCart/CartContext';
import { useNavigate } from 'react-router-dom';


export const ProductDetailsPage = () => {
      const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M (32-34")');
  const [selectedImage, setSelectedImage] = useState('/NavCompo/10mm-single-prong-belt-black-stacked-gray-background_x280.png');
  const [expandedSection, setExpandedSection] = useState(null);
  const navigate = useNavigate();
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
      name: "10MM SINGLE PRONG BELT - BLACK",
      image : "/NavCompo/10mm-single-prong-belt-black-stacked-gray-background_x280.png",
      price: '2,100.00',
      quantity: 1,
      total : '2,100.00'
    });
    
    alert(`${relatedProducts.name} has been added to your cart.`);
    navigate("/single-prone")
    
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
          <div className="flex gap-4">
            <button 
              onClick={() => setSelectedImage('/ProductImages/belt-main.jpg')}
              className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src="/NavCompo/10mm-single-prong-belt-black-skull-gray-background (1).png"
                alt="Thumbnail 1"
                className="w-full h-full object-cover"
              />
            </button>
            <button
              onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
              className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src="/NavCompo/10mm-single-prong-belt-black-prong-gray-background.png"
                alt="Thumbnail 2"
                className="w-full h-full object-cover"
              />
            </button>
            <img src='/NavCompo/size-chart-single-prong-belt-gray-texture-2.jpg' alt=''/>
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
              <h1 className="text-2xl font-bold">10MM SINGLE PRONG BELT - BLACK</h1>
            </div>

            {/* Price */}
            <div className="text-xl">
              Rs. 5,600.00
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








export const DipsBelts = () => {
      const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M (32-34")');
  const [selectedImage, setSelectedImage] = useState('/NavCompo/DipBelts/dip-belt-black-flat-min.jpg');
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
      price: '3,500.00',
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
      name: "Gymreapers Dip Belt - Black",
      image : '/NavCompo/DipBelts/dip-belt-black-flat-min.jpg',
      price: '3,500.00',
      quantity: 1,
      total : '3,100.00'
    });
    
      
    alert(`Gymreapers Dip Belt - Black has been added to your cart.`);
    
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
          <div className="flex gap-4">
            <button 
              onClick={() => setSelectedImage('/ProductImages/belt-main.jpg')}
              className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src="/NavCompo/DipBelts/52b12303-c3dc-4a02-ae3a-0eca0fa21105_large.jpg"
                alt="Thumbnail 1"
                className="w-full h-full object-cover"
              />
            </button>
            <button
              onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
              className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src="/NavCompo/DipBelts/c5e0ec27-6cf3-463a-beab-d29b878b7f6f_large.jpg"
                alt="Thumbnail 2"
                className="w-full h-full object-cover"
              />
            </button>
            <button
              onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
              className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src="/NavCompo/DipBelts/dip-belt-red-flat.jpg"
                alt="Thumbnail 3"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
          <img src='/NavCompo/size-chart-single-prong-belt-gray-texture-2.jpg' alt=''/>

        </div>

        {/* Right Column - Product Details */}
        <div className="lg:w-1/2">
          <div className="space-y-6">
            {/* Product Title and Badge */}
            <div className="space-y-2">
              <div className="inline-block bg-emerald-500 text-white text-xs px-2 py-1 rounded">
                LIFETIME WARRANTY
              </div>
              <h1 className="text-2xl font-bold">Gymreapers Dip Belt - Black</h1>
            </div>

            {/* Price */}
            <div className="text-xl">
              Rs. 3,500.00
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



export const QuickBelts = () => {
  const { addToCart } = useCart();
const [selectedColor, setSelectedColor] = useState('black');
const [selectedSize, setSelectedSize] = useState('M (32-34")');
const [selectedImage, setSelectedImage] = useState('/NavCompo/quick-lock-belt-black-main.jpg');
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
  name: "Gymreapers Quick Locking Weightlifting Belt | Premium Back Support",
  image : '/NavCompo/quick-lock-belt-black-main.jpg',
  price: '3,100.00',
  quantity: 1,
  total : '3,100.00'
});

alert(`${relatedProducts.name} has been added to your cart.`);

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
      <div className="flex gap-4">
        <button 
          onClick={() => setSelectedImage('/ProductImages/belt-main.jpg')}
          className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/quick-lock-belt-black-strapped.jpg"
            alt="Thumbnail 1"
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/quick-lock-belt-black-logo-detail.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
      <img src='/NavCompo/size-chart-single-prong-belt-gray-texture-2.jpg' alt=''/>

    </div>

    {/* Right Column - Product Details */}
    <div className="lg:w-1/2">
      <div className="space-y-6">
        {/* Product Title and Badge */}
        <div className="space-y-2">
          <div className="inline-block bg-emerald-500 text-white text-xs px-2 py-1 rounded">
            LIFETIME WARRANTY
          </div>
          <h1 className="text-2xl font-bold">Gymreapers Quick Locking Weightlifting Belt | Premium Back Support</h1>
        </div>

        {/* Price */}
        <div className="text-xl">
          Rs. 3,100.00
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



export const ElbowSleeves = () => {
  const { addToCart } = useCart();
const [selectedColor, setSelectedColor] = useState('black');
const [selectedSize, setSelectedSize] = useState('M (32-34")');
const [selectedImage, setSelectedImage] = useState('/NavCompo/ElbowSleeves/7mm-knee-sleeves-black-white-front-back.jpg');
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
  name: "Gymreapers 5MM Elbow Sleeves | Weightlifting Elbow Support",
  image : '/NavCompo/ElbowSleeves/7mm-knee-sleeves-black-white-front-back.jpg',
  price: '3,500.00',
  quantity: 1,
  total : '3,500.00'
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
      
        <button 
          onClick={() => setSelectedImage('/ProductImages/belt-main.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/ElbowSleeves/elbow-sleeves-black.jpg"
            alt="Thumbnail 1"
            className="w-full h-full object-cover"
          />
        </button>
        <div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/ElbowSleeves/elbow-sleeves-push.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/ElbowSleeves/elbow-sleeves-push.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/ElbowSleeves/size_chart_elbows.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
      <img src='/NavCompo/ElbowSleeves/Elbow-Sleeves-Product-Info_96b5e691-2b24-4788-8188-bf4f1a60b041.jpg' alt=''
      className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden" />

    </div>

    {/* Right Column - Product Details */}
    <div className="lg:w-1/2">
      <div className="space-y-6">
        {/* Product Title and Badge */}
        <div className="space-y-2">
          <div className="inline-block bg-emerald-500 text-white text-xs px-2 py-1 rounded">
            LIFETIME WARRANTY
          </div>
          <h1 className="text-2xl font-bold">Gymreapers 5MM Elbow Sleeves | Weightlifting Elbow Support
          </h1>
        </div>

        {/* Price */}
        <div className="text-xl">
          Rs. 3,500.00
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


export const WristWraps = () => {
  const { addToCart } = useCart();
const [selectedColor, setSelectedColor] = useState('black');
const [selectedSize, setSelectedSize] = useState('M (32-34")');
const [selectedImage, setSelectedImage] = useState('/NavCompo/Wrist/wrist-wraps-black-white-main.jpg');
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
  name: "Gymreapers Wrist Wraps - 18 | Weightlifting Wrist Support",
  image : '/NavCompo/Wrist/wrist-wraps-black-white-main.jpg',
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
      
        <button 
          onClick={() => setSelectedImage('/ProductImages/belt-main.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/Wrist/wrist-wraps-black-full-flat.jpg"
            alt="Thumbnail 1"
            className="w-full h-full object-cover"
          />
        </button>
        <div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/Wrist/wrist-wraps-black-white-single.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/ElbowSleeves/elbow-sleeves-push.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/Wrist/wrist-wraps-black-bundle (1).jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
      <img src='/NavCompo/ElbowSleeves/Elbow-Sleeves-Product-Info_96b5e691-2b24-4788-8188-bf4f1a60b041.jpg' alt=''
      className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden" />

    </div>

    {/* Right Column - Product Details */}
    <div className="lg:w-1/2">
      <div className="space-y-6">
        {/* Product Title and Badge */}
        <div className="space-y-2">
          <div className="inline-block bg-emerald-500 text-white text-xs px-2 py-1 rounded">
            LIFETIME WARRANTY
          </div>
          <h1 className="text-2xl font-bold">Gymreapers Wrist Wraps - 18&quot; Weightlifting Wrist Support
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


export const StiffWraps = () => {
  const { addToCart } = useCart();
const [selectedColor, setSelectedColor] = useState('black');
const [selectedSize, setSelectedSize] = useState('M (32-34")');
const [selectedImage, setSelectedImage] = useState('/NavCompo/Wrist/stiff-wrist-wraps-green-main.jpg');
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
  name: "Gymreapers Stiff Wrist Wraps - Heavy Duty Wrist Support",
  image : '/NavCompo/Wrist/stiff-wrist-wraps-green-main.jpg',
  price: '1,500.00',
  quantity: 1,
  total : '1,500.00'
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
      
        <button 
          onClick={() => setSelectedImage('/ProductImages/belt-main.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/Wrist/stiff-wrist-wraps-od-green-side.jpg"
            alt="Thumbnail 1"
            className="w-full h-full object-cover"
          />
        </button>
        <div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/Wrist/wrist-wraps-black-white-single.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/ElbowSleeves/elbow-sleeves-push.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/Wrist/wrist-wraps-black-bundle (1).jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <img src='/NavCompo/Wrist/stiff-wrist-wrap-size.jpg' alt=''
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
          <h1 className="text-2xl font-bold">Gymreapers Stiff Wrist Wraps - Heavy Duty Wrist Support
          </h1>
        </div>

        {/* Price */}
        <div className="text-xl">
          Rs. 1,500.00
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


export const StrengthWraps = () => {
  const { addToCart } = useCart();
const [selectedColor, setSelectedColor] = useState('black');
const [selectedSize, setSelectedSize] = useState('M (32-34")');
const [selectedImage, setSelectedImage] = useState('/NavCompo/StrengthWrist/strength-wrap-woodland-1.jpg');
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
  name: "strength Wrist Wraps - Adjustable Support - Camo",
  image : '/NavCompo/StrengthWrist/strength-wrap-woodland-1.jpg',
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
      
        {/* <button 
          onClick={() => setSelectedImage('/ProductImages/belt-main.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/StrengthWrist/strength-wrap-black-1.jpg"
            alt="Thumbnail 1"
            className="w-full h-full object-cover"
          />
        </button> */}

<div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/StrengthWrist/strength-wrap-pink-1.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/StrengthWrist/strength-wrap-red-1.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/Wrist/wrist-wraps-black-bundle (1).jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <img src='/NavCompo/Wrist/stiff-wrist-wrap-size.jpg' alt=''
      className="w-96 h-96 bg-gray-100 rounded-lg overflow-hidden" />
      </div>
        
        <div className="gap-6 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/StrengthWrist/strength-wrap-tan-1.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/StrengthWrist/strength-wrist-wrap-green_29c80213-27c4-47a3-b359-8b6a5ea2e032.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => setSelectedImage('/ProductImages/belt-side.jpg')}
          className="w-80 h-96 bg-gray-100 rounded-lg overflow-hidden"
        >
          <img
            src="/NavCompo/Wrist/wrist-wraps-black-bundle (1).jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover"
          />
        </button>
        <img src='/NavCompo/Wrist/stiff-wrist-wrap-size.jpg' alt=''
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
          <h1 className="text-2xl font-bold">Strength Wrist Wraps - Adjustable Support - Camo
     
          </h1>
        </div>

        {/* Price */}
        <div className="text-xl">
          Rs. 1,500.00
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