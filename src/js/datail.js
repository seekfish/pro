require(["/js/config.js"],function(){
	require(["jquery","load2"],function(){
		$(function(){		
			
			$(".dianpu").css({"display":"block"});
			$(".img2").hide();
			$(".con").css({"display":"block"});
			$(".my_cart").css({"display":"block"});
			$(".log_btm").css({"display":"none"});
			//点击时，图片发生变化
			$("#li1").click(function(){
				$("#img_1").attr("src","/images/b_14187157133660.jpg");
				$("#img_11").attr("src","/images/m_1418715713311660.jpg");
			});
			$("#li2").click(function(){
				$("#img_11").attr("src","/images/m_14187157104850.jpg");
				$("#img_1").attr("src","/images/12112.jpg");
			})
			//小盒子的宽高
			let _smWidth=$("#yidong").width(),
				_smHeight=$("#yidong").height();
			//大盒子的宽高
			let _bigWidth=$("#img_sm").width(),
				_bigHeight=$("#img_sm").height();
			//移入的时候，显示放大窗口
			$("#img_sm").mouseenter(function(){
				$(".img_big").show();
				$("#yidong").show();
			}).mouseleave(function(){
				$(".img_big").hide();
				$("#yidong").hide();
			}).mousemove(function(){
				//获取鼠标位置
				let _pageX=event.pageX,
					_pageY=event.pageY,
					_big=$("#img_sm").offset(),//获得大盒在文档中的定位
					_sm=$("#yidong").offset();
				let _left=_pageX-_big.left-_smWidth/2,
					_top=_pageY-_big.top-_smHeight/2;
					if(_left<0)
						{_left=0;
						}
					if(_left>=_bigWidth-_smWidth)
						_left=_bigWidth-_smWidth;
					if(_top<0){
						_top=0
					}
					if(_top>=_bigHeight-_smHeight)
						_top=_bigHeight-_smHeight
					$("#yidong").css({
						left:_left,
						top:_top
					})
					$("#img_11").css({
						left:-1.5*_left,
						top:-1.5*_top
					})
			});
			$(".dd1").on("click","a",function(){
				$(this).css({"border":"1px solid red"})
				$(this).siblings().not($(this)).css({"border":"1px solid #bfbfbf "});
			})
			$(".d2").on("click","a",function(){
				$(this).css({"border":"1px solid red"})
				$(this).siblings().not($(this)).css({"border":"1px solid #bfbfbf "});
			})
			$(".dl3_span2").click(function(){
				$(".shu").val(Number($(".shu").val())+1)
			})
			$(".dl3_span1").click(function(){
				$(".shu").val(Number($(".shu").val())-1)
				if($(".shu").val()<=0){
					$(".shu").val("1")
				}
			})
			//点击立即购买的时候
			$(".buy_btn1,.buy_btn2").click(function(){
				//找到当前点击的ID
					let a=$(this).parents().find(".p_id").html();
					console.log(a)
					//当前商品对象
					let product={
						id:a,
						title:$(this).parents().find(".con_right1 h2").html(),
						price:parseInt($(this).parents().find(".span2").text()),
						title2:$(this).parent().prev().find("#title2").text(),
						amount:$(this).parents().find(".shu").val(),
						img:$(this).parents().find("#img_1").attr("src"),
						jine:parseInt($(this).parents().find(".span2").text())
					};
					//先查找cookie中是否有这个商品了
					$.cookie.json=true;
					let _product=$.cookie("produncs")||[];
					let index;
					index=_product.length>0?ed(product.id,_product):-1;
					//找到当前ID是否在cookie中
					if (index === -1) { // 新添加商品
						_product.push(product);
					} else { // 原已有添加，则修改数量
							_product[index].amount++;
						}

					//把当前对象保存在cookie中
					$.cookie("produncs",_product,{path:"/",expires:7});
			})
		})
	})
})
function ed(id,products){
	for (let i = 0, len = products.length; i < len; i++) {
		if (products[i].id === id)
		return i;
	}
	return -1;
}