// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  getBanner = () => (
    <div className="top">
      <h1>Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="banner"
      />
    </div>
  )
  render() {
    const {data} = this.props
    return (
      <div>
        {this.getBanner()}
        <ul className="table">
          <div className="leftSide">
            <p>Coin Type</p>
            <div className="rightSide">
              <p>USD</p>
              <p>EURO</p>
            </div>
          </div>
          {data.map(eachItem => (
            <CryptocurrencyItem key={eachItem.key} datad={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}
export default CryptocurrenciesList
