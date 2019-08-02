import { request } from "../../request/index.js";

Page({
  data: {
    tabs: [
      { id: 0, title: '综合', isActive: true },
      { id: 1, title: '销量', isActive: false },
      { id: 2, title: '价格', isActive: false },
    ],
    goodsList: []
  },
  QueryParams: {
    query: '',
    cid: '',
    pagenum: 1,
    pagesize: 10
  },
  onLoad(options) {
    // console.log(options)
    this.QueryParams.cid = options.cid
    this.getGoodsList()
  },
  getGoodsList() {
    request({ url: '/goods/search', data: this.QueryParams })
    .then(res=>{
      console.log(res)
      this.setData({
        goodsList: res.goods
      })
    })
  },
  handleTitleChange(e) {
    const { index } = e.detail
    let { tabs } = this.data
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false)
    this.setData({ tabs })
  }
})