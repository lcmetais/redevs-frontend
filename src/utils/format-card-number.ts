const formatCardNumber = (cardNumber = '') => {
  const notNumber = /\D/g
  const cardNumberFormat = /([\d]{4})([\d]{4})([\d]{4})([\d]{4})/
  return cardNumber
    .replaceAll(notNumber, '')
    .replace(cardNumberFormat, '$1 $2 $3 $4') // apply card number format
}

export default formatCardNumber
