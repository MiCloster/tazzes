import { useContext } from 'react'
import { FiltersContext } from '../context/filter.jsx'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

 
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        (
          (filters.color === 'all' || product.color === filters.color) &&
          (filters.category === 'all' || product.category === filters.category) &&
          (filters.type === 'all' || product.type === filters.type)
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}
