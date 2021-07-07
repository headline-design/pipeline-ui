import React from 'react';
import { Button, AlgoButton, AlgoSendButton } from 'pipeline-ui'

export default {
  title: 'Buttons'
}

export const solid = () => (
  <Button>
    Solid Button
  </Button>
)

export const outline = () => (
  <Button.Outline>
    Outline Button
  </Button.Outline>
)

export const text = () => (
  <Button.Text>
    Text Button
  </Button.Text>
)

export const AlgoSolid = () => (
  <AlgoButton>
    Connect with MyAlgo
  </AlgoButton>
)
