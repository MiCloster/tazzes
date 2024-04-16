import { useId } from 'react'
import { useFilters } from '../hooks/useFilter.js'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const colorFilterId = useId()

  const handleChangeColor = (event) => {
    setFilters(prevState => ({
      ...prevState,
      color: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={colorFilterId}>Categoría</label>
        <select id={colorFilterId} onChange={handleChangeColor}>
          <option value='all'>Todas</option>
          <option value='red'>Portátiles</option>
          <option value='blue'>Celulares</option>
        </select>
      </div>

    </section>

  )
}
