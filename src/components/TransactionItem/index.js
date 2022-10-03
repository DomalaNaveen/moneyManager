import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {title, amount, type} = transactionDetails
  const deleteImgUrl =
    'https://assets.ccbp.in/frontend/react-js/money-manager/delete.png '

  return (
    <li className="transaction-list">
      <h1 className="heading">{title}</h1>
      <p className="amount">{amount}</p>
      <p className="type">{type}</p>
      <img src={deleteImgUrl} alt="delete" />
    </li>
  )
}

export default TransactionItem
