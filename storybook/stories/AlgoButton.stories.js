import React from 'react';
import { AlgoButton } from 'pipeline-ui'
import Pipeline from '@pipeline-ui-2/pipeline'

const myAlgoWallet = Pipeline.init();

export default {
  title: 'AlgoButton'
}

export const algobutton = () => (
  <AlgoButton wallet={myAlgoWallet}/>
)
