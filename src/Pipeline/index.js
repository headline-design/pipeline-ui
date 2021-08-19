import MyAlgo from '@randlabs/myalgo-connect'

export default class Pipeline {
  static init() {
    this.main = true
    this.address = ''
    this.txID = ''
    this.myBalance = 0
    return new MyAlgo()
  }

  static async balance(address) {
    let indexerURL = 'https://'

    if (this.main == true) {
      indexerURL = indexerURL + 'algoexplorerapi.io/idx2/v2/accounts/'
    } else {
      indexerURL = indexerURL + 'testnet.algoexplorerapi.io/idx2/v2/accounts/'
    }

    let url2 = indexerURL + address
    try {
      let data = await fetch(url2)
      let data2 = await data.json()
      let data3 = JSON.stringify(data2.account.amount / 1000000) + ' Algos'
      this.myBalance = data3
      return data3
    } catch (error) {
      console.log(error)
      return 0
    }
  }

  static async connect(wallet) {
    try {
      const accounts = await wallet.connect()
      let item1 = accounts[0]
      item1 = item1['address']
      this.address = item1
      return item1
    } catch (err) {
      console.error(err)
    }
  }

  static async send(address, amt, myNote, _sendingAddress, wallet, index = 0) {
    let paramServer = 'https://'
    let transServer = 'https://'

    if (this.main == true) {
      paramServer = paramServer + 'algoexplorerapi.io/v2/transactions/params/'
      transServer = transServer + 'algoexplorerapi.io/v2/transactions/'
    } else {
      paramServer =
        paramServer + 'testnet.algoexplorerapi.io/v2/transactions/params/'
      transServer = transServer + 'testnet.algoexplorerapi.io/v2/transactions/'
    }

    const algodToken = '0'

    var buf = new Array(myNote.length)
    var encodedNote = new Uint8Array(buf)
    for (var i = 0, strLen = myNote.length; i < strLen; i++) {
      encodedNote[i] = myNote.charCodeAt(i)
    }

    console.log('My encoded note: ' + encodedNote)

    try {
      const params = await (await fetch(paramServer)).json()

      let txn = {
        from: this.address,
        to: address,
        amount: parseInt(amt),
        note: encodedNote,
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

      if (this.main == false) {
        txn.genesisID = 'testnet-v1.0'
        txn.genesisHash = 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI='
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
          return data.txId
        })
        .catch(error => {
          console.error('Error:', error)
        })

      this.txID = transactionID
      return transactionID
    } catch (err) {
      console.error(err)
    }
  }
}

/* usage

var balance = 0;

Pipeline.balance(address).then(data => balance = data);

const myAlgoWallet = Pipeline.init();

Pipeline.connect(myAlgoWallet)
    .then(data => {
        console.log(data);
    });

//switch to TestNet:

Pipeline.main = false;

Pipeline.send(address, amount, note, undefined, myAlgowallet, index)
    .then(data => {
        console.log(data);
    });

    */
