const Multilingual = props => {
  const {buttonDetails, statusOfLanguage} = props
  const {buttonText, id} = buttonDetails

  const onClick = () => {
    statusOfLanguage(id)
  }

  return (
    <li>
      <button type="button" onClick={onClick}>
        {buttonText}
      </button>
    </li>
  )
}

export default Multilingual
