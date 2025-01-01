/* eslint-disable react/prop-types */
import { Star } from 'lucide-react'

export const ProductCard = ({
  // eslint-disable-next-line react/prop-types
  name,
  // eslint-disable-next-line react/prop-types
  price,
  // eslint-disable-next-line react/prop-types
  rating,
  // eslint-disable-next-line react/prop-types
  colors,
  // eslint-disable-next-line react/prop-types
  image,
  // eslint-disable-next-line react/prop-types
  selectedColor,
  // eslint-disable-next-line react/prop-types
  onColorSelect,
}) => {
  const getColorClass = (color) => {
    const colorClasses = {
      black: 'bg-black',
      red: 'bg-red-600',
      blue: 'bg-blue-600',
      green: 'bg-green-700',
      gray: 'bg-gray-500'
    }
    return colorClasses[color] || ''
  }

  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <div className="absolute top-2 left-2 z-10 bg-emerald-500 text-white text-xs px-2 py-1 rounded">
          LIFETIME WARRANTY
        </div>
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <div className="flex items-center">
            <span className="mr-1 text-sm">{rating}</span>
            <Star className="h-4 w-4 fill-primary" />
          </div>
        </div>
        <p className="text-sm font-medium text-gray-900">Rs. {price.toLocaleString()}</p>
        <div className="flex gap-1">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onColorSelect?.(color)}
              className={`h-4 w-4 rounded-full border border-gray-300 ${getColorClass(color)} ${
                selectedColor === color ? 'ring-2 ring-offset-1 ring-black' : ''
              }`}
            />
          ))}
          {colors.length > 5 && (
            <span className="text-xs text-gray-500 ml-1">+{colors.length - 5} More</span>
          )}
        </div>
      </div>
    </div>
  )
}

