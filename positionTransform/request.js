const Axios = require('axios')
const request = Axios.create({})

const COMMON_ADDRESS = {
  1: '菁蓉汇4A',
  2: '平安财富中心'
}

const urlTemplate = (keyword) => {
  return `https://restapi.amap.com/v3/place/text?s=rsv3&children=&key=8325164e247e15eea68b59e89200988b&page=1&offset=10&city=510100&language=zh_cn&callback=jsonp_54901_&platform=JS&logversion=2.0&sdkversion=1.3&appname=https%3A%2F%2Flbs.amap.com%2Fconsole%2Fshow%2Fpicker&csid=0B76C975-C8DA-44F7-8841-D3015E61A4B0&keywords=${encodeURIComponent(keyword)}`
}




module.exports = function (keyword = 1) {

  return request.get(urlTemplate(COMMON_ADDRESS[keyword] || keyword))
}
