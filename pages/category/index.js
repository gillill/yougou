import { request } from '../../request/index.js'
Page({
  data: {
    leftMenuList: [],
    rightGoodsList: [],
    currentIndex: 0
  },
  onLoad() {
    this.getCategoryList();
  },
  getCategoryList() {
    request({
      url: '/categories'
    })
      .then(result => {
        let leftMenuList = result.map((v, i) => ({
          cat_name: v.cat_name, cat_id: v.cat_id
        }))
        let rightGoodsList = result[0].children
        this.setData({
          leftMenuList,
          rightGoodsList
          
        })
        // console.log(leftMenuList)
        // console.log(rightGoodsList)
      })
  }
})