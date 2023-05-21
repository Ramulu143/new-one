// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expenseAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="type-img"
        />
        <div className="text-container">
          <p className="text">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </div>

      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="type-img"
        />
        <div className="text-container">
          <p className="text">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="type-img"
        />
        <div className="text-container">
          <p className="text">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            RS {expenseAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
