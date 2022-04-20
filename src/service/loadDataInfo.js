import { ChangeColor } from '../utils/changeColor'
import { NUMBER_SUB } from '../utils/constants'
import {
  fixedNumber,
  fixedPercent,
  TotalPriceRange,
  transformNumber,
} from '../utils/fixedNumber'
import { FormatDate } from '../utils/formatDate'

const LoadDataInfo = async ({ data }) => {
  const renderBody = document.querySelector('#table__info tbody')
  let renderTable = data.map(
    ({
      Name,
      Shares,
      Precentage,
      LastUpdate,
      ShareVolume,
      PriceRange1,
      PriceRange2,
      TransactionDate,
      id,
    }) => {
      return `
                <tr>
                    <td id="${id}" class="tableName" ">${Name}
                        <div class="infor__detail">
                            <div class="infor__detail-title">
                                <div class="detail__title-main">
                                    <div class="title__main-group">
                                        <input type="radio"
                                            id="html"
                                            name="fav_language"
                                            value="Historical deals"
                                        />
                                        <label for="html">
                                            Historical deals
                                        </label>
                                    </div>
                                    <div class="title__main-group">
                                        <input type="radio"
                                            id="html"
                                            name="fav_language"
                                            value="Ownership"
                                        />
                                        <label for="html">Ownership</label>
                                    </div>
                                </div>
                                <div class="infor__detail-download">
                                    <p>
                                        <i class="fa-solid fa-arrow-down"></i>
                                    </p>
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
                                    <tbody class="detail${id}">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </td>
                <td>${fixedNumber(Shares)}</td>
                <td>${fixedPercent(Precentage)}</td>
                <td>${FormatDate(LastUpdate)}</td>
                <td style="color:${ChangeColor(ShareVolume, NUMBER_SUB)}">
                    ${transformNumber(ShareVolume)}
                </td>
                <td>${TotalPriceRange(PriceRange1, PriceRange2)}</td>
                <td>${FormatDate(TransactionDate)}
                </td>
            </tr>
                `
    },
  )
  renderBody.innerHTML = renderTable.join('')

  return new Promise(function (resolve) {
    resolve(Array.prototype.slice.call(document.querySelectorAll('.tableName')))
  })
}

export default LoadDataInfo
