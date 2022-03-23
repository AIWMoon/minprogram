// pages/question/question.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        Processing: '4',
        oneItems: [
            {value: '1',name: 'A.其他垃圾'},
            {value: '2',name: 'B.有害垃圾'},
            {value: '3',name: 'C.可回收物'},
            {value: '4',name: 'D.厨余垃圾'},
        ]
    },
    change:function(e){
        var that = this;
        that.setData({
            Processing:e.detail.value
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})