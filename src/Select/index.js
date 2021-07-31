import React from 'react'
import Select from 'react-select'

const CustomSelect = ({ options, onChange }) => {
  return (
    <Select className="pipeline-select" options={options} onChange={onChange} />
  )
}

export default CustomSelect
