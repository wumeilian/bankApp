$(function() {
  arrowShow()
    if($('#loanDetail').length > 0) {
      tabChange()
    }
})

//下拉箭头切换
function arrowShow() {
  $('.detail-list').on('click', '.hd', function() {
    $(this).find('.arrow-down').toggleClass('up')
    $(this).next('.info').toggleClass('hidden')
  })
}
//tab切换
function tabChange() {
  $('.loan-hd').on('click', '.btn', function() {
    $('.loan-hd .btn').removeClass('btn-cur')
    $(this).addClass('btn-cur')
    var index = $(this).index()
    $('.loan-content').addClass('hidden')
    $('.loan-content').eq(index).removeClass('hidden')
  })
}
