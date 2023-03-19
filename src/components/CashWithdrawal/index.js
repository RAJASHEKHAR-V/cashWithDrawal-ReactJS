import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onDenom = value => {
    const {balance} = this.state
    const total = balance - value
    if (total >= 0) {
      this.setState(prevState => ({
        balance: prevState.balance - value,
      }))
    }
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-Container">
        <div className="card">
          <div className="profile-card">
            <p className="profile-image">S</p>
            <p className="profile-name">Sara Williams</p>
          </div>
          <div className="balance-card">
            <p className="balance-heading">Your Balance</p>
            <div>
              <p className="balance-status">{balance}</p>
              <p className="balance-unit">In Rupees</p>
            </div>
          </div>
          <div className="options-card">
            <p className="withdraw-heading">Withdraw</p>
            <p className="options">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denomination-card">
            {denominationsList.map(eachItem => (
              <DenominationItem
                DenomItem={eachItem}
                key={eachItem.id}
                onDenom={this.onDenom}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
