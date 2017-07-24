$(function() {
  if($('#reserve').length > 0) {
    checkInput()
  }
})

function checkInput() {
var that = this
  var verify = false
  $('.reserve-num').focus(function() {
      $(this).next('.tips').html('')
  })

  $('.reserve-num').blur(function() {
    var value = $(this).val()
    if(value == '') {
      $(this).next('.tips').html('金额不能为空')
    }else if(isNaN(value) || value <= 0) {
      $(this).next('.tips').html('请输入大于0的数字')
      that.reserve.num == 'no'
    }
  })

  $('.reserve-date').focus(function() {
      $(this).next('.tips').html('')
  })
  $('.reserve-date').blur(function() {
    if($(this).val() == '') {
      $(this).next('.tips').html('日期不能为空')
    }
  })

  if(this.reserve.num == 'ok') {
    $('#reserveBtn').removeClass('button-gray')
  }

}
