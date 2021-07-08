import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { tint, shade } from 'polished'
import { ReactComponent as UPlogo } from './icon.svg'
import Button, { StyledButton } from '../Button/BaseButton'
import Pipeline from '@pipeline-ui-2/pipeline'

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
    <UPlogo className={'r-ff-icon'} size={size} />
    {children}
  </React.Fragment>
)

const UPortButtonSolid = ({ className, children, ...props }) => {
  return (
    <StyledButtonSolid className={className} {...props}>
      <ButtonBody children={children} size={props.size} />
    </StyledButtonSolid>
  )
}

const UPortButtonOutline = ({ className, children, ...props }) => {
  return (
    <StyledButtonOutline className={className} {...props}>
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

UPortButtonSolid.defaultProps = defaultProps
UPortButtonOutline.defaultProps = defaultProps

let UPortButton

UPortButton = UPortButtonOutline
UPortButton.Solid = UPortButtonSolid
UPortButton.Outline = UPortButtonOutline

UPortButton.propTypes = {
  ...Button.propTypes,
}

UPortButton.displayName = 'UPortButton'

const AlgoSendButton = ({
  asset,
  recipient,
  amount,
  note,
  myAddress,
  wallet,
  context,
  returnTo,
  ...props
}) => {
  return (
    <div>
      <UPortButton
        {...props}
        onClick={() => {
          if (asset == 'Algorand') {
            Pipeline.send(
              recipient,
              parseInt(amount),
              note,
              myAddress,
              wallet
            ).then(data => {
              if (typeof data !== 'undefined') {
                const object = {}
                object[returnTo] = data
                context.setState(object)
              }
            })
          } else {
            Pipeline.sendASA(
              recipient,
              parseInt(amount),
              note,
              myAddress,
              wallet,
              parseInt(asset)
            ).then(data => {
              if (typeof data !== 'undefined') {
                const object = {}
                object[returnTo] = data
                context.setState(object)
              }
            })
          }
        }}
      >
        Send
      </UPortButton>
    </div>
  )
}

export default AlgoSendButton
