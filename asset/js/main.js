/*首页基金列表数据展示*/

//接口数据
var data = {
  Code: 0,
  Items: [
    {
        'id': 0,
        'fundName': '农商宝',
        'type': '货币基金',
        'descript': '一元起存，随用随取',
        'rateDes': '最近7日年化',
        'rate': '4.622%',
        'incomeDes': '万元收益',
        'income': '1.2310',
    },
    {
        'id': 1,
        'fundName': '开心存',
        'type': '存款',
        'descript': '定活随心，收益保障',
        'rateDes': '一年定期存款',
        'rate': '2.025%',
        'incomeDes': '万元收益',
        'income': '1.2310',
    },
    {
        'id': 2,
        'fundName': '开心赚',
        'type': '高收益理财',
        'descript': '稳健投资，随心理财',
        'rateDes': '预期年化',
        'rate': '4.622%',
        'incomeDes': '存续期',
        'income': '1.2310',
    },
  ]
}
//广告数据
var dataAd = {
  Code: 0,
  Items: [
    {
        'id': 0,
        'imgurl': '../asset/images/ad.png',
    }
  ]
}
//今日推荐数据
var dataGoods = {
  Code: 0,
  Items: [
    {
        'id': 0,
        'name': '商品名称',
        'des': '买买买',
        'imgurl': '../asset/images/img1.png',
    },
    {
        'id': 1,
        'name': '商品名称',
        'des': '周一上新',
        'imgurl': '../asset/images/img2.png',
    },
    {
        'id': 2,
        'name': '商品名称',
        'des': '买买买',
        'imgurl': '../asset/images/img2.png',
    },
    {
        'id': 3,
        'name': '商品名称',
        'des': '买买买',
        'imgurl': '../asset/images/img2.png',
    },
    {
        'id': 4,
        'name': '商品名称',
        'des': '买买买',
        'imgurl': '../asset/images/img2.png',
    }
  ]
}


$(document).ready(function(){
    initFund()  //首页基金
    initAd() //首页广告
    initRec() //今日推荐

})
//首页广告位
function initAd() {
  if(dataAd.Code == 0 && dataAd.Items.length > 0) {
      var html =  Mustache.render(template.adTemplate, {imgurl: dataAd.Items[0].imgurl})
      $('#index .mod-ad').html(html)
  }
}
//首页基金数据
function initFund() {
  //异步请求接口
  // $.getJSON('url', {
  //     param: value,
  //     param: value,
  //     t: (new Date()).getTime()
  // }, function(data) {
      if(data.Code == 0 && data.Items.length > 0) {
          var html = data.Items.map(function(items) {
              return Mustache.render(template.fundTemplate,items)
          })
          $('#index .home-fund').html(html)
      }
  // })
}
//今日推荐
function initRec() {
  if(dataGoods.Code == 0 && dataGoods.Items.length > 0) {
      var html_l = Mustache.render(template.adTemplate, {imgurl: dataGoods.Items[0].imgurl})
      $('#index .rec-content').html(html_l)
      var html = dataGoods.Items.map(function(items,index) {
        if(index > 0) {
          return Mustache.render(template.goodsTemplate,items)
        }
      })
      $('#index .mod-rec .fr').html(html)
  }
}
