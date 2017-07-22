$(function() {
  if($('#nearBank').length > 0) {
    initList()
    initListSocial()
    tabChange()
  }
})

//tab切换
function tabChange() {
  $('.detail-nav').on('click', '.des', function() {
    $('.detail-nav .des').removeClass('des-cur')
    $(this).addClass('des-cur')
    var index = $(this).index()
    $('.detial-module').addClass('hidden')
    $('.detial-module').eq(index).removeClass('hidden')
  })
}

function initList() {
  if(data.Code == 0 && data.Items.length > 0) {
      var html = data.Items.map(function(items) {
          return Mustache.render(tem_bank,{
          id: items.id,
          name: items.name,
          meter: items.meter,
          address: items.address})
      })
      $('#nearBankZH').html(html)
      $('#nearBankATM').html(html)
  }
}
function initListSocial() {
  if(data_social.Code == 0 && data_social.Items.length > 0) {
      var html = data_social.Items.map(function(items) {
          return Mustache.render(tem_bank,{
          id: items.id,
          name: items.name,
          meter: items.meter,
          address: items.address})
      })
      $('#nearBankSocial').html(html)
      $('#nearBankNJT').html(html)
  }
}

//列表数据
var data = {
  Code: 0,
  Items: [
    {
        'id': 0,
        'name': '陵城农商保险',
        'meter': '8m',
        'address': '山东省某某某'
    },
    {
      'id': 1,
      'name': '陵城农商保险',
      'meter': '8m',
      'address': '山东省某某某'
    },
    {
      'id': 2,
      'name': '陵城农商保险',
      'meter': '8m',
      'address': '山东省某某某'
    },
  ]
}
var data_social = {
  Code: 0,
  Items: [
    {
        'id': 0,
        'name': '陵城农商银行',
        'meter': '10m',
        'address': '山西省某某某'
    },
    {
      'id': 1,
      'name': '陵城农商银行',
      'meter': '10m',
      'address': '山西省某某某'
    },
    {
      'id': 2,
      'name': '陵城农商银行',
      'meter': '10m',
      'address': '山西省某某某'
    },
  ]
}
