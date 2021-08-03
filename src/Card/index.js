import React from 'react'
import PropTypes from 'prop-types'
import Box from '../Box'

const Card = React.forwardRef((props, ref) => (
  <Box className="pipeline-card" ref={ref} {...props} />
))

Card.defaultProps = {
  position: 'relative',
  bg: '#ffffff',
  border: 1,
  borderColor: '#dadde1',
  boxShadow: '0px 1px 10px',
  p: 4,
}

Card.propTypes = {
  ...Box.propTypes,
  theme: PropTypes.object,
}

Card.displayName = 'Card'

/*
class App extends Component{
  render(){
    return (
      <Card>hello</Card>
    )
  }
} */

export default Card
