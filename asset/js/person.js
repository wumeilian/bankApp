$(function() {
  //订单中心
  if($('#order').length > 0) {
      initOrder()
  }
  //登陆
  if($('#login').length > 0) {
    login()
    resetInput()
  }
  //注册
  if($('#regist').length > 0) {
    regist()
    resetRegist()
  }
})

//注册
function regist() {
  $('#registBtn').bind('click',function() {
    var verify = true
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ //身份证
    var id = $('#registID').val()
    var name = $('#registName').val()
    var pwd = $('#registPwd').val()
    var repwd = $('#registRePwd').val()
    if(id == '') {
      $('#registID').next('.tips').html('身份证不能为空')
      verify = false
    }
    if(!(reg.test(id))) {
      $('#registID').next('.tips').html('请输入正确的身份证')
      verify = false
    }
    if(name == '') {
      $('#registName').next('.tips').html('姓名不能为空')
      verify = false
    }
    if(pwd == '') {
      $('#registPwd').next('.tips').html('密码不能为空')
      verify = false
    }
    if(repwd == '') {
      $('#registRePwd').next('.tips').html('密码不能为空')
      verify = false
    }
    if(repwd != pwd) {
      $('#registRePwd').next('.tips').html('密码不一致')
      verify = false
    }

    if(verify) {
      alert('验证成功')
    }
  })
}

//重置输入框
function resetRegist() {
  $('#registID').focus(function() {
      $('#registID').next('.tips').html('')
  })
  $('#registName').focus(function() {
      $('#registName').next('.tips').html('')
  })
  $('#registPwd').focus(function() {
      $('#registPwd').next('.tips').html('')
  })
  $('#registRePwd').focus(function() {
      $('#registRePwd').next('.tips').html('')
  })
}

//登陆
function login() {
  $('#loginBtn').bind('click',function() {
    var reg = /^1[3|4|5|8][0-9]\d{4,8}$/  //手机号
    var tel = $('#tel').val()
    var pwd = $('#pwd').val()
    var verify = true
    if(tel == '') {
      $('#tel').next('.tips').html('手机号不能为空')
      verify = false
    }
     if(!(reg.test(tel))) {
      $('#tel').next('.tips').html('请输入正确的手机号')
      verify = false
    } 
    if(pwd == '') {
      $('#pwd').next('.tips').html('密码不能为空')
      verify = false
    }
    if(verify) {
      alert('验证成功')
    }
  
  })
}

//登陆重置输入框
function resetInput() {
  $('#tel').focus(function() {
      $(this).next('.tips').html('')
  })
  $('#pwd').focus(function() {
      $(this).next('.tips').html('')
  })
}

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
         
          var html = '<div class="mod mod-order">\
                <p class="hd">兑换码:'+items.orderid+'\
                  <span class="hd-status">'+items.status+'</span>\
                </p>'
          var list_html = items.orderlist.map(function(subitems) {
             return Mustache.render(tem_detailList,{
                    imgurl: subitems.imgurl,
                    name: subitems.name,
                    price: subitems.price,
                    num: subitems.num,
                    total: subitems.total
             })
           })
          html += (list_html.join(''))
          html += '<p class="total">\
                    共'+items.totalNum+'件商品(含运费￥'+items.fare+')<span class="text-red">合计￥'+items.totalPrice+'</span>\
                </p>\
            </div>'
          $('#order').append(html)
        })  
    }
    //})
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
