import {Component} from 'react'
import {v4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
class MoneyManager extends Component {
  state = {
    titleInput: '',

    amountInput: '',

    activeId: transactionTypeOptions[0].optionId,

    transactionsList: [],
  }

  searchTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  searchAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  activeOptionId = event => {
    this.setState({activeId: event.target.value})
  }

  onAddMoneyDetails = event => {
    event.preventDefault()
    const {titleInput, amountInput, activeId} = this.state
    const textItem = transactionTypeOptions.find(
      eachText => activeId === eachText.optionId,
    )

    const {displayText} = textItem
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      activeId: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteUser = id => {
    const {transactionsList} = this.state
    const filteredAmountList = transactionsList.filter(
      eachAmount => eachAmount.id !== id,
    )
    this.setState({transactionsList: filteredAmountList})
  }

  getExpenseAmount = () => {
    const {transactionsList} = this.state
    let expenseAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenseAmount += eachTransaction.amount
      }
    })
    return expenseAmount
  }

  getIncomeAmount = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalanceAmount = () => {
    const {transactionsList} = this.state
    let expenseAmount = 0
    let incomeAmount = 0
    let balanceAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expenseAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expenseAmount
    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, activeId, transactionsList} = this.state
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncomeAmount()
    const expenseAmount = this.getExpenseAmount()
    return (
      <div className="bg-container">
        <div className="profile-container">
          <h1 className="heading">Hi,Richard</h1>
          <p className="description">
            Welcome back to your <span className="style">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expenseAmount={expenseAmount}
        />

        <div className="money-manager-container">
          <div className="input-container">
            <form className="form-container" onSubmit={this.onAddMoneyDetails}>
              <h1 className="header-input">Add Transaction</h1>
              <label htmlFor="title" className="title">
                TITLE
              </label>
              <input
                type="text"
                onChange={this.searchTitle}
                placeholder="TITLE"
                value={titleInput}
                id="title"
                className="input"
              />
              <label htmlFor="amount" className="title">
                AMOUNT
              </label>
              <input
                type="text"
                onChange={this.searchAmount}
                placeholder="AMOUNT"
                value={amountInput}
                id="amount"
                className="input"
              />
              <label htmlFor="type" className="title">
                TYPE
              </label>
              <select
                id="type"
                className="select-container"
                onChange={this.activeOptionId}
                value={activeId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div className="transaction-list-container">
              <h1 className="history-heading">History</h1>
              <div className="transaction-header-container">
                <ul className="transaction-container">
                  <li className="add-container">
                    <p className="table-header">Title</p>
                    <p className="table-header">Amount</p>
                    <p className="table-header">Type</p>
                  </li>
                  {transactionsList.map(eachUser => (
                    <TransactionItem
                      key={eachUser.id}
                      transactionItemDetails={eachUser}
                      onDeleteUser={this.onDeleteUser}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
// Write your code here
