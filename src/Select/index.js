import React from 'react'
import Select from 'react-select'

const CustomSelect = React.forwardRef((props, ref) => (
  <Select ref={ref} {...props} />
))

CustomSelect.defaultProps = {
  className: 'pipeline-select',
}

CustomSelect.propTypes = {
  ...Select.propTypes,
}

CustomSelect.displayName = 'Select'

export default CustomSelect
