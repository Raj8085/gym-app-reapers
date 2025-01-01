/* eslint-disable react/prop-types */
import { ProductCard } from "../../../components/Insider/Products/ProductCard"

// eslint-disable-next-line react/prop-types
export const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </div>
  )
}

