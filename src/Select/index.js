import React from 'react'
import Select from 'react-select'

const CustomSelect = ({ options, onChange }) => {
  return <Select options={options} onChange={onChange} />
}

export default CustomSelect
