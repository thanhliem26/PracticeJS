export { fixedNumber, fixedPercent, transformNumber, TotalPriceRange }
import { NUMBER_SUB } from './constants'

const fixedNumber = (number) => {
  const result = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  return result
}

const TotalPriceRange = (number1, number2) => {
  return number1 > number2
    ? number1 + ' - ' + number2
    : number2 + ' - ' + number1
}

const transformNumber = (number) => {
  let random = (Math.random() * 100).toFixed(0)
  return number - NUMBER_SUB > 0
    ? `+ ${number}.` + random
    : `- ${number}.` + random
}

const fixedPercent = (number) => {
  let indexOfDot = number.toString().indexOf('.')
  let totalPercent = 1
  for (let item = 1; item < indexOfDot - 1; item++) {
    totalPercent += '0'
  }
  return (number / Number(totalPercent)).toFixed(2) + '%'
}
