Page({
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
	// 第二个功能
	// 这个是我们的第三个功能
	// 这是我们要添加的第四个功能
	// 我的第五个功能还没完成的   （现在已经完成了）
	// 这是我在master分支里面添加的功能5
    this.mapCtx = wx.createMapContext('mMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude:23.10229,
        longitude:113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude:23.10229,
        longitude:113.3345211,
      }, {
        latitude:23.00229,
        longitude:113.3345211,
      }]
    })
  }
})