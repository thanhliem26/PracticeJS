import axios from 'axios'
let cancelToken
const inforDetail = async (id, item) => {
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel('Bấm chậm thôi con lợn này!')
  }
  cancelToken = axios.CancelToken.source()

  await axios
    .get(`https://625e2146d434c6001c56e391.mockapi.io/inforDetail?id=${id}`, {
      cancelToken: cancelToken.token,
    })
    .then((res) => {
      let data = res.data[0]
      let innerData = `
            <tr>
              <td>MSN</td>
              <td>${data.MSN.quantity}</td>
              <td style="${
                data.MSN.percentage - 10000 < 0 ? 'color: red' : null
              }">${data.MSN.percentage - 10000}</td>
              <td>${data.MSN.updateDate}</td>
              <td>${data.MSN.value}</td>
            </tr>
            <tr>
              <td>TCB</td>
              <td>${data.TCB.quantity}</td>
              <td  style="${
                data.TCB.percentage - 10000 < 0 ? 'color: red' : null
              }">${data.TCB.percentage - 10000}</td>
              <td>${data.TCB.updateDate}</td>
              <td>${data.TCB.value}</td>
            </tr>
            <tr>
              <td>MCH</td>
              <td>${data.MCH.quantity}</td>
              <td style="${
                data.MCH.percentage - 10000 < 0 ? 'color: red' : null
              }">${data.MCH.percentage - 10000}</td>
              <td>${data.MCH.updateDate}</td>
              <td>${data.MCH.value}</td>
            </tr>
            <tr>
              <td colspan="4" style="text-align: end">Total</td>
              <td>${data.MSN.value + data.TCB.value + data.MCH.value}</td>
            </tr> `

      let renderBody = document.querySelector(`.detail${id}`)
      renderBody.innerHTML = innerData
    })
    .catch((err) => {
      console.log(err)
    })
}

export default inforDetail
