import { request } from '../../request/index.js';

Page({
  data: {
    swiperList: [],
    navCateList: [],
    floorList: []
  },
  onLoad() {
    this.getSwiperList();
    this.getNavCateList();
    this.getFloorList();
  },
  getSwiperList() {
    request({ url: '/home/swiperdata' })
      .then(result => {
        this.setData({
          swiperList: result
        })
      })
  },
  getNavCateList() {
    request({ url: '/home/catitems' })
      .then(result => {
        this.setData({
          navCateList: result
        })
      })
  },
  getFloorList() {
    request({ url: '/home/floordata' })
      .then(result => {
        this.setData({
          floorList: result
        })
      })
  },
  // getNavCateList() {
  //   request({ url: '/home/catitems'});
  //     .then(result => {
  //     // console.log(result)
  //     this.setData({
  //       navCateList: result
  //     })
  //   )
  // },

  // },
  // getFloorList() {
  //   wx.request({
  //     url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
  //     success: (result) => {
  //       console.log(result)
  //       this.setData({
  //         floorList: result.data.message
  //       })
  //     },
  //   });
  // }
})
