/*贵金属页*/
$(document).ready(function(){
  if($('#pmcHome').length > 0) {
      initList()  //贵金属列表
  }
  if($('#pmcDetail').length > 0) {
    initDetail() //详情页
  }
})

//贵金属列表数据
function initList() {
  if(data.Code == 0 && data.Items.length > 0) {
      var html = data.Items.map(function(items) {
          return Mustache.render(template.listTemplate,{
          id: items.id,
          imgurl: items.imgurl,
          title: items.title,
          middle: '零售价：￥' + items.price,
          bottom: '中间收入： ￥' + items.earnings})
      })
      $('#pmcHome .mod-list').html(html)
  }
}
//积分详情页
function initDetail() {
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

        $('#pmcDetail .swiper-wrapper').html(slide_html)
        initSlide() //轮播图

        var info_html = Mustache.render(tem_info,{
          name: data.name,
          price: data.price,
          add: data.add
        })
        $('#pmcDetail .pmcdetail-des').html(info_html)

        // var img_html = data.detailImg.map(function(items) {
        //       return Mustache.render(tem_img,{
        //       imgurl: items})
        //   })
        // $('#creditDetail .img').html(img_html)
        // var order_url = 'order.html?n=' + encodeURI(data.name) +
        //   '&c=' + encodeURI(data.credit) +'&p=' + encodeURI(data.price) +
        //     '&u=' + encodeURI(data.imgurl)
        // $('#creditDetail .change').attr('href', order_url)
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

var data = {
  Code: 0,
  Items: [
    {
        'id': 0,
        'title': '纯银世纪龙钞',
        'price': '1650',
        'earnings': '330.00',
        'imgurl': '../../asset/images/pmc1.png'
    },
    {
        'id': 1,
        'title': '纯银世纪龙钞',
        'price': '1650',
        'earnings': '330.00',
        'imgurl': '../../asset/images/pmc2.png'
    },
    {
        'id': 2,
        'title': '纯银世纪龙钞',
        'price': '1650',
        'earnings': '330.00',
        'imgurl': '../../asset/images/pmc1.png'
    },
    {
        'id': 3,
        'title': '纯银世纪龙钞',
        'price': '1650',
        'earnings': '330.00',
        'imgurl': '../../asset/images/pmc2.png'
    },
  ]
}

//贵金属详情页数据
var dataDetail = {
  Code: 0,
  Items: {
    'id': 1,
    'name': '纯金世纪龙钞',
    'price': 1650.00,
    'add': '湖南长沙',
    'slideImg': [
      '../../asset/images/pmc_d1.png',
      '../../asset/images/pmc_d1.png',
      '../../asset/images/pmc_d1.png'
    ]
  }
}
