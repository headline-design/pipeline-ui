import MyAlgo from '@randlabs/myalgo-connect'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import { formatJsonRpcRequest } from '@json-rpc-tools/utils'
import { encode, decode } from 'algo-msgpack-with-bigint'
import base32 from 'hi-base32'

export default class Pipeline {
  static init() {
    this.index = 0
    this.pipeConnector = 'myAlgoWallet'
    this.main = true
    this.address = ''
    this.txID = ''
    this.myBalance = 0
    this.connector = new WalletConnect({
      bridge: 'https://bridge.walletconnect.org', // Required
      qrcodeModal: QRCodeModal,
    })
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
    if (this.pipeConnector === 'myAlgoWallet') {
      try {
        const accounts = await wallet.connect()
        let item1 = accounts[0]
        item1 = item1['address']
        this.address = item1
        return item1
      } catch (err) {
        console.error(err)
      }
    } else {
      this.connector.on('connect', (error, payload) => {
        if (error) {
          throw error
        }
        this.address = payload.params[0].accounts[0]
      })

      this.connector.on('session_update', (error, payload) => {
        alert(error + payload)
        if (error) {
          throw error
        }
        // Get updated accounts
      })

      if (!this.connector.connected) {
        await this.connector.createSession()
      } else {
        await this.connector.killSession()
        await this.connector.createSession()
      }
    }

    const getAddress = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.connector.accounts[0])
      }, 10000)
    })

    const address = await getAddress
    return address
  }

  static async walletConnectSign(mytxnb) {
    const suggestedParams = {
      flatFee: true,
      fee: 1000,
      firstRound: mytxnb.firstRound,
      lastRound: mytxnb.lastRound,
      genesisID: mytxnb.genesisID,
      genesisHash: mytxnb.genesisHash,
    }

    let prototxn = {
      amt: mytxnb.amount,
      fee: 1000,
      fv: mytxnb.lastRound - 1000,
      gen: mytxnb.genesisID,
      gh: new Uint8Array(Buffer.from(mytxnb.genesisHash, 'base64')),
      lv: mytxnb.lastRound,
      note: mytxnb.note,
      rcv: new Uint8Array(base32.decode.asBytes(mytxnb.to).slice(0, 32)),
      snd: new Uint8Array(base32.decode.asBytes(this.address).slice(0, 32)),
      type: 'pay',
    }

    let prototxnASA = {}
    let prototxnb = encode(prototxn)
    let txns = []
    txns[0] = prototxnb

    if (this.index !== 0) {
      prototxnASA = {
        aamt: mytxnb.amount,
        arcv: new Uint8Array(base32.decode.asBytes(mytxnb.to).slice(0, 32)),
        fee: 1000,
        fv: mytxnb.lastRound - 1000,
        gen: mytxnb.genesisID,
        gh: new Uint8Array(Buffer.from(mytxnb.genesisHash, 'base64')),
        lv: mytxnb.lastRound,
        note: mytxnb.note,
        snd: new Uint8Array(base32.decode.asBytes(this.address).slice(0, 32)),
        type: 'axfer',
        xaid: parseInt(mytxnb.assetIndex),
      }
      prototxnb = encode(prototxnASA)
      txns[0] = prototxnb
    }

    console.log(prototxnb)
    console.log(new TextDecoder().decode(prototxnb))
    console.log(JSON.stringify(decode(prototxnb)))

    // Sign transaction
    const txnsToSign = txns.map(txnb => {
      const encodedTxn = Buffer.from(txnb).toString('base64')

      return {
        txn: encodedTxn,
        message: 'Description of transaction being signed',
        // Note: if the transaction does not need to be signed (because it's part of an atomic group
        // that will be signed by another party), specify an empty singers array like so:
        // signers: [],
      }
    })

    const requestParams = [txnsToSign]

    var request = formatJsonRpcRequest('algo_signTxn', requestParams)

    request.id = this.connector._handshakeId

    console.log(request)

    try {
      const result = await this.connector.sendCustomRequest(request)
      const signedPartialTxn = result[0]
      const rawSignedTxn = Buffer.from(signedPartialTxn, 'base64')
      return new Uint8Array(rawSignedTxn)
    } catch (error) {
      console.log(error)
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
        this.index = index
        txn.type = 'axfer'
        txn.assetIndex = parseInt(index)
      }

      if (this.main == false) {
        txn.genesisID = 'testnet-v1.0'
        txn.genesisHash = 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI='
      }

      let signedTxn = {}

      if (this.pipeConnector === 'myAlgoWallet') {
        signedTxn = await wallet.signTransaction(txn)
        signedTxn = signedTxn.blob
      } else {
        signedTxn = await this.walletConnectSign(txn)
      }

      console.log(signedTxn)

      let transactionID = await fetch(transServer, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-binary',
        },
        body: signedTxn,
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

update balance at intervals:

componentDidMount() {
      this.interval = setInterval(() => this.setState({balance: Pipeline.myBalance}), 1000);
    }

var balance = 0;

Pipeline.balance(address).then(data => balance = data);

const myAlgoWallet = Pipeline.init();

//useTestNet

Pipeline.main = false;

Pipeline.connect(myAlgoWallet)
    .then(data => {
        console.log(data);
    });

Pipeline.send(address, amount, note, sendingAddress, myAlgowallet, index)
    .then(data => {
        console.log(data);
    });

    */
