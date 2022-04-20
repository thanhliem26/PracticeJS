const axios = require('axios').default
import moment from 'moment'
import '../styles/css/index.css'
import '../styles/css/reset.css'
import InforDetail from './InforDetail'
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
let arr = null

const RenderInfo = async () => {
  const renderBody = $('#table__info tbody')

  await axios({
    method: 'get',
    url: 'https://625e2146d434c6001c56e391.mockapi.io/info',
    data: {},
  })
    .then(function (response) {
      let data = response.data.map((item, index) => {
        return `
              <tr>
                  <td id="${item.id}" class="tableName" ">${item.Name}       
                    <div class="infor__detail">
                      <div class="infor__detail-title">
                        <div class="detail__title-main">
                          <h6>Historical deals</h6>
                          <h6>Ownership</h6>
                        </div>
                        <div class="infor__detail-download">
                          <p><i class="fa-solid fa-arrow-down"></i></p>
                        </div>
                      </div>
                      <div class="infor__detail-table" >
                        <table>
                          <thead>
                            <tr>
                              <th>TICKER</th>
                              <th>QUANTITY</th>
                              <th>PRECENTAGE</th>
                              <th>UPDATE DATE</th>
                              <th>VALUE</th>
                            </tr>
                          </thead>
                          <tbody class="detail${item.id}">
                            
                          </tbody>
                        </table>
                    </div>
                    </div>
                  </td>
                  <td>${item.Shares}</td>
                  <td>${item.Precentage}</td>
                  <td>${moment(item.LastUpdate).format('DD/MM/YYYY')}</td>
                  <td style=${item.ShareVolume - 50 > 0 ? '' : 'color:red'}>${
          item.ShareVolume - 50 > 0 ? `+` : `-`
        } ${item.ShareVolume}</td>
               
                  <td>${
                    item.PriceRange1 > item.PriceRange2
                      ? item.PriceRange1 + ' - ' + item.PriceRange2
                      : item.PriceRange2 + ' - ' + item.PriceRange1
                  }</td>
                  <td>${moment(item.TransactionDate).format('DD/MM/YYYY')}</td>
                </tr>
      `
      })
      renderBody.innerHTML = data.join('')
    })
    .catch((e) => {
      console.log(e)
    })
}
RenderInfo()

setTimeout(() => {
  let nodelist = $$('.tableName')
  arr = Array.prototype.slice.call(nodelist)

  arr.forEach((item) => {
    item.addEventListener('mouseover', () => {
      InforDetail(item.id, item)
    })
  })
}, 3000)
