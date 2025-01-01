/* eslint-disable react/prop-types */
import { useState } from "react"
import { ChevronDown } from 'lucide-react'

// eslint-disable-next-line react/prop-types
export const FilterSidebar = ({ sections, onFilterChange, onClearFilters }) => {
  const [expandedSections, setExpandedSections] = useState(sections.map(s => s.title))
  const [selectedFilters, setSelectedFilters] = useState({})

  const toggleSection = (title) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
  }

  const handleFilterChange = (section, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [value]: !prev[section]?.[value]
      }
    }))
    onFilterChange(section, value)
  }

  const clearFilters = () => {
    setSelectedFilters({})
    onClearFilters?.()
  }

  return (
    <div className="w-64 pr-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Filters</h2>
          <button 
            className="text-sm text-gray-500 hover:text-gray-700"
            onClick={clearFilters}
          >
            Clear all
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm">In stock only</span>
          <button
            role="switch"
            className="relative inline-flex h-5 w-9 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-gray-200"
            onClick={() => handleFilterChange('stock', 'inStock')}
          >
            <span className={`${
              selectedFilters.stock?.inStock ? 'translate-x-4' : 'translate-x-0'
            } pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`} />
          </button>
        </div>

        {sections.map((section) => (
          <div key={section.title} className="border-t border-gray-200 pt-6">
            <button
              className="flex w-full items-center justify-between text-sm"
              onClick={() => toggleSection(section.title)}
            >
              <span className="font-medium">{section.title}</span>
              <ChevronDown
                className={`h-4 w-4 transform transition-transform ${
                  expandedSections.includes(section.title) ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedSections.includes(section.title) && (
              <div className="mt-4 space-y-3">
                {section.options.map((option) => (
                  <label key={option.id} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      checked={selectedFilters[section.title]?.[option.id] || false}
                      onChange={() => handleFilterChange(section.title, option.id)}
                    />
                    <span className="ml-2 text-sm">{option.label}</span>
                    <span className="ml-1 text-xs text-gray-500">({option.count})</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

