import { useContext } from 'react'
import { FiltersContext } from '../context/filter.jsx'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        (
          filters.color === 'all' ||
          product.color === filters.color
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}
