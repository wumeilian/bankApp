/*理财页*/
$(document).ready(function(){
    if($("#financeHome").length>0) {
      initFinance()  //基金
    }
    //理财详情页
    if($("#financeDetail").length>0) {
      initDetail()
      $('#financeDetail').on('click', '.title', function(){
        $(this).find('.arrow-down').toggleClass('up')
        $(this).next('.info-txt').toggleClass('hidden')
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
        var html_deshead = data.headDes.map(function(items) {
            return Mustache.render(temp_des,{
              key: items.key,
              value: items.value})
        })
        $('#financeDetail .detail-deshead').html(html_deshead)

        var html_despro = data.modPro.map(function(items) {
            return Mustache.render(tem_mod,{
              key: items.key,
              value: items.value})
        })
        $('#financeDetail .pro .info-txt').html(html_despro)

        var html_despay = data.modPay.map(function(items) {
            return Mustache.render(tem_mod,{
              key: items.key,
              value: items.value})
        })
        $('#financeDetail .pay .info-txt').html(html_despay)
    }
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
      right: 40
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
            return Mustache.render(tem_fund,items)
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
        'headDes': [{
          'key': '基金名称',
          'value': '博时现金宝货币C类'
          },{
            'key': '基金代码',
            'value': '002855'
        },{
          'key': '基金管理人',
          'value': '博时基金管理有限公司'
        },{
          'key': '基金销售服务主题',
          'value': '博时基金管理有限公司'
        }],
        'modPro': [{
          'key': '产品名称',
          'value': '掌中宝-001期'
        },{
          'key': '产品代码',
          'value': 'LEB001'
        },{
          'key': '产品币种',
          'value': '人民币'
        },{
          'key': '预期年化收益',
          'value': '4%'
        },{
          'key': '份额面值',
          'value': 1.0000
        },{
          'key': '产品期限',
          'value': '36天'
        },{
          'key': '使用对象',
          'value': '适用于风险等级为稳健型（含）以上的客户'
        },{
          'key': '销售状态',
          'value': '在售产品'
        },{
          'key': '产品类型',
          'value': '现金管理类产品'
        },{
          'key': '收益类型',
          'value': '保本浮动收益'
        },{
          'key': '风险等级',
          'value': '低风险'
        },{
          'key': '产品销售期',
          'value': '2017/01/27-2017/01/31'
        },{
          'key': '产品成立日',
          'value': '2017/02/01'
        },{
          'key': '产品到期日',
          'value': '2017/03/08'
        },{
          'key': '交易渠道',
          'value': '柜台，网上银行，手机银行'
        },{
          'key': '交易时间',
          'value': '08:00:00-18:00:00'
        },{
          'key': '挂单时间',
          'value': '18:00:00-07:59:59'
        }],
        'modPay': [{
          'key': '首次购买起点金额（起购金额）',
          'value': '5万'
        },{
          'key': '追加购买起点金额',
          'value': '1000.00'
        },{
          'key': '赎回起点份额',
          'value': '1000.00'
        },{
          'key': '最低持有份额',
          'value': '5000.00'
        },{
          'key': '购买扣款规则',
          'value': 'T日认购，资金冻结，投资收益起算日统一扣划；申购实施扣款到本金及收益到账规则'
        }]
    }

}
