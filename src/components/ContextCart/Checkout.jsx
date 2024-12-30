import { useState } from 'react';
import { useCart } from '../../components/ContextCart/CartContext';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const Checkout = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    coupon, 
    applyCoupon, 
    removeCoupon, 
    getSubtotal, 
    getTotal 
  } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    applyCoupon(couponCode);
  };

  const handleShippingInfoChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    console.log('Proceeding to checkout with:', { items, shippingInfo, paymentMethod });
    alert('Thank you for your purchase!');
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      {/* Cart Items */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {items.map((item) => (
          <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                <p className="text-sm font-medium">{item.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="p-1 bg-gray-200 rounded-md mr-2"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <FaMinus className="h-3 w-3" />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                className="p-1 bg-gray-200 rounded-md ml-2"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <FaPlus className="h-3 w-3" />
              </button>
              <button
                className="ml-4 text-red-500"
                onClick={() => removeFromCart(item.id)}
              >
                <FaTrash className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Coupon */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Coupon</h2>
        {coupon ? (
          <div className="flex items-center">
            <p className="mr-4">Applied coupon: {coupon.code} ({coupon.discount * 100}% off)</p>
            <button 
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={removeCoupon}
            >
              Remove Coupon
            </button>
          </div>
        ) : (
          <form onSubmit={handleCouponSubmit} className="flex">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="border p-2 mr-2"
            />
            <button 
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Apply Coupon
            </button>
          </form>
        )}
      </div>

      {/* Shipping Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={shippingInfo.name}
            onChange={handleShippingInfoChange}
            placeholder="Full Name"
            className="border p-2"
          />
          <input
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={handleShippingInfoChange}
            placeholder="Address"
            className="border p-2"
          />
          <input
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleShippingInfoChange}
            placeholder="City"
            className="border p-2"
          />
          <input
            type="text"
            name="zipCode"
            value={shippingInfo.zipCode}
            onChange={handleShippingInfoChange}
            placeholder="ZIP Code"
            className="border p-2"
          />
          <input
            type="text"
            name="country"
            value={shippingInfo.country}
            onChange={handleShippingInfoChange}
            placeholder="Country"
            className="border p-2"
          />
        </form>
      </div>

      {/* Payment Method */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="credit_card"
              checked={paymentMethod === 'credit_card'}
              onChange={() => setPaymentMethod('credit_card')}
              className="mr-2"
            />
            Credit Card
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
              className="mr-2"
            />
            PayPal
          </label>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>${getSubtotal().toFixed(2)}</span>
        </div>
        {coupon && (
          <div className="flex justify-between mb-2 text-green-600">
            <span>Discount:</span>
            <span>-${(getSubtotal() * coupon.discount).toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded text-lg font-semibold"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;

