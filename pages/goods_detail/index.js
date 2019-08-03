import { request } from "../../request/index.js";
import { getStorageCart, setStorageCart } from "../../utils/storage.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  data: {
    goodsObj: {}
  },
  GoodsInfo: {},
  onLoad: function (options) {
    this.getGoodsDetail(options.goods_id)
  },
  // 获取商品的详情数据
  async getGoodsDetail(goods_id) {
    const res = await request({ url: "/goods/detail", data: { goods_id } })
    this.GoodsInfo = res
    this.setData({
      // 只存放要用到的数据
      goodsObj: {
        goods_name: res.goods_name,
        goods_price: res.goods_price,
        goods_introduce: res.goods_introduce.replace(/\.webp/g, '.jpg'),
        pics: res.pics
      }
    })
  },
  handleCartAdd() {
    console.count("用户点击的次数");
    let cart = getStorageCart() || {}
    if (cart[this.GoodsInfo.goods_id]) {
      cart[this.GoodsInfo.goods_id].num++
    } else {
      cart[this.GoodsInfo.goods_id] = this.GoodsInfo
      cart[this.GoodsInfo.goods_id].num = 1
    }
    setStorageCart(cart)
    wx.showToast({
      title: '添加成功',
      icon: 'none',
      mask: true
    })
  },
  handlePreviewImage(e) {
    const { index } = e.currentTarget.dataset
    const urls = this.data.goodsObj.pics.map(v => v.pics_big)
    const current = urls[index]
    wx.previewImage({
      current,
      urls
    })
  }
})