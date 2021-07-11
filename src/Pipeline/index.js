import MyAlgo from '@randlabs/myalgo-connect'

export default class Pipeline {
  static init() {
    return new MyAlgo()
  }

  static async connect(wallet) {
    try {
      const accounts = await wallet.connect()
      let item1 = accounts[0]
      item1 = item1['address']
      return item1
    } catch (err) {
      console.error(err)
    }
  }

  static async send(address, amt, myNote, sendingAddress, wallet, index = 0) {
    const algodToken = '0'
    const paramServer = 'https://algoexplorerapi.io/v2/transactions/params'
    const transServer = 'https://algoexplorerapi.io/v2/transactions'

    try {
      const params = await (await fetch(paramServer)).json()

      let txn = {
        from: sendingAddress,
        to: address,
        amount: parseInt(amt),
        note: new Uint8Array(Buffer.from(myNote)),
        genesisID: 'mainnet-v1.0',
        genesisHash: 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
        type: 'pay',
        flatFee: true,
        fee: 1000,
        firstRound: params['last-round'],
        lastRound: params['last-round'] + 1000,
      }

      if (index !== 0) {
        txn.type = 'axfer'
        txn.assetIndex = parseInt(index)
      }

      console.log(txn)

      const signedTxn = await wallet.signTransaction(txn)

      let transactionID = await fetch(transServer, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-binary',
        },
        body: signedTxn.blob,
      })
        .then(response => response.json())
        .then(data => {
          transactionID = JSON.stringify(data)
        })
        .catch(error => {
          console.error('Error:', error)
        })

      return transactionID
    } catch (err) {
      console.error(err)
    }
  }
}

/* usage

const myAlgoWallet = Pipeline.init();

Pipeline.connect(myAlgoWallet)
    .then(data => {
        console.log(data);
    });

Pipeline.send(address, amount, note, sendingAddress, myAlgowallet)
    .then(data => {
        console.log(data);
    });

    */
