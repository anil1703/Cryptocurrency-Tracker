// Write your JS code here
import './index.css'
const CryptocurrencyItem = props => {
  const {datad} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = datad
  return (
    <li className="leftSide">
      <div className="iconDiv">
        <img src={currencyLogo} className="icon" alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="rightSide">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
