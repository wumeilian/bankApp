//模板信息
var template = {
  //基金模板
  fundTemplate: '<div class="mod mod-fund">\
     <div class="hd">\
         {{fundName}} | {{type}}\
         <span>{{descript}}</span>\
     </div>\
     <a class="bd" href="finance/detail.html?id={{id}}">\
         <div class="rate">\
             <p class="sub">{{rateDes}}</p>\
             <p class="num">{{rate}}</p>\
         </div>\
         <div class="income">\
             <p class="sub">{{incomeDes}}</p>\
             <p class="num">{{income}}</p>\
         </div>\
     </a>\
 </div>',
 //首页广告模板、单张图片模板
 adTemplate: '<img src="{{imgurl}}" alt="">',
 goodsTemplate: '<div class="des">\
    <a href="/detail/{{id}}.html">\
       <p class="hd">{{name}}</p>\
       <p class="txt">{{des}}</p>\
       <img src="{{imgurl}}" alt="">\
     </a>\
 </div>',
//列表模板
listTemplate: '<a class="item" href="#">\
    <img src="{{imgurl}}" alt="">\
    <div class="info">\
        <p class="hd">{{title}}</p>\
        <p class="num">{{middle}}</p>\
        <p class="price">{{bottom}}</p>\
    </div>\
    <i class="arrow"></i>\
</a>'
}
