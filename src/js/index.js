require(["/js/config.js"],function(){
	require(["jquery","template","load","carousel"],function($, template){
		//轮播图
		$(".banner_ul").carousel({
			imgs : [
			{src:"/images/1 (42).jpg", href:"#"},
			{src:"/images/1 (43).jpg", href:"#"},
			{src:"/images/1 (44).jpg", href:"#"},
			{src:"/images/1 (45).jpg", href:"#"},
			{src:"/images/1 (46).jpg", href:"#"},
			{src:"/images/1 (47).jpg", href:"#"}
			],
			width: 1200,
			height: 480,
			duration: 3000
			});	
		//热点模块
			$.getJSON("/mock/hot.json", function(data){
				// 渲染模板
				let rendData = { // 准备渲染的数据
					list : data.res_body.list
				};
				let html = template("hot_temp", rendData); // 渲染
				// 显示
				$(".hot_dog").prepend(html);
		});	
		//楼层模板
			$.getJSON("/mock/floor_temp.json", function(data){
				// 渲染模板
				let rendData1 = { // 准备渲染的数据
					list: data.res_body.floor1
				};
				let rendData2 = { // 准备渲染的数据
					list: data.res_body.floor2
				};
				let rendData3 = { // 准备渲染的数据
					list: data.res_body.floor3
				};
				let rendData4 = { // 准备渲染的数据
					list: data.res_body.floor4
				};
				let rendData5 = { // 准备渲染的数据
					list: data.res_body.floor5
				};
				let rendData6 = { // 准备渲染的数据
					list: data.res_body.floor6
				};
				let rendData7 = { // 准备渲染的数据
					list: data.res_body.floor7
				};
				let rendData8 = { // 准备渲染的数据
					list: data.res_body.floor8
				};
				let rendData9 = { // 准备渲染的数据
					list: data.res_body.floor9
				};
				let html1 = template("floor_temp", rendData1); // 渲染
				let html2 = template("floor_temp", rendData2); // 渲染
				let html3 = template("floor_temp", rendData3);
				let html4 = template("floor_temp", rendData4);
				let html5 = template("floor_temp", rendData5);
				let html6 = template("floor_temp", rendData6);
				let html7 = template("floor_temp", rendData7);
				let html8 = template("floor_temp", rendData8);
				let html9 = template("floor_temp", rendData9);
				// 显示
				$(".floor1").prepend(html1);
				$(".floor2").prepend(html2);
				$(".floor3").prepend(html3);
				$(".floor4").prepend(html4);
				$(".floor5").prepend(html5);
				$(".floor6").prepend(html6);
				$(".floor7").prepend(html7);
				$(".floor8").prepend(html8);
				$(".floor9").prepend(html9);
				//交换地方
			let change1=$(".floor2 .floor_pic").clone(),
				change2=$(".floor2 .floor_con").clone();
				$(".floor2 .floor_pic").remove();
				$(".floor2 .floor_con").remove();
				 change2.insertAfter($(".floor2 .floor_left"));
				 change1.insertBefore($(".floor2 .floor_right"));
			
			let change3=$(".floor4 .floor_pic").clone(),
				change4=$(".floor4 .floor_con").clone();
				$(".floor4 .floor_pic").remove();
				$(".floor4 .floor_con").remove();
				 change4.insertAfter($(".floor4 .floor_left"));
				 change3.insertBefore($(".floor4 .floor_right"));
				
			let change5=$(".floor6 .floor_pic").clone(),
				change6=$(".floor6 .floor_con").clone();
				$(".floor6 .floor_pic").remove();
				$(".floor6 .floor_con").remove();
				 change6.insertAfter($(".floor6 .floor_left"));
				 change5.insertBefore($(".floor6 .floor_right"));
				
			let change8=$(".floor8 .floor_pic").clone(),
				change7=$(".floor8 .floor_con").clone();
				$(".floor8 .floor_pic").remove();
				$(".floor8 .floor_con").remove();
				 change7.insertAfter($(".floor8 .floor_left"));
				 change8.insertBefore($(".floor8 .floor_right"));
				 //绑定变色事件		
			$(".floor_con .left,.floor_con .right,.floor_right .p1,.floor_right .p4").mouseenter(function(){
				let g=$(this).parent().parent().children().eq(0).children().eq(1).css("background");
				$(this).find("p").css({"background":g});
				$(this).css({"bottom":"5px"});	
			}).mouseleave(function(){
				$(this).find("p").css({"background":"#e1e1e1"});
				$(this).css({"bottom":"0"});
				});	
			//绑定移入事件并且透明度变化
			$(".floor_con_a").mouseenter(function(){
				$(this).css({"opacity":"0.7"})
			}).mouseleave(function(){
				$(this).css({"opacity":"1"})
			});
			//楼层左下轮播
			$(".floor_left_bom_p").carousel({
			imgs : [
			{src:"/images/2.png", href:"#"},
			{src:"/images/3.png", href:"#"},
			{src:"/images/4.png", href:"#"}
			],
			width: 110,
			height: 150,
			duration: 5000
			});	
			//设置右边栏随大小变化
			$(window).resize(function(){
				let winHeight= $(window).height();
				$(".right_lan").css({"height":winHeight});
				let _boxright=$(".right_lan").height();
				$(".right_lan ul").css({"top":winHeight*0.3})
			});
			//划过右边栏
			$(".right_lan_box").on("mouseenter","li",function(){
				$(this).css({"background":"#7233c2"});
			}).on("mouseleave","li",function(){
				$(this).css({"background":"#e23046"});
			});
			//划过li3
			$(".right_lan .li3").mouseenter(function(){
				$(".right_lan #a2").css({"display":"block"}).animate({
					opacity:1,
					right:"33px"
				},1000);
			}).mouseleave(function(){
				$(".right_lan #a2").css({"display":"none",
										"opacity":"0",
										"right":"80px"});
			})
			//划过li4
			$(".right_lan .li4").mouseenter(function(){
				$(".right_lan #a4").css({"display":"block"}).animate({
					width:"201px",
					height:"225px"
				},1000);
			}).mouseleave(function(){
				$(".right_lan #a4").css({"display":"none",
										"width":0,
										"height":0
										});
			})
		});
			
	})
})