// Write your JS code here
import './index.css'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const currenciesList = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const response = await currenciesList.json()
    const updatedList = response.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({currencyList: updatedList, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="app-container">
            <h1 className="app-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="app-image"
            />
            <div className="crypto-currency-list">
              <div className="currency-item">
                <h1 className="currency-item-heading"> Coin Type </h1>
                <div className="currency-type">
                  <h1 className="currency-item-heading"> USD </h1>
                  <h1 className="currency-item-heading"> EURO </h1>
                </div>
              </div>
              <ul className="crypto-list">
                {currencyList.map(each => (
                  <CryptocurrencyItem key={each.id} eachItem={each} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
