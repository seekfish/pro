require(["/js/config.js"],function(){
	require(["jquery","template","load2","cookie"],function($,template){
		$(function(){
			$(".img3").show();
			$(".img4").show();
			$(".img2").hide();
			$(".dianpu").hide();
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
		});
		//模板加载数据
		$.cookie.json=true;
		let _produncs=$.cookie("produncs")
		if(_produncs){
			$(".img_bg,.sorry").hide();
			$(".prods").show();
		}
		if(!_produncs.length){
				$(".img_bg,.sorry").show();
				$(".prods").hide();}
		//传入模板数据
		let data={
			prods:_produncs
		};
		let html=template("prods_tem",data)
		$(".prods").html(html);//加载
		//显示全部商品
		if(_produncs)
		{$(".all_span2").text(_produncs.length)}
		//绑定加减
		$(".p2").on("click","span",function(){
			//读取cookie
			let _produncs1=$.cookie("produncs")
			if($(this).hasClass("add")){
				//获取当前的数量
				let _amount=$(this).prev().val()
				//找到当前点击时的ID
				let _id=$(this).parent().parent().children().first().text()
				//找到ID在cookie中的数据
				_produncs1.forEach((curr)=>{
					if(_id==curr.id){
						//改变cooklie里面的存储值
						_amount++;
						curr.amount=_amount;
						curr.jine=_amount*curr.price;
						//改变数字
						$(this).prev().val(curr.amount)
						//改变金额
						$(this).parents(".prods_1").find(".gg").text(curr.jine)
						$.cookie("produncs",_produncs1,{path:"/"})
					}
				})
						//计算总和
							let sum1=0;
							//找到checked属性的元素并遍历
							$(".cbox:checked").each(function(){
								let a=$(this).parents(".prods_1").find(".gg").text();
								sum1+=Number(a);
							})
							$(".con_span1").text($(".cbox:checked").length)
							$(".con_span3").text(sum1)
					}
			if($(this).hasClass("jian")){
				//获取当前的数量
				let _amount1=$(this).next().val()
				//找到当前点击时的ID
				let _id=$(this).parent().parent().children().first().text()
				//找到ID在cookie中的数据
				_produncs1.forEach((curr)=>{
					if(_id==curr.id){
						//改变cooklie里面的存储值
						_amount1--;
						if(_amount1<=0)
							_amount1=1;
						curr.amount=_amount1;
						curr.jine=_amount1*curr.price;
						//改变数字
						$(this).next().val(curr.amount)
						//改变金额
						$(this).parents(".prods_1").find(".gg").text(curr.jine)
						$.cookie("produncs",_produncs1,{path:"/"})
						//计算总和
							let sum1=0;
							//找到checked属性的元素并遍历
							$(".cbox:checked").each(function(){
								let a=$(this).parents(".prods_1").find(".gg").text();
								sum1+=Number(a);
							})
							$(".con_span1").text($(".cbox:checked").length)
							$(".con_span3").text(sum1)
						}
				})
			}
		})
		//点击删除
		$(".del").click(function(){
			let _produncs2=$.cookie("produncs")
			//找到当前点击时的ID
			let _id=$(this).parents(".prods_1").find("i").text();
			console.log(_id)
			//遍历cookie
			
			_produncs2.forEach((curr)=>{
				if(_id==curr.id){
					//获取当前下标
					let a=_produncs2.indexOf(curr);
					//在cookie中删除
					_produncs2.splice(a,1);
					$.cookie("produncs",_produncs2,{path:"/"})
					//在页面中删除
					$(this).parents(".prods_1").remove()
					
				}
			});
			if(_produncs2)
		{$(".all_span2").text(_produncs2.length)}
			//计算总和
				let sum1=0;
				//找到checked属性的元素并遍历
				$(".cbox:checked").each(function(){
					let a=$(this).parents(".prods_1").find(".gg").text();
					sum1+=Number(a);
				})
				$(".con_span1").text($(".cbox:checked").length)
				$(".con_span3").text(sum1)
		})
		//全选还是不全选
		$(".add_all").click(function(){
			let status = $(this).prop("checked");
			$("[name='checkbox']").prop("checked", status);
		})
		// //获取是不是选择
		$(".cbox").on("click",function(){
			let sum1=0;
			//找到checked属性的元素并遍历
			$(".cbox:checked").each(function(){
				let a=$(this).parents(".prods_1").find(".gg").text();
				sum1+=Number(a);
			})
			$(".con_span1").text($(".cbox:checked").length)
			$(".con_span3").text(sum1)
		})
		//读取cookie
		let _produncs4=$.cookie("produncs");
		let sum=0;
		if(_produncs4){
		for(let i=0,len=_produncs4.length;i<len;i++){
			sum+=Number($(".gg").eq(i).text());
		}
		$(".con_span1").text(_produncs4.length)
		$(".con_span3").text(sum)
		}
	//输入时
		$(".amount").blur(function(){
			let _amount=$(".amount").val();
			let Reg=/^[1-9]/;
			if(Reg.test(_amount))
			{
				let _price=$(this).parents(".prods_1").find(".iii").text()
				$(this).parents(".prods_1").find(".gg").text(_price*_amount)

				//计算总和
				let sum1=0;
				//找到checked属性的元素并遍历
				$(".cbox:checked").each(function(){
					let a=$(this).parents(".prods_1").find(".gg").text();
					sum1+=Number(a);
				})
				$(".con_span1").text($(".cbox:checked").length)
				$(".con_span3").text(sum1)
			}
		});
		//批量删除
		// //获取是不是选择
		$(".pl_del").on("click",function(){
			let _produncs=$.cookie("produncs");
			console.log(_produncs)
			//找到checked属性的元素并遍历
			console.log($(".cbox:checked"))
			$(".cbox:checked").each(function(){
				//找到当前的id
				 let a=$(this).parents(".prods_1").find("i").text();
				 console.log(a)
				 $(this).parents(".prods_1").remove();
				 //找到cookie中对象
				 _produncs.forEach(function(curr){
				 	if(a==curr.id){
				 		_produncs.splice(_produncs.indexOf(curr),1)
				 		//每次都保存在cookie中
				 		$.cookie("produncs",_produncs,{path:"/"})
				 		//每次改变数值
				 		$(".all_span2").text(_produncs.length)

						if(!_produncs.length){
							$(".img_bg,.sorry").show();
							$(".prods").hide();}
						}
				 });
			});
			 $(".con_span1").text($(".cbox:checked").length)
			 $(".con_span3").text(0)
		});
		//点击支付的时候判断
		$(".zhifu").click(function(){
			//读取cookie
			let _produncs=$.cookie("produncs");
			if(!_produncs.length){
				$(".img_bg,.sorry").hide();
				$(".prods").show();
				alert("您还没有选择任何商品，请去选择")
				location="/index.html";
			}
			else
				
				location="/html/confirm.html"
		});
	})
	
})