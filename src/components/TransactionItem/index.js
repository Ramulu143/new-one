// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionItemDetails, onDeleteUser} = props
  const {id, title, type, amount} = transactionItemDetails
  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <li className="li-container">
      <p className="text-value">{title}</p>
      <p className="text-value"> Rs {amount}</p>
      <p className="text-value">{type}</p>
      <div>
        <button
          className="btn"
          type="button"
          data-testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-btn"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
