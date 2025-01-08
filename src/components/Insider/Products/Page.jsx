
import { useState, useEffect } from "react"
import { FilterSidebar } from "../../../../src/components/Insider/Products/FilterSidebar"
import { ProductGrid } from "../../../components/Insider/Products/ProductGrid"

// This would typically come from an API
const filterSections = [
  {
    title: "Category",
    options: [
      { id: "backpacks", label: "Backpacks", count: 7 },
      { id: "lever", label: "Lever", count: 10 },
    ],
  },
  {
    title: "Gender",
    options: [
      { id: "men", label: "Men", count: 15 },
      { id: "women", label: "Women", count: 12 },
    ],
  },
  {
    title: "Size",
    options: [
      { id: "small", label: "Small", count: 8 },
      { id: "medium", label: "Medium", count: 10 },
      { id: "large", label: "Large", count: 7 },
    ],
  },
  {
    title: "Color",
    options: [
      { id: "black", label: "Black", count: 12 },
      { id: "red", label: "Red", count: 8 },
      { id: "blue", label: "Blue", count: 6 },
      { id: "green", label: "Green", count: 4 },
      { id: "gray", label: "Gray", count: 5 },
    ],
  },
]

// This would typically come from an API
const initialProducts = [
  {
    id: "1",
    name: "10MM Lever Belt - Red",
    price: 11300,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/ProductGridImage/10mm-lever-belt-red-main_2.jpg",
  },

  {
    id: "2",
    name: "13mm Lever Belt",
    price: "12,200.00",
    rating: 5.0,
    colors: ["black"],
    image: "/LeverBelt/13mm-lever-belt-black-main.jpg",
  },
 
  {
    id: "3",
    name: "10MM Lever Belt - Black",
    price: "11,300.00",
    rating: 4.5,
    colors: ["black", "red", "blue", "green"],
    image: "/ProductGridImage/10mm-lever-belt-black-main_1.jpg",
  },
  {
    id: "4",
    name: "10MM Lever Belt - Gray",
    price: 11300,
    rating: 4.9,
    colors: ["gray", "black", "red", "blue"],
    image: "/ProductGridImage/10mm-lever-belt-gray-main_2.jpg",
  },
  {
    id: "5",
    name: "10MM Lever Belt - Military Green",
    price: 11300,
    rating: 4.9,
    colors: ["green", "black", "red", "blue"],
    image: "/LeverBelt/10mm-belt-military-green-back.jpg",
  },
  {
    id: "6",
    name: "10MM Lever Belt - Black/Black",
    price: "11300.00",
    rating: 4.9,
    colors: ["black", "red", "blue", "green", "gray"],
    image: "/ProductGridImage/10mm-lever-belt-black-back.jpg",
  },
  {
    id: "7",
    name: "10MM Lever Belt - Midnight Camo",
    price: 11300,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/LeverBelt/midnight-Camo-Lever-Belt-main.jpg",
  },  
  {
    id: "8",
    name: "10MM Lever Belt - Navy",
    price: 11300,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/LeverBelt/10mm-lever-belt-navy-main.jpg",
  },  
  {
    id: "8",
    name: "10MM Lever Belt - White Camo",
    price: 11300.00,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/LeverBelt/10mm-belt-white-camo-main.jpg",
  },  
  {
    id: "9",
    name: "10MM Lever Belt - Woodland Camo",
    price: 11300.00,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/LeverBelt/10mm-woodland-camo-main.jpg",
  },  
  {
    id: "10",
    name: "Gymreapers Lever Belt Attachment",
    price: "2700.00",
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/LeverBelt/lever-attachment-full-gray-background.png",
  },  
  {
    id: "11",
    name: "Gravestone™ Backpack & 10mm Lever Belt Combo - OD Green",
    price: "24,400.00",
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/LeverBelt/gravestone_backpack_lever_green.jpg",
  },  
  {
    id: "12",
    name: "Gravestone™ Backpack & 10mm Lever Belt Combo - Desert Sand/Black",
    price: "24,400.00",
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/LeverBelt/gravestone_backpack_lever_sand.jpg",
  },  {
    id: "13",
    name: "Gravestone™ Backpack & 10mm Lever Belt Combo - Gunmetal/Gray",
    price: "24,400.00",
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/LeverBelt/gravestone_backpack_lever_gunmetal.jpg",
  },  {
    id: "14",
    name: "Gravestone™ Duffle & 10mm Lever Belt Combo - Gunmetal/Gray",
    price: "26,100.00",
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/LeverBelt/gravestone_duffle_lever_gunmetal.jpg",
  }  
]

export function ProductsPageInside() {
  const [products, setProducts] = useState(initialProducts)
  const [sortBy, setSortBy] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)
  const [activeFilters, setActiveFilters] = useState({})

  // Handle filter changes
  const handleFilterChange = (section, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [value]: !prev[section]?.[value]
      }
    }))
  }

  // Clear all filters
  const handleClearFilters = () => {
    setActiveFilters({})
    setProducts(initialProducts)
  }

  // Apply filters and sorting
  useEffect(() => {
    let filteredProducts = [...initialProducts]

    // Apply filters
    Object.entries(activeFilters).forEach(([section, values]) => {
      const activeValues = Object.entries(values)
        .filter(([, isActive]) => isActive)
        .map(([value]) => value)

      if (activeValues.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
          if (section === 'Color') {
            return product.colors.some(color => activeValues.includes(color.toLowerCase()))
          }
          // Add other filter logic here
          return true
        })
      }
    })

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        filteredProducts.sort((a, b) => b.id - a.id)
        break
      default:
        // Featured sorting (default)
        break
    }

    setProducts(filteredProducts)
  }, [activeFilters, sortBy])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <button
            className="flex items-center text-sm font-medium text-gray-700 lg:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </button>
          <div className="flex items-center">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="ml-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="pt-6 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <div className={`${showFilters ? 'fixed inset-0 z-40 flex lg:hidden' : 'hidden lg:block'}`}>
              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl sm:max-w-sm lg:h-auto lg:max-w-none lg:shadow-none">
                <FilterSidebar 
                  sections={filterSections} 
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </div>

            {/* Product grid */}
            <div className="lg:col-span-3">
              <ProductGrid products={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPageInside;

