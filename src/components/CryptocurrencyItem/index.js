// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachItem

  return (
    <li className="currency-item-container">
      <div className="currency-pic">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-item-holders"> {currencyName} </p>
      </div>
      <div className="currency-pic">
        <p className="currency-item-holders"> {usdValue} </p>
        <p className="currency-item-holders"> {euroValue} </p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
