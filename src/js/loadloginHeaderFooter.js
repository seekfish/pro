define(["jquery","cookie"],function(){
	/*加载头部*/
	$("header").load("/html/loginheader.html",function(){
		$("#li_change1").mouseenter(function(){
			$("#li_change1 ul").css({"display":"block"})
		}).mouseleave(function(){
			$("#li_change1 ul").css({"display":"none"})
		});
		$("#li_change2").mouseenter(function(){
			$("#li_change2 ul").css({"display":"block"})
		}).mouseleave(function(){
			$("#li_change2 ul").css({"display":"none"})
		});
		$(".top_right").on("mouseenter","li",function(){
			$(this).css({
				"text-decoration":"underline"
			})
		}).on("mouseleave","li",function(){
			$(this).css({
				"text-decoration":"none"
			})
		});
		$(".li_img").mouseenter(function(){
			$(".img_div").show();
		}).mouseleave(function(){
			$(".img_div").hide()
		})
		//注册成功后加载
			$.cookie.json=true;
			let a=$.cookie("loginUser");
				//b=$.parseJSON(a),
			if(a){
			$(".wellcome").text("hi  "+a.email+",welcome to Kouclo");
			$(".index_register,.index_login").hide();
			$("#tuichu").show();
				}
			else
			{$(".index_register,.index_login").show();
				$("#tuichu").hide();
			}
			//点击退出
			$("#tuichu").click(function(){
				$(".wellcome").text("hi,welcome to Kouclo");
				$.removeCookie("loginUser",{path:"/"});
				$(".index_register,.index_login").show();
				$("#tuichu").hide();
			})
			//加载购物车数量
			$.cookie.json=true;
			//获取cookie
			let _prods=$.cookie("produncs")
			if(_prods)
				$(".my_cart_3").text(_prods.length)
	});
	//加载尾部
	$("footer").load("/html/loginfooter.html",function(){

	})
	
})