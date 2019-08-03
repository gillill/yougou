import { request } from '../../request/index.js'
import regeneratorRuntime from '../../lib/runtime/runtime';
import { getStorageCates, setStorageCates } from "../../utils/storage.js";
Page({
  data: {
    leftMenuList: [],
    rightGoodsList: [],
    currentIndex: 0,
    scrollTop: 0
  },
  Cates: [],
  onLoad() {
    let cates = getStorageCates();
    if (!cates) {
      this.getCategoryList();
    } else {
      if (Date.now() - cates.time > 1000 * 20) {
        this.getCategoryList();
      } else {
        this.Cates = cates.data
        let leftMenuList = this.Cates.map((v, i) => ({
          cat_name: v.cat_name, cat_id: v.cat_id
        }))
        let rightGoodsList = this.Cates[0].children
        this.setData({
          leftMenuList,
          rightGoodsList
        })
      }
    }
  },
  async getCategoryList() {
    const result = await request({ url: '/categories' })
    this.Cates = result
    setStorageCates('cates', { time: Date.now(), data: this.Cates })
    let leftMenuList = this.Cates.map((v, i) => ({
      cat_name: v.cat_name, cat_id: v.cat_id
    }))
    let rightGoodsList = this.Cates[0].children
    this.setData({
      leftMenuList,
      rightGoodsList

    })
  },
  handleMenuChange(e) {
    console.log(e)
    const { index } = e.currentTarget.dataset
    let rightGoodsList = this.Cates[index].children
    this.setData({
      currentIndex: index,
      rightGoodsList,
      scrollTop: 0
    })
  }
})