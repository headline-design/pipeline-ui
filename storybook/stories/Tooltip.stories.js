import React from 'react';
import { Tooltip } from 'pipeline-ui'

export default {
  title: 'Tooltip'
}

export const tooltip = () => (
  <Tooltip message="Top tooltip" placement="top">
    <span>hover over me</span>
  </Tooltip>
)
