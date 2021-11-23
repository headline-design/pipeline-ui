import Pipeline from '../Pipeline'
import Select from '../Select'
import Button from '../Button'
import React from 'react'

const options = [
  { value: 'myAlgoWallet', label: 'MyAlgo' },
  { value: 'WalletConnect', label: 'WalletConnect' },
  { value: 'AlgoSigner', label: 'AlgoSigner' },
]

const MultiWalletConnect = props => {
  return (
    <div>
      <Select
        id="walletswitch"
        placeholder="Select a Wallet"
        onChange={() => {
          Pipeline.pipeConnector = document.getElementById('walletswitch').value
        }}
        options={options}
      />
      <br />
      <Button
        onClick={() => {
          Pipeline.connect(props.wallet).then(accounts => {
            if (props.returnTo !== undefined) {
              const data = {}
              data[props.returnTo] = accounts
              props.context.setState(data)
            }
            if (typeof props.onChange === 'function') {
              props.onChange(accounts)
            }
          })
        }}
      >
        Connect
      </Button>
    </div>
  )
}

export default MultiWalletConnect
