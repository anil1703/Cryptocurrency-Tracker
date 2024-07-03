// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CrptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoList: []}
  componentDidMount() {
    this.loading()
  }
  loading = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))
    console.log(updatedData)
    this.setState({
      isLoading: false,
      cryptoList: updatedData,
    })
  }
  render() {
    const {isLoading, cryptoList} = this.state
    return (
      <div className="home">
        {isLoading ? (
          <div data-testid="loader">
            <Loader
              className="lod"
              type="Rings"
              color="#ffffff"
              height={120}
              width={120}
            />
          </div>
        ) : (
          <div>
            <CryptocurrenciesList data={cryptoList} />
          </div>
        )}
      </div>
    )
  }
}

export default CrptocurrencyTracker
