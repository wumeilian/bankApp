/*积分商城页*/
$(document).ready(function(){
    initList()  //积分列表
})

//积分列表数据
function initList() {
  if(data.Code == 0 && data.Items.length > 0) {
      var html = data.Items.map(function(items) {
          return Mustache.render(template.listTemplate,{
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
