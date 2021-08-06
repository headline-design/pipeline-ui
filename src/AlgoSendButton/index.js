import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { tint, shade } from 'polished'
import { ReactComponent as UPlogo } from './icon.svg'
import Button, { StyledButton } from '../Button/BaseButton'
import Pipeline from '../Pipeline'

const brandColors = {
  baseColor: '#5c50ca',
  hoverColor: tint(0.1, '#5c50ca'),
  activeColor: shade(0.1, '#5c50ca'),
  foregroundColor: '#FFFFFF',
}

const UPStyledButton = styled(StyledButton)`
  & {
    transition: all 0.15s ease;
  }

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  && > svg.r-up-icon {
    height: ${props => (props.size === 'small' ? '16px' : '24px')};
    width: ${props => (props.size === 'small' ? '16px' : '24px')};
    margin-right: 0.5rem;
  }
`

const StyledButtonSolid = styled(UPStyledButton)`
  & {
    color: ${brandColors.foregroundColor};
    background: ${brandColors.baseColor};
  }
  &:hover {
    background-color: ${brandColors.hoverColor};
  }
  &:active {
    background-color: ${brandColors.activeColor};
  }
  > svg:first-child {
    fill: ${brandColors.foregroundColor};
  }
`

const StyledButtonOutline = styled(UPStyledButton)`
  & {
    color: #333;
    background: ${brandColors.foregroundColor};
    border: 1px solid #ccc;
  }
  &:hover {
    background-color: #f3f2f2;
  }
  &:active {
    background-color: #e4e4e4;
  }
`

const ButtonBody = ({ children, size }) => (
  <React.Fragment>
    <UPlogo className={'algosend-icon'} size={size} />
    {children}
  </React.Fragment>
)

const AlgoSendButtonBSolid = ({ className, children, ...props }) => {
  return (
    <StyledButtonSolid className={'algosend-solid'} {...props}>
      <ButtonBody children={children} size={props.size} />
    </StyledButtonSolid>
  )
}

const AlgoSendButtonBOutline = ({ className, children, ...props }) => {
  return (
    <StyledButtonOutline className={'algosend-outline'} {...props}>
      <ButtonBody children={children} size={props.size} />
    </StyledButtonOutline>
  )
}

const defaultProps = {
  ...Button.defaultProps,
  width: [1, 'auto'],
  borderRadius: 1,
  boxShadow: 1,
}

AlgoSendButtonBSolid.defaultProps = defaultProps
AlgoSendButtonBOutline.defaultProps = defaultProps

let AlgoSendButtonB

AlgoSendButtonB = AlgoSendButtonBOutline
AlgoSendButtonB.Solid = AlgoSendButtonBSolid
AlgoSendButtonB.Outline = AlgoSendButtonBOutline

AlgoSendButtonB.propTypes = {
  ...Button.propTypes,
}

AlgoSendButtonB.displayName = 'AlgoSendButtonB'

const AlgoSendButton = props => {
  return (
    <div>
      <AlgoSendButtonB
        className="AlgoSendButton"
        onClick={() => {
          Pipeline.send(
            props.recipient,
            parseInt(props.amount || 1),
            props.note || '',
            Pipeline.myAddress,
            props.wallet,
            props.index || 0
          ).then(data => {
            if (typeof data !== 'undefined') {
              if (props.returnTo !== undefined) {
                const object = {}
                object[props.returnTo] = data
                props.context.setState(object)
              }
              if (typeof props.onChange === 'function') {
                props.onChange(data)
              }
            }
          })
        }}
      >
        Send
      </AlgoSendButtonB>
    </div>
  )
}

export default AlgoSendButton
