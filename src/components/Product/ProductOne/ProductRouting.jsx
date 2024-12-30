import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductGrid from '../../../components/Product/ProductOne/ProductGrid';
import ProductPage from '../../../components/Product/ProductOne/Page';


function ProductRouter() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
    </Router>
  );
}
export default ProductRouter;