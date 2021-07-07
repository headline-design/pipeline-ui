import React from 'react';
import { AlgoSendButton } from 'pipeline-ui'
import Pipeline from '@pipeline-ui-2/pipeline'

const myAlgoWallet = Pipeline.init();

export default {
  title: 'AlgoSendButton'
}

export const algosendbutton = () => (
  <AlgoSendButton wallet={myAlgoWallet}/>
)
