import React from 'react'
import Flex from '../Flex'

const PipelineShell = React.forwardRef((props, ref) => (
  <Flex ref={ref} {...props} />
))

PipelineShell.defaultProps = {
  display: 'flex',
  className: 'pipeline-shell',
  background: '#fff',
  boxShadow: '0 30px 60px 0 rgb(90 116 148/40%),4px 4px 0 0 rgb(210 210 249)',
  borderRadius: '10px',
  maxWidth: '700px',
  margin: '0 auto',
  overflow: 'hidden',
  flexDirection: 'column',
  textAlign: 'center',
}

PipelineShell.propTypes = {
  ...Flex.propTypes,
}

PipelineShell.displayName = 'Pipeline-Shell'

export default PipelineShell
