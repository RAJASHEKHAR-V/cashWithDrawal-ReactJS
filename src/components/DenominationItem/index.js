import './index.css'

const DenominationItem = props => {
  const {DenomItem, onDenom} = props
  const {value} = DenomItem
  const onDenomButton = () => {
    onDenom(value)
  }

  return (
    <li>
      <button className="button" type="submit" onClick={onDenomButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
