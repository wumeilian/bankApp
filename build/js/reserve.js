$(function() {
  if($('#reserve').length > 0) {
     submit()
     resetInput()
  }
})

//重置输入框
function resetInput() {
  $('.reserve-num').focus(function() {
      $(this).next('.tips').html('')
  })
  $('.reserve-date').focus(function() {
      $(this).next('.tips').html('')
  })
}

//输入框验证
function submit() {
  $('#reserveBtn').bind('click', function() {
    var num = $('.reserve-num').val()
    if(num == '') {
      $('.reserve-num').next('.tips').html('金额不能为空')
    }else if(isNaN(num) || num <= 0) {
      $('.reserve-num').next('.tips').html('请输入大于0的数字')
    }else if($('.reserve-date').val() == '') {
        $('.reserve-date').next('.tips').html('日期不能为空')
    }else {
      $(this).attr('href','submit.html')
    }
  })

}
