$(function() {
  if($('#order').length > 0) {
      initOrder()
    //   console.log($('.list').text())
    //   var html = $('.list').text()
    // $('.list').html(html)
  }
})

function initOrder() {
  //异步请求接口
  // $.getJSON('url', {
  //     param: value,
  //     param: value,
  //     t: (new Date()).getTime()
  // }, function(data) {
    if(data_order.Code == 0 && data_order.Items) {
      var data = data_order.Items
         var order_html = data.map(function(items) {
           var list_html = items.orderlist.map(function(subitems) {
             return Mustache.render(tem_detailList,{
                    imgurl: subitems.imgurl,
                    name: subitems.name,
                    price: subitems.price,
                    num: subitems.num,
                    total: subitems.total
             })
           })
          console.log(list_html,777)

          return Mustache.render(tem_order,{
              orderid: items.orderid,
              status: items.status,
              orderList: list_html,
              totalNum: items.totalNum,
              fare: items.fare,
              totalPrice: items.totalPrice
          })
      })
      console.log(order_html,888)
      $('#order').html(order_html)
      var html = $('.list').text()
      $('.list').html(html)
    }
}
//订单数据
var data_order = {
  Code: 0,
  Items: [{
      'orderid': 10215469874,
      'status': '已兑换',
      'orderlist': [{
          'name': '康佳 电热水壶 中国梦',
          'price': 10.00,
          'num': 3,
          'total': 30.00,
          'imgurl': '../../asset/images/credit_1.png'
        },
        {
          'name': '康佳 电热水壶 中国梦',
          'price': 10.00,
          'num': 3,
          'total': 30.00,
          'imgurl': '../../asset/images/credit_1.png'
        }],
      'totalNum': 6,
      'totalPrice': 60.00,
      'fare': 5
    },
    {
      'orderid': 10215469874,
      'status': '已兑换',
      'orderlist': [
        {
          'name': '康佳 电热水壶 中国梦',
          'price': 10.00,
          'num': 3,
          'total': 30.00,
          'imgurl': '../../asset/images/credit_1.png'
        },
        {
          'name': '康佳 电热水壶 中国梦',
          'price': 10.00,
          'num': 3,
          'total': 30.00,
          'imgurl': '../../asset/images/credit_1.png'
        }],
      'totalNum': 6,
      'totalPrice': 60.00,
      'fare': 5
    }]
}
