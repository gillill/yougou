export const getStorageCates = () => {
    return wx.getStorageSync('cates');
}

export const setStorageCates = (obj) => {
    wx.getStorageSync('cates', obj)
}

export const setStorageCart = (obj) => {
    wx.setStorageSync('cart', obj)
}

export const getStorageCart = (obj) => {
    wx.getStorageSync('cart', obj)
}