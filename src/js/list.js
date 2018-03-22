require(["/js/config.js"],function(){
	require(["jquery","template","load","cookie"],function($,template){
		//立即执行函数
		$(function(){
			//动态加载数据
			$.getJSON("/mock/list.json",function(data){
				let _data={
				list:data.res_body.list
				}
				let html=template("list_tem",_data);
				$(".main .box").html(html);
				//加载完成以后
					//划过
				$(".con_one").mouseenter(function(){
					$(this).children().last().show();
				}).mouseleave(function(){
					$(this).children().last().hide();
				});
				//加载完成后
				//点击加入购物车,用事件委派的方式
				$(".hov").on("click","#now_buy",function(){
					//弹出提示框，加入成功
					$(this).parent().parent().children().first().fadeIn("slow").fadeOut("slow");
					//找到当前点击的ID
					let a=$(this).parent().parent().parent().children().first().html();
					//当前商品对象
					let product={
						id:a,
						title:$(this).parent().prev().find("#title").text(),
						price:$(this).parent().prev().find("#price").text(),
						title2:$(this).parent().prev().find("#title2").text(),
						amount:1,
						img:$(this).parent().prev().prev().find("#prod_img").attr("src"),
						jine:$(this).parent().prev().find("#price").text()
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
				return false;
			});
		});
	})
})
function ed(id,products){
	for (let i = 0, len = products.length; i < len; i++) {
		if (products[i].id === id)
		return i;
	}
	return -1;
}