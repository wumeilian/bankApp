$(function() {
  if($('#secure').length > 0) {
    initList()
  }
  if($('#secureDetail').length > 0) {
    initDetail()
  }
})
function initList() {
  if(data.Code == 0 && data.Items.length > 0) {
      var html = data.Items.map(function(items) {
          return Mustache.render(tem_list,{
          id: items.id,
          name: items.name,
          type: items.type,
          price: items.price})
      })
      $('#secure .secure-list').html(html)
  }
}
function initDetail() {
  if(detailData.Code == 0 && detailData.Items) {
      var html =  Mustache.render(tem_detail,{
          company: detailData.Items.name,
          product: detailData.Items.product,
          deadline: detailData.Items.deadline,
          price: detailData.Items.price,
          duty1: detailData.Items.duty1,
          duty2: detailData.Items.duty2,
          duty3: detailData.Items.duty3,
          age: detailData.Items.age,
          person: detailData.Items.person,
        })
      $('#secureDetail .secure-des').html(html)
  }
}
var data = {
  Code: 0,
  Items: [
    {
        'id': 0,
        'name': '旅行无忧A-1(7天)',
        'type': '意外险',
        'price': '90.00',
    },
    {
        'id': 1,
        'name': '旅行无忧A-1(7天)',
        'type': '意外险',
        'price': '90.00',
    },
    {
        'id': 2,
        'name': '旅行无忧A-1(7天)',
        'type': '意外险',
        'price': '90.00',
    },
    {
        'id': 3,
        'name': '旅行无忧A-1(7天)',
        'type': '意外险',
        'price': '90.00',
    }
  ]
}
var detailData = {
   Code: 0,
   Items: {
    'id': 0,
    'company': '陵城农商保险',
    'product': '旅行无忧A-1(7天)',
    'deadline': '30天',
    'price': '280元',
    'duty1': '5万',
    'duty2': '5万',
    'duty3': '5万',
    'age': '28-75周岁',
    'person': '短期境外出行的旅游人士，出国务工及诊疗或就医人员不承保'
   }
}