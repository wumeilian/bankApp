$(function() {
  if($('#nearBank').length > 0) {
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
