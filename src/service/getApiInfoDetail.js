import { ChangeColor } from '../utils/changeColor'
import { NUMBER_SUB_THOUSAND, URL_API_DETAIL } from '../utils/constants'
import getDataApi from './callApi'

const renderDataDetail = async (id) => {
  const respon = await getDataApi(URL_API_DETAIL, { id }, 'GET')
  let data = respon.data[0]
  let { MCH, MSN, TCB } = data
  let innerData = `
                  <tr>
                      <td>MSN</td>
                      <td>${MSN.quantity}</td>
                      <td style="color:${ChangeColor(
                        MSN.percentage,
                        NUMBER_SUB_THOUSAND,
                      )}">${MSN.percentage - NUMBER_SUB_THOUSAND}</td>
                      <td>${MSN.updateDate}</td>
                      <td>${MSN.value}</td>
                  </tr>
                  <tr>
                      <td>TCB</td>
                      <td>${TCB.quantity}</td>
                      <td  style="color:${ChangeColor(
                        TCB.percentage,
                        NUMBER_SUB_THOUSAND,
                      )}">${TCB.percentage - 10000}</td>
                      <td>${TCB.updateDate}</td>
                      <td>${TCB.value}</td>
                  </tr>
                  <tr>
                      <td>MCH</td>
                      <td>${MCH.quantity}</td>
                      <td style="color:${ChangeColor(
                        MCH.percentage,
                        NUMBER_SUB_THOUSAND,
                      )}"">${MCH.percentage - 10000}</td>
                      <td>${MCH.updateDate}</td>
                      <td>${MCH.value}</td>
                  </tr>
                  <tr>
                      <td colspan="4" style="text-align: end">Total</td>
                      <td>${MSN.value + TCB.value + MCH.value}</td>
                  </tr>
    `
  let renderBody = document.querySelector(`.detail${id}`)
  renderBody.innerHTML = innerData
}

export default renderDataDetail
