define(["jquery","cookie"],function(){
	/*加载头部*/
	$("header").load("/html/include/header.html",function(){
		//点击搜索栏
		$("[name='search_name']")
		.on("click",function(){
			$("[name='search_name']").val("");
			})
		.on("keyup",function(){
			$(".input_div").show();
			$(".input_div div").html("")
			let a=$("[name='search_name']").val();
			$.ajax({
				url:`https://suggest.taobao.com/sug?code=utf-8&q=${a}&_ksTS=1520562418398_601&callback=?`,
				data:"get",
				dataType:"jsonp",
				success:function(data){
					let html="";
					data.result.forEach(function(curr){
						html+=`<div>${curr[0]}</div>`;
					})
					$(".input_div").html(html);
					$(".input_div").css({
						"width":626,
						"position":"absolute",
						"top":40,
						"left":0,
						"background":"white",
						"z-index":"99"
						})
					$(".input_div div").css({
						"padding-left":10,
						"border-bottom":"1px solid #ccc",
						"border-right":"1px solid #ccc",
						"border-left":"1px solid #ccc",
						"height":20,
						"line-height":"20px",
						"cursor": "pointer"
					})
				}
			})
		});
		$(".input_div").on("click","div",function(){
			$("[name='search_name']").val($(this).html());
			$(".input_div").hide();
		});
		$(".search_btn").on("click",function(){
			location="https://www.baidu.com"
			return false;
		});
		$(".nav_h2").on("mouseenter",function(){
			$(".ul_box").show();
			}).on("mouseleave",function(){
			$(".ul_box").hide();
			})
		$(".ul1 li").on("mouseenter",function(){
			$(".ul_box").show();
			$(this).css({"background":"#ad9747"});
		}).on("mouseleave",function(){
			$(".ul_box").hide();
			$(this).css({"background":"black"});
			});
		//注册成功后加载
		$.cookie.json = true;
		let a=$.cookie("loginUser");
			// b=$.parseJSON(a),
		if(a){
		$(".yonghu").show().html("hi"+a.email);
		$(".index_register,.index_login").hide();
		$("#tuichu").show();
			}
		else
		{$(".index_register,.index_login").show();
			$(".yonghu,#tuichu").hide();
		}
		//点击退出
		$("#tuichu").click(function(){
			$.removeCookie("loginUser",{path:"/"});
			$(".index_register,.index_login").show();
			$(".yonghu,#tuichu").hide();
		})
	})
	$("footer").load("/html/include/footer.html");

})