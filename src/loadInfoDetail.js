import getApiInfoDetail from './service/getApiInfoDetail'

const LoadDataDetail = (respon) => {
  respon.map((item) => {
    item.addEventListener('mouseenter', () => {
      getApiInfoDetail(item.id)
    })
  })
}

export default LoadDataDetail
