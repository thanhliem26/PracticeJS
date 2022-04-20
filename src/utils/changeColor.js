export { ChangeColor }

const ChangeColor = (number, sub) => {
  return number - sub > 0 ? 'white' : 'red'
}
