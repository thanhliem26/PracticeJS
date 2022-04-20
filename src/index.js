import '../styles/css/index.css'
import '../styles/css/reset.css'
import LoadDataDetail from './loadInfoDetail'
import getDataApi from './service/callApi'
import LoadDataInfo from './service/loadDataInfo'
import { URL_API } from './utils/constants'

getDataApi(URL_API, {}, 'GET')
  .then(LoadDataInfo)
  .then(LoadDataDetail)
  .catch((err) => {
    if (axios.isCancel(err)) {
      throw new Error('Cancel request ', e.message)
    } else {
      throw new Error('You got an error. Please check the previous request!')
    }
  })
