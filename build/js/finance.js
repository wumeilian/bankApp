/*理财页*/
$(document).ready(function(){
    initFinance()  //基金
})

//基金数据
function initFinance() {
  if(data.Code == 0 && data.Items.length > 0) {
      var html = data.Items.map(function(items) {
          return Mustache.render(template.fundTemplate,items)
      })
      $('#financeHome .home-fund').html(html)
  }
}

var data = {
  Code: 0,
  Items: [
    {
        'id': 0,
        'fundName': '农商宝',
        'type': '货币基金',
        'descript': '一元起存，随用随取',
        'rateDes': '最近7日年化',
        'rate': '4.622%',
        'incomeDes': '万元收益',
        'income': '1.2310',
    },
    {
        'id': 1,
        'fundName': '开心存',
        'type': '存款',
        'descript': '定活随心，收益保障',
        'rateDes': '一年定期存款',
        'rate': '2.025%',
        'incomeDes': '万元收益',
        'income': '1.2310',
    },
    {
        'id': 2,
        'fundName': '开心赚',
        'type': '高收益理财',
        'descript': '稳健投资，随心理财',
        'rateDes': '预期年化',
        'rate': '4.622%',
        'incomeDes': '存续期',
        'income': '1.2310',
    },
  ]
}
