// pages/cart/index.js
Page({
  handleChooseAddress() {
    wx.getSetting({
      success: (result1) => {
        const scopeAddress = result1.authSetting['scope.address']
        if (scopeAddress === true || scopeAddress === undefined) {
          wx.chooseAddress({
            success: (result2) => {
              console.log(result2)
            }
          })
        } else {
          wx.openSetting({
            success: () => {
              wx.chooseAddress({
                success: (result3) => {
                  console.log(result3)
                },
                fail: () => { },
                complete: () => { }
              })
            }
          })
        }
      },
      fail: () => { },
      complete: () => { }
    })
  }
})