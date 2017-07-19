$(function() {
  if($('#secure').length > 0) {
    initList()
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
