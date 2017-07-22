$(function() {
  if($('#nearSale').length > 0) {
      initList()  //列表
  }
})
//列表数据
function initList() {
  if(data.Code == 0 && data.Items.length > 0) {
      var html = data.Items.map(function(items) {
          return Mustache.render(tem_list,{
          id: items.id,
          imgurl: items.imgurl,
          title: items.title,
          middle: '会员专享折扣：' + items.discount,
          bottom: items.position,
          distant: items.distant})
      })
      $('#nearSale .mod-list').html(html)
  }
}

//列表数据
var data = {
  Code: 0,
  Items: [
    {
        'id': 0,
        'title': '逍遥小店',
        'discount': '5折',
        'distant': '5m',
        'position': '长沙市岳麓区麓谷新长海中心B2306',
        'imgurl': '../../asset/images/bank_1.png'
    },
    {
        'id': 1,
        'title': '逍遥小店',
        'discount': '5折',
        'distant': '5m',
        'position': '长沙市岳麓区麓谷新长海中心B2306',
        'imgurl': '../../asset/images/bank_1.png'
    },
    {
        'id': 2,
        'title': '逍遥小店',
        'discount': '5折',
        'distant': '5m',
        'position': '长沙市岳麓区麓谷新长海中心B2306',
        'imgurl': '../../asset/images/bank_1.png'
    },
    {
        'id': 3,
        'title': '逍遥小店',
        'discount': '5折',
        'distant': '5m',
        'position': '长沙市岳麓区麓谷新长海中心B2306',
        'imgurl': '../../asset/images/bank_1.png'
    },
    {
        'id': 3,
        'title': '逍遥小店',
        'discount': '5折',
        'distant': '5m',
        'position': '长沙市岳麓区麓谷新长海中心B2306',
        'imgurl': '../../asset/images/bank_1.png'
    },
    {
        'id': 3,
        'title': '逍遥小店',
        'discount': '5折',
        'distant': '5m',
        'position': '长沙市岳麓区麓谷新长海中心B2306',
        'imgurl': '../../asset/images/bank_1.png'
    },
  ]
}
