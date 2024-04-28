module.exports = function() {
  const pageConfig = {
    "tabBar": {
      "custom": true,
      "color": "#000000",
      "selectedColor": "#000000",
      "backgroundColor": "#000000",
      "list": [
        {
          "pagePath": "pages/index/index",
          "text": "首页"
        },
        {
          "pagePath": "pages/index/index2",
          "text": "首页2"
        }
      ]
    },
    "subPackages": [ {
        "root": "tab-bar",
        "pages": [
          {
            "path": "index"
          }
        ]
      }],
    "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
        {
          "path": "pages/index/index",
          "style": {
            "navigationBarTitleText": "uni-app"
          },
          "usingComponents":true
        },
        {
          "path": "pages/index/index2",
          "text": "首页",
          "usingComponents":true
  
        }
      ],
      "globalStyle": {
        "navigationBarTextStyle": "black",
        "navigationBarTitleText": "uni-app",
        "navigationBarBackgroundColor": "#F8F8F8",
        "backgroundColor": "#F8F8F8"
      }
  }
  return pageConfig
}