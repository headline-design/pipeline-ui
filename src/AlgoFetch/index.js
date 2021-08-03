import React, { useState } from 'react'
import Link from '../Link'
import Table from '../Table'
import Button from '../Button'

export default function AlgoFetch(props) {
  const [transactions, setTransactions] = useState([])

  async function getData() {
    let url2 =
      'https://algoexplorerapi.io/idx2/v2/accounts/' +
      props.address +
      '/transactions?limit=5'

    let response = await fetch(url2)
    let responseJSON = await response.json()
    let myTransactions = await responseJSON.transactions
    let myTransactionArray = []
    for (var i = 0; i < myTransactions.length; i++) {
      myTransactionArray.push(myTransactions[i].id)
    }

    setTransactions(myTransactionArray)
    console.log(transactions)
  }

  return (
    <div {...props} align="center">
      <Table
        className="pipeline-algofetch"
        id="transTable"
        style={{ textAlign: 'center' }}
      >
        <thead>
          <tr style={{ textAlign: 'center' }}>
            <th style={{ textAlign: 'center' }}>My Latest Transactions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(row => (
            <tr>
              <td style={{ textAlign: 'center' }}>
                <Link
                  target="_blank"
                  href={'https://algoexplorer.io/tx/' + row}
                >
                  {row}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={getData}>Refresh</Button>
    </div>
  )
}
