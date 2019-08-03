import regeneratorRuntime from '../../lib/runtime/runtime';
import { getSetting, openSetting, chooseAddress } from "../../utils/asyncWx";
Page({
  data: {
    address: {}
  },
  async handleChooseAddress() {
    // 1 获取授权信息
    const res1 = await getSetting();
    const scopeAddress = res1.authSetting['scope.address'];
    // 2 对授权信息判断
    if (scopeAddress === true || scopeAddress === undefined) {
      // 2.1直接调用获取收货地址的api
      const res2 = await chooseAddress();
      console.log(res2);
    } else {
      // 2.2 诱导用户 打开授权页面
      await openSetting();
      // 2.3 获取收货地址

    }
    const address = await chooseAddress()
    address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo
    wx.setStorageSync('address', address)
  },
  onShow() {
    const address = wx.getStorageSync('address') || {}
    this.setData({ address })
  }
})