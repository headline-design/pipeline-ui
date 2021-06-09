import React from 'react';
import { Select } from 'pipeline-ui'

export default {
  title: 'Select'
}

const options = [
  { value: 'ALGO', label: 'ALGO - Algorand'},
  { value: 'BTC', label: 'BTC - Bitcoin'},
  { value: 'GNO', label: 'GNO - Gnosis'},
  { value: 'GNT', label: 'GNT - Golem'},
  { value: 'REP', label: 'REP - Augur'},
];

export const select = () => (
  <Select options={options} />
)
