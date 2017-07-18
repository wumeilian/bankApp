$(function() {
  arrowShow()
    if($('#loanDetail').length > 0) {
      tabChange()
    }
})

//下拉箭头切换
function arrowShow() {
  $('.detail-list').on('click', '.arrow-down', function() {
    $(this).toggleClass('up')
    $(this).parents('.des').find('.info').toggleClass('hidden')
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
