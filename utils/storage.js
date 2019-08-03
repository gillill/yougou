export const getStorageCates = () => {
    return wx.getStorageSync('cates');
}

export const setStorageCates = (obj) => {
    wx.getStorageSync('cates', obj)
}