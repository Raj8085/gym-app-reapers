import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProductGrid from './components/Product/ProductOne/ProductGrid';
import ProductPage, { ProductPageTwo } from './components/Product/ProductOne/Page';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
// import ProductThirdGrid from './components/Product/ProductOne/ProductThird/ProductThirdGrid';
import ProductThirdDetails from './components/Product/ProductOne/ProductThird/ProductDetailsThird';
import ProductFourthDetails from './components/Product/ProductOne/ProductFourth/ProductFourth';
import Footer from '../src/components/Footer/Footer';
import ProductFifthDetails from './components/Product/ProductOne/ProductFifth/ProductFifth';
import { CartProvider } from './components/ContextCart/CartContext';
import Checkout from './components/ContextCart/Checkout';
import { FilterProvider } from './components/ContextCart/FilterContext';
import ProductsPageInside from './components/Insider/Products/Page';
// import Footer from './components/Footer/Footer';

function AppContent() {
  const location = useLocation();

  // Render Navbar and HeroSection only on the home page
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && (
        <>
          {/* <Navbar /> */}
          <HeroSection />
        </>
      )}
      <div className="content">
   
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductPageTwo/>}/>
          <Route path="/productsthree/:id" element={<ProductThirdDetails/>}/>
          <Route path='/productsFourth/:id' element={<ProductFourthDetails/>}/>
          <Route path='/productsFifth/:id' element={<ProductFifthDetails/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          {/* <Route path='/leverbelts' element={<ProductsPageInside/>}/> */}
          <Route path="/nav-item" element={<ProductsPageInside/>} />
        </Routes>
      </div>
    </>
  );
}


function App() {
  return (
    <Router>
      <CartProvider>
      <Navbar />
      <FilterProvider>
      <AppContent />
      </FilterProvider>
      <Footer/>
      </CartProvider>
    </Router>
  );
}
export default App;




// const App = () => {
//   return (
//     <div>
//       <ProductsPageInside/>
//     </div>
//   )
// }

// export default App
