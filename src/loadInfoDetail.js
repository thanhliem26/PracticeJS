import getApiInfoDetail from './service/getApiInfoDetail'

const LoadDataDetail = (respon) => {
  respon.map((item) => {
    item.addEventListener('mouseenter', () => {
      console.log(item.id)
      getApiInfoDetail(item.id)
    })
  })
}

export default LoadDataDetail
