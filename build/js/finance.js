/*理财页*/
$(document).ready(function(){
    if($("#financeHome").length>0) {
      initFinance()  //基金
    }
    //理财详情页
    if($("#financeDetail").length>0) {
      initDetail()
      $('#financeDetail').on('click', '.arrow-down', function(){
        $(this).toggleClass('up')
        $(this).parents('.info').find('.info-txt').toggleClass('hidden')
      })
    }
})

//基金详情页
function initDetail() {
  //异步请求接口
  // $.getJSON('url', {
  //     param: value,
  //     param: value,
  //     t: (new Date()).getTime()
  // }, function(data) {
    if(dataDetail.Code == 0 && dataDetail.Items) {
        var data = dataDetail.Items
        //标题
        var html =  Mustache.render(tem_title,{title: data.title})
        $('#detailTitle .hd').html(html)
        //折线图
        line(data.date, data.num)
        //产品详情
        var html_detail =  Mustache.render(temp_detail,{
          name: data.name,
          code: data.code,
          manage: data.manage,
          theme: data.theme,
          proName: data.proName,
          proCode: data.proCode,
          proCurrency: data.proCurrency,
          proIncome: data.proIncome,
          proValue: data.proValue,
          proTime: data.proTime,
          proObj: data.proObj,
          proStatus: data.proStatus,
          proType: data.proType,
          proIncomeType: data.proIncomeType,
          proLevel: data.proLevel,
          proDate: data.proDate,
          proBegin: data.proBegin,
          proEnd: data.proEnd,
          proChannel: data.proChannel,
          proExchange: data.proExchange,
          proGuadan: data.proGuadan,
          payOrigin: data.payOrigin,
          payAdd: data.payAdd,
          payBack: data.payBack,
          payLow: data.payLow,
          payRule: data.payRule
        })
        $('#financeDetail .detailContent').html(html_detail)
    }
  // })
}
//折线图
function line(arrayX, arrayY) {
  new Chartist.Line('.ct-chart', {
    labels: arrayX,
    series: [
     arrayY
    ]
  }, {
    fullWidth: true,
    chartPadding: {
      right: 30
    }
  })
}
//基金数据
function initFinance() {
  //异步请求接口
  // $.getJSON('url', {
  //     param: value,
  //     param: value,
  //     t: (new Date()).getTime()
  // }, function(data) {
    if(data.Code == 0 && data.Items.length > 0) {
        var html = data.Items.map(function(items) {
            return Mustache.render(template.fundTemplate,items)
        })
        $('#financeHome .home-fund').html(html)
    }
  // })
}

var data = {
  Code: 0,
  Items: [
    {
        'id': 3,
        'fundName': '农商宝',
        'type': '货币基金',
        'descript': '一元起存，随用随取',
        'rateDes': '最近7日年化',
        'rate': '4.622%',
        'incomeDes': '万元收益',
        'income': '1.2310',
    },
    {
        'id': 4,
        'fundName': '开心存',
        'type': '存款',
        'descript': '定活随心，收益保障',
        'rateDes': '一年定期存款',
        'rate': '2.025%',
        'incomeDes': '万元收益',
        'income': '1.2310',
    },
    {
        'id': 5,
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

var dataDetail = {
  Code: 0,
  Items: {
        'id': 3,
        'title': '农商宝',
        'date': ['06-11', '06-11', '06-11', '06-11', '06-11', '06-11', '06-11'],
        'num': [3,5,2,5,2,4,6],
        'name': '博时现金宝货币C类',
        'code': '002855',
        'manage': '博时基金管理有限公司',
        'theme': '博时基金管理有限公司',
        'proName': '掌中宝-001期',
        'proCode': 'LEB001',
        'proCurrency': '人民币',
        'proIncome': '4%',
        'proValue': 1.0000,
        'proTime': '36天',
        'proObj': '适用于风险等级为稳健型（含）以上的客户',
        'proStatus': '在售产品',
        'proType': '现金管理类产品',
        'proIncomeType': '保本浮动收益',
        'proLevel': '低风险',
        'proDate': '2017/01/27-2017/01/31',
        'proBegin': '2017/02/01',
        'proEnd': '2017/03/08',
        'proChannel': '柜台，网上银行，手机银行',
        'proExchange': '08:00:00-18:00:00',
        'proGuadan': '18:00:00-07:59:59',
        'payOrigin': '5万',
        'payAdd': '1000.00',
        'payBack': '1000.00',
        'payLow': '5000.00',
        'payRule': 'T日认购，资金冻结，投资收益起算日统一扣划；申购实施扣款到本金及收益到账规则'
    }

}
