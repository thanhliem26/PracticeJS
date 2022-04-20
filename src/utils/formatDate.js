import moment from 'moment'

export { FormatDate }

const FormatDate = (date) => {
  return moment(date).format('DD/MM/YYYY')
}
