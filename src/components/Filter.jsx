import React from 'react';
import Select from 'react-select';
import { useFilters } from '../hooks/useFilter.js';

export function Filters() {
  const { filters, setFilters } = useFilters();

  const handleChangeColor = selectedOption => {
    setFilters(prevState => ({
      ...prevState,
      color: selectedOption ? selectedOption.value : 'all'
    }));
  };

  const handleChangeType = selectedOption => {
    setFilters(prevState => ({
      ...prevState,
      type: selectedOption ? selectedOption.value : 'all'
    }));
  };

  const colorOptions = [
    { value: 'all', label: 'All' },
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' }
  ];

  const typeOptions = [
    { value: 'all', label: 'All' },
    { value: 'glass', label: 'Glass' },
    { value: 'ceramic', label: 'Ceramic' }
  ];

  return (
    <section className='filters-container'>
      <div className='filter'>
        <label htmlFor='colorSelect'>Color</label>
        <Select
          id='colorSelect'
          onChange={handleChangeColor}
          options={colorOptions}
          defaultValue={colorOptions[0]} // Seleccionar la opción predeterminada
        />
      </div>

      <div className='filter'>
        <label htmlFor='typeSelect'>Type</label>
        <Select
          id='typeSelect'
          onChange={handleChangeType}
          options={typeOptions}
          defaultValue={typeOptions[0]} 
        />
      </div>
    </section>
  );
}
