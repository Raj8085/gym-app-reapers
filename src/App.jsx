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
import { CheckoutPage } from './components/Insider/Checkout';
import { DipsBelts, ElbowSleeves, ProductDetailsPage, QuickBelts, StiffWraps, StrengthWraps, WristWraps } from './NavBarComponents/SingleProne/SingleProneBelt';
import DoubleProne, { KneeSleeves, KneeWraps } from './NavBarComponents/SingleProne/DoubleProne/DoubleProne';
import { Figure, Olympic, Padding } from './NavBarComponents/LiftingStraps/LiftingStraps';
import { AnkleStraps, ArmBlaster, BarbellPad, HipBands, ResistanceBands } from './NavBarComponents/Equipment/Equipment';
import { MenTshirt } from './NavBarComponents/Men/Men';
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
          {/* <Route path="/nav-item" element={<ProductsPageInside/>} /> */}
          <Route path="/:category/:section/lever-belts" element={<ProductsPageInside />} />
          <Route path="/:category/:section/bodybuilding" element={<ProductsPageInside />} />
          <Route path="/:category/:section/cross-training" element={<ProductsPageInside />} />
          <Route path="/:category/:section/double-prong-belts" element={<DoubleProne/>} />
          <Route path="/:category/:section/single-prong-belts" element={<ProductDetailsPage/>}/>
          <Route path="/:category/:section/quick-locking-belts" element={<QuickBelts/>}/>
          <Route path="/:category/:section/dip-belts" element={<DipsBelts/>}/>
          <Route path="/:category/:section/strongman" element={<DipsBelts/>}/>
          <Route path="/:category/:section/lever-belts" element={<ProductsPageInside />} />
          <Route path="/:category/:section/gym-kits-&-bundles" element={<ProductsPageInside/>} />
          <Route path="/:category/:section/shop-all" element={<ProductGrid />} />
          <Route path="/:category/:section/lifting-hooks" element={<ProductGrid />} />
          <Route path="/:category/:section/" element={<ProductGrid />} />
          <Route path="/:category/:section/knee-sleeves" element={<KneeSleeves/>} />
          <Route path="/:category/:section/knee-wraps" element={<KneeWraps/>} /> 
          <Route path="/:category/:section/elbow-wraps" element={<KneeWraps/>} />  
        <Route path="/checkout-page" element={<CheckoutPage/>} />
        <Route path="/single-prone" element={<ProductDetailsPage/>} />
        <Route path="/:category/:section/elbow-sleeves" element={<ElbowSleeves/>}/>
        <Route path="/:category/:section/powerlifting" element={<ElbowSleeves/>}/>
        <Route path="/:category/:section/wrist-wraps" element={<WristWraps/>}/>
        <Route path="/:category/:section/stiff-wraps" element={<StiffWraps/>}/>
        <Route path="/:category/:section/strength-wraps" element={<StrengthWraps/>}/>
        <Route path="/:category/:section/padded" element={<Padding/>}/>
        <Route path="/:category/:section/unpadded" element={<Padding/>}/>
        <Route path="/:category/:section/figure-8" element={<Figure/>}/>
        <Route path="/:category/:section/olympic" element={<Olympic/>}/>
        <Route path="/:category/:section/olympic-lifting" element={<Olympic/>}/>

{/* EQUIPMENT */}


<Route path="/:category/:section/hip-bands" element={<HipBands/>}/>
<Route path="/:category/:section/barbell-squat-pad" element={<BarbellPad/>}/>
<Route path="/:category/:section/ankle-straps" element={<AnkleStraps/>}/>
<Route path="/:category/:section/arm-blaster" element={<ArmBlaster/>}/>
<Route path="/:category/:section/resistance-bands" element={<ResistanceBands/>}/>


{/* MEN */}
<Route path="/:category/:section/t-shirts" element={<MenTshirt/>} />



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


