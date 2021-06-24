import MyAlgo from '@randlabs/myalgo-connect';
import algosdk from 'algosdk';

export default class Pipeline {

    static init() {
        return new MyAlgo();
    }

    static async connect(wallet) {
        try {
            const accounts = await wallet.connect();
            let item1 = accounts[0];
            item1 = item1["address"];
            return item1;
        }
        catch (err) {
            console.error(err);
        }
    }

     static async send(address, amt = 1, note = "Transaction note",sendingAddress,wallet) {
         
        const algodToken = {'X-API-Key': 'dmONugeHOX2DC8nDb3v8m6Bo9cI3WHbW6Ntt4QCZ'};
        const algodServer = "https://mainnet-algorand.api.purestake.io/ps2";
        const algodPort = "";
        
       
        const data = await (async () => {
            try {
                const algodClient = new algosdk.Algodv2(algodToken, algodServer, '');
                const params = await algodClient.getTransactionParams().do();

                const txn = {
                    ...params,
                    type: 'pay',
                    from: sendingAddress,
                    to: address,
                    amount: amt,
                    note: new Uint8Array(Buffer.from(note)),
                };

                const signedTxn = await wallet.signTransaction(txn);

                await algodClient.sendRawTransaction(signedTxn.blob).do();

                return signedTxn.txID;

            }
            catch (err) {
                console.error(err);
            }
        })();

        return JSON.stringify(data);
    }

}

/*

usage

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