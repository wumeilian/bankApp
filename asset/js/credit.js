/*积分商城页*/
$(document).ready(function(){
   if($("#creditHome").length>0) {
      initList()  //积分列表
    }

    //积分详情页
    if($("#creditDetail").length>0) {
      initDetial()
    }

    //积分兑换页
    if($('#creditOrder').length>0) {
      initOrder() //初始化标题信息
      initTab() //tab切换
      numClick() //订单数量操作
    }

})
//获取url参数
function GetQueryString(name)
{
   var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
   var r = window.location.search.substr(1).match(reg);
   if(r!=null)
      return  decodeURI(r[2]);
  return null;
}

//积分兑换页
function initOrder() {
    var name =  GetQueryString('n')
    var credit = GetQueryString('c')
    var price =  GetQueryString('p')
    var imgurl = decodeURI(GetQueryString('u'))
    var title_html = Mustache.render(tem_order,{
      imgurl: imgurl,
      name: name,
      credit: credit,
      price: price,
    })
    $('.order-info .title').html(title_html)
    $('.result .total').text(credit)
}
//tab切换
function initTab() {
  $('.btn-style').on('click', '.btn', function() {
    $('.btn-style .btn').removeClass('btn-select')
    $(this).addClass('btn-select')
    if($(this).index() == 0) {
      $('.style-self').removeClass('hidden')
      $('.style-mail').addClass('hidden')
    }else {
      $('.style-mail').removeClass('hidden')
      $('.style-self').addClass('hidden')
    }
  })
}
//订单页数量
function numClick() {
  var num = $('.buy-num span').text() //数量
  var credit = GetQueryString('c') //积分

  $('#creditOrder').on('click', ' .reduce',function() {
    if(num > 1) {
      --num
      $('.buy-num span').text(num)
      $('.result .total').text(num*credit)
    }
  })
  $('#creditOrder').on('click', ' .add',function() {
      ++num
      $('.buy-num span').text(num)
      $('.result .total').text(num*credit)
  })
}
//积分详情页
function initDetial() {
  // $.getJSON('url', {
  //     id: value,
  //     t: (new Date()).getTime()
  // }, function(data) {
    if(dataDetail.Code == 0 && dataDetail.Items) {
      var data = dataDetail.Items
      var slide_html = data.slideImg.map(function(items) {
            return Mustache.render(tem_slide,{
            imgurl: items})
        })

        $('#creditDetail .swiper-wrapper').html(slide_html)
        initSlide() //轮播图

        var info_html = Mustache.render(tem_info,{
          name: data.name,
          num: data.size,
          credit: data.credit,
          price: data.price,
        })
        $('#creditDetail .detail-txt').html(info_html)

        var img_html = data.detailImg.map(function(items) {
              return Mustache.render(tem_img,{
              imgurl: items})
          })
        $('#creditDetail .img').html(img_html)
        var order_url = 'order.html?n=' + encodeURI(data.name) +
          '&c=' + encodeURI(data.credit) +'&p=' + encodeURI(data.price) +
            '&u=' + encodeURI(data.imgurl)
        $('#creditDetail .change').attr('href', order_url)
    }
// })
}
/*轮播图*/
function initSlide() {
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',

  })
}
//积分列表数据
function initList() {
  // $.getJSON('url', {
  //     param: value,
  //     param: value,
  //     t: (new Date()).getTime()
  // }, function(data) {
  if(data.Code == 0 && data.Items.length > 0) {
      var html = data.Items.map(function(items) {
          return Mustache.render(template.listTemplate,{
          id: items.id,
          imgurl: items.imgurl,
          title: items.title,
          middle: items.num + '积分',
          bottom: '原价：￥ ' + items.price})
      })
      $('#creditHome .mod-list').html(html)
  }
  // })
}
var data = {
   Code: 0,
  Items: [
    {
        'id': 0,
        'title': '康佳 中国梦 电热水壶',
        'num': '30',
        'price': '199',
        'imgurl': '../../asset/images/credit_1.png'
    },
    {
        'id': 1,
        'title': '康佳 中国梦 电热水壶',
        'num': '30',
        'price': '199',
        'imgurl': '../../asset/images/credit_1.png'
    },
    {
        'id': 2,
        'title': '康佳 中国梦 电热水壶',
        'num': '30',
        'price': '199',
        'imgurl': '../../asset/images/credit_1.png'
    },
    {
        'id': 3,
        'title': '康佳 中国梦 电热水壶',
        'num': '30',
        'price': '199',
        'imgurl': '../../asset/images/credit_1.png'
    },
    {
        'id': 4,
        'title': '康佳 中国梦 电热水壶',
        'num': '30',
        'price': '199',
        'imgurl': '../../asset/images/credit_1.png'
    },
    {
        'id': 5,
        'title': '康佳 中国梦 电热水壶',
        'num': '30',
        'price': '199',
        'imgurl': '../../asset/images/credit_1.png'
    },
  ]
}
//积分详情页数据
var dataDetail = {
  Code: 0,
  Items: {
    'id': 1,
    'name': '康佳 中国梦 电热水壶',
    'size': '500ml/个',
    'credit': '30',
    'price': 192.00,
    'imgurl': '../../asset/images/credit_1.png',
    'slideImg': [
      '../../asset/images/credit_1.png',
      '../../asset/images/credit_1.png',
      '../../asset/images/credit_1.png'
    ],
    'detailImg': [
      '../../asset/images/credit_2.png',
      '../../asset/images/credit_2.png'
    ]
  }
}
