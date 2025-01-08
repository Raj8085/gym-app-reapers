
import { useState, useEffect } from "react"
import { FilterSidebar } from "../../components/Insider/Products/FilterSidebar"
import { ProductGrid } from "../../components/Insider/Products/ProductGrid"

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
    name: "Basic Shirt 3-Pack Bundle",
    price: 6600.00,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/Men/short-sleeve-shirt-variety-main.jpg",
  },

  {
    id: "2",
    name: "Basic Shirt 5-Pack",
    price: "9,600.00",
    rating: 5.0,
    colors: ["gray", "black", "red", "blue"],
    image: "/Men/basic-shirt-5-pack-main.jpg",
  },
 
  {
    id: "3",
    name: "Performance Short Sleeve Shirts 3-Pack",
    price: "9,200.00",
    rating: 4.5,
    colors: ["black", "red", "blue", "green"],
    image: "/Men/short-sleeve-shirt-bundle-black-main.jpg",
  },
  {
    id: "4",
    name: "Basic Shirt - Stone/Black",
    price: 2700.00,
    rating: 4.9,
    colors: ["gray", "black", "red", "blue"],
    image: "/Men/StoneandBlackv2.jpg",
  },
  {
    id: "5",
    name: "Core Skull Shirt - Black/White",
    price: 2700.00,
    rating: 4.9,
    colors: ["green", "black", "red", "blue"],
    image: "/Men/short-sleeve-shirt-black-main_3029879e-1b6c-4716-b313-0a232667d6e7.jpg",
  },
  {
    id: "6",
    name: "REAPER Tee - Black/White",
    price: "2700.00",
    rating: 4.9,
    colors: ["black", "red", "blue", "green", "gray"],
    image: "/Men/reaper-tee-black-white-front.jpg",
  },
  {
    id: "7",
    name: "REAPER Tee - Black/Gray",
    price: 2700.00,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/Men/reaper-tee-black-green-front_d2a43f6c-88d0-4a24-838c-8d74bb419cd2.jpg",
  },  
  {
    id: "8",
    name: "REAPER Tee - Military Green/Black",
    price: 2700.00,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/Men/REAPER_RGB.jpg",
  },  
  {
    id: "8",
    name: "Core Skull Shirt - Gray",
    price: 2700.00,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/Men/performance-short-sleeve-steel-front_e7bf0d79-b004-44a5-9ff5-f4ee3751a21d.jpg",
  },  
  {
    id: "9",
    name: "Performance Short Sleeve Shirt - Obsidian",
    price: 3500.00,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/Men/performance-short-sleeve-obsidian-main.jpg",
  },  
  {
    id: "10",
    name: "Core Logo Shirt - Green/Black",
    price: "2700.00",
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/Men/OliveBlackText.jpg",
  },  
  {
    id: "11",
    name: "Core Skull Shirt - Green/Black",
    price: "2700.00",
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/Men/OliveBlackSkullcopy.jpg",
  },  
  {
    id: "12",
    name: "Core Skull Shirt - Navy",
    price: "2700.00",
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/Men/Navy_WhiteFront.jpg",
  },  {
    id: "13",
    name: "Men/iron-tee-black-white",
    price: "2700.00",
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/Men/iron-tee-black-white-main.jpg",
  },  {
    id: "14",
    name: "Men/core-skull-shirt-cardinal-black",
    price: "2700.00",
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/Men/core-skull-shirt-cardinal-black-front.jpg",
  } ,
  {
    id: "15",
    name: "Men/core-skull-shirt-black-white-front",
    price: "2700.00",
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/Men/core-skull-shirt-black-white-front.jpg",
  }  
  
]

export function MenTshirt() {
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


