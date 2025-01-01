import { Headphones, Package, SmilePlus, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CategoryGrid() {
  const categories = [
    {
      title: "MEN'S APPAREL",
      image: "/Catogory-grid/Mens_Apparel_788b1e9a-c253-489a-b759-a3a09c650727.jpg",
      href: "/mens"
    },
    {
      title: "WOMEN'S APPAREL",
      image: "/Catogory-grid/womens_apparel_1009e9fc-8c6c-47d6-bf45-fd327b897987.jpg",
      href: "/womens"
    },
    {
      title: "SUPPORT GEAR",
      image: "/Catogory-grid/category_ImagesArtboard_3.jpg",
      href: "/gear"
    },
    {
      title: "WRAPS & STRAPS",
      image: "/Catogory-grid/category_ImagesArtboard_4.jpg",
      href: "/accessories"
    }
  ]

  const features = [
    {
      title: "CUSTOMER SERVICE",
      description: "Available M-F, 8:00am to 5:00pm (MST)",
      icon: Headphones
    },
    {
      title: "FREE SHIPPING ON ORDERS $75+",
      description: "Free US Domestic Shipping when you spend $75 or more!",
      icon: Package
    },
    {
      title: "EASY RETURNS",
      description: "Buy with confidence and enjoy painless, hassle-free returns!",
      icon: SmilePlus
    },
    {
      title: "SECURE PAYMENT",
      description: "Shop safely and securely knowing your experience is protected",
      icon: Lock
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {categories.map((category, index) => (
          <Link
            key={index} 
            href={category.href}
            className="relative group overflow-hidden block"
          >
            <div className="aspect-[3/4] relative">
              <img
                src={category.image}
                alt={category.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold tracking-wider">
                  {category.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Shop All Products */}
      <div className="text-center mb-16">
        <Link 
          href="/products" 
          className="text-2xl font-bold tracking-wider hover:underline"
        >
          SHOP ALL PRODUCTS
        </Link>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="font-bold mb-2 text-sm tracking-wider">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

