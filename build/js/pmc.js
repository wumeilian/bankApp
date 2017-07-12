/*贵金属页*/
$(document).ready(function(){
    initList()  //贵金属列表
})

//贵金属列表数据
function initList() {
  if(data.Code == 0 && data.Items.length > 0) {
      var html = data.Items.map(function(items) {
          return Mustache.render(template.listTemplate,{
          imgurl: items.imgurl,
          title: items.title,
          middle: '零售价：￥' + items.price,
          bottom: '中间收入： ￥' + items.earnings})
      })
      $('#pmcHome .mod-list').html(html)
  }
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
