//index
var index = {
	//banner轮播
	init: function (num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				var picWidth = $(".bannerBox li img").width();
				var length = $(".bannerBox li").length;
				// alert(length)
				// console.log(picWidth)
				var i=0;
				//函数
				function moveL(){
					i++;
					if(i==length){
						i=0;
					}
					$(".bannerBox").stop().animate({left:-i * picWidth + "px"},500)
				}
				//左按钮
				$(".Larrow").click(function(){
					moveL()
				})
				//右按钮
				$(".Rarrow").click(function(){
					i--;
					if(i==-1){
						i=length-1
					}
					$(".bannerBox").stop().animate({left:-i * picWidth + "px"},1000)
				})
				//定时器
				var timer = setInterval(moveL,2000)

				$(".bannerBox").hover(function(){
					clearInterval(timer)
				},function(){
					timer = setInterval(moveL,2000)
				})

			})
		})
	}

	/*show:function(num){
		require(['jquery'],function($){
			$(document).ready(function(){
				alert(1)
			})
		})
	}*/
}
 
var user_center = {
	init: function (num) {
		require(['jquery'],function($){
			$(document).ready(function(){
				
			})
		})
	}
} 

exports.index = index;
exports.user_center = user_center;
