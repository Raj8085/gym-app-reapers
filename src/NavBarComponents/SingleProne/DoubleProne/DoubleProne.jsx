
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
    name: "Gymreapers Weightlifting Belt | 7mm Leather Back Support",
    price: 5300.00,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/NavCompo/DoubleProne/7mm-belt-brown-front-angle-main.jpg",
  },

  {
    id: "2",
    name: "Gymreapers Weightlifting Belt | 7mm Leather Weight Lifting Belt - Brown",
    price: 5300.00,
    rating: 4.9,
    colors: ["black"],
    image: "/NavCompo/DoubleProne/7mm-belt-black-front-angle.jpg",
  },
 
  {
    id: "3",
    name: "Gymreapers Weightlifting Belt |  6mm Weightlifting Belt",
    price: 5300.00,
    rating: 4.5,
    colors: ["black", "red", "blue", "green"],
    image: "/NavCompo/DoubleProne/6mm-belt-black-main.jpg",
  },
  {
    id: "4",
    name: "Gymreapers Weightlifting Belt |  Leather Weightlifting Belt",
    price: 5300.00,
    rating: 4.9,
    colors: ["gray", "black", "red", "blue"],
    image: "/NavCompo/DoubleProne/leather-weightlifting-belt-main.jpg",
  }, 
]

export function DoubleProne() {
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

export default DoubleProne;





// This would typically come from an API
const initialProducts1 = [
  {
    id: "1",
    name: "Black/Black",
    price: 5300.00,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/NavCompo/DipBelts/Knee-Sleeve-Black-Black-side-by-side_efc37093-5a6f-4b58-ae38-da47bf68f168.jpg",
  },

  {
    id: "2",
    name: "Ranger Green/Black",
    price: 5300.00,
    rating: 4.9,
    colors: ["black"],
    image: "/NavCompo/DipBelts/7mm-knee-sleeves-green-black-main.jpg",
  },
 
  {
    id: "3",
    name: "Black/Red",
    price: 5300.00,
    rating: 4.5,
    colors: ["black", "red", "blue", "green"],
    image: "/NavCompo/DipBelts/7mm-knee-sleeves-red-main.jpg",
  },
  {
    id: "4",
    name: "Black/White",
    price: 5300.00,
    rating: 4.9,
    colors: ["gray", "black", "red", "blue"],
    image: "/NavCompo/DipBelts/Knee-Sleeve-Black-Black-Front-Back_b46c055f-c4d0-4cfa-812c-dd407a85e5cc.jpg",
  }, 
]

export function KneeSleeves() {
  const [products, setProducts] = useState(initialProducts1)
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
    let filteredProducts = [...initialProducts1]

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




const initialProducts2 = [
  {
    id: "1",
    name: "Gymreapers Knee Wraps - Gray",
    price: 2700.00,
    rating: 4.5,
    colors: ["red", "black", "blue", "green"],
    image: "/NavCompo/DoubleProne/knee-wrap-gray-main.jpg",
  },

  {
    id: "2",
    name: "Gymreapers Knee Wraps - Navy",
    price: 2700.00,
    rating: 4.9,
    colors: ["black"],
    image: "/NavCompo/DoubleProne/knee-wrap-navy-main.jpg",
  },
 
  {
    id: "3",
    name: "Gymreapers Knee Wraps - Pink",
    price: 2700.00,
    rating: 4.5,
    colors: ["black", "red", "blue", "green"],
    image: "/NavCompo/DoubleProne/knee-wrap-pink-main.jpg",
  },
  {
    id: "4",
    name: "Gymreapers Knee Wraps - Tan",
    price: 2700.00,
    rating: 4.9,
    colors: ["gray", "black", "red", "blue"],
    image: "/NavCompo/DoubleProne/knee-wrap-tan-main.jpg",
  }, 
  {
    id: "5",
    name: "Gymreapers Knee Wraps - Red/White",
    price: 2700.00,
    rating: 4.9,
    colors: ["gray", "black", "red", "blue"],
    image: "/NavCompo/DoubleProne/knee-wrap-red-main_72550f1c-ae4c-441b-97b4-9d8713b5c339.jpg",
  }, 
  {
    id: "6",
    name: "Gymreapers Knee Wraps - Green",
    price: 2700.00,
    rating: 4.9,
    colors: ["gray", "black", "red", "blue"],
    image: "/NavCompo/DoubleProne/knee-wrap-tan-main.jpg",
  }, 
  {
    id: "7",
    name: "Gymreapers Knee Wraps - Red",
    price: 2700.00,
    rating: 4.9,
    colors: ["gray", "black", "red", "blue"],
    image: "/NavCompo/DoubleProne/knee-wrap-black-red-main.jpg",
  }, 
  {
    id: "8",
    name: "Gymreapers Knee Wraps - White",
    price: 2700.00,
    rating: 4.9,
    colors: ["gray", "black", "red", "blue"],
    image: "/NavCompo/DoubleProne/knee-wrap-white-main.jpg",
  }, 
  {
    id: "9",
    name: "Gymreapers Knee Wraps - Black",
    price: 2700.00,
    rating: 4.9,
    colors: ["gray", "black", "red", "blue"],
    image: "/NavCompo/DoubleProne/knee-wrap-black-main.jpg",
  }, 
]

export function KneeWraps() {
  const [products, setProducts] = useState(initialProducts2)
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
    let filteredProducts = [...initialProducts2]

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