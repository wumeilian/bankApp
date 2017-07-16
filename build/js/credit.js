/*积分商城页*/
$(document).ready(function(){
   if($("#creditHome").length>0) {
      initList()  //积分列表
    }
    //积分详情页
    if($("#creditDetail").length>0) {
      initSlide() //轮播图
    }

    //积分兑换页
    if($('#creditOrder').length>0) {
      initTab() //tab切换
    }

})
//积分兑换页
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
//积分详情页
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
}

var data = {
  Code: 0,
  Items: [
    {
        'id': 0,
        'title': '康佳 中国梦 电热水壶',
        'num': '30',
        'price': '199',
        'imgurl': '../../asset/images/img2.png'
    },
    {
        'id': 1,
        'title': '康佳 中国梦 电热水壶',
        'num': '30',
        'price': '199',
        'imgurl': '../../asset/images/img2.png'
    },
    {
        'id': 2,
        'title': '康佳 中国梦 电热水壶',
        'num': '30',
        'price': '199',
        'imgurl': '../../asset/images/img2.png'
    },
    {
        'id': 3,
        'title': '康佳 中国梦 电热水壶',
        'num': '30',
        'price': '199',
        'imgurl': '../../asset/images/img2.png'
    },
    {
        'id': 4,
        'title': '康佳 中国梦 电热水壶',
        'num': '30',
        'price': '199',
        'imgurl': '../../asset/images/img2.png'
    },
    {
        'id': 5,
        'title': '康佳 中国梦 电热水壶',
        'num': '30',
        'price': '199',
        'imgurl': '../../asset/images/img2.png'
    },
  ]
}
