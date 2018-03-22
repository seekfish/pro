require(["/js/config.js"],function(){
	require(["jquery","load2","cookie"],function($){
		//绑定点击事件
		$("[name='zhanghao']").click(function(event){
			event.stopPropagation();    
			$("[name='zhanghao']").val("");
			$("#i1").html("");
			$("#i1").removeClass("txt_i");
			$("#i1").removeClass("txt_i1");
			$("[name='zhanghao']").css({"border":"1px solid #ccc"});
		}).blur(function(){//失去焦点
			if(!$("[name='zhanghao']").val())
				{
					$("#i1").html("邮箱/用户名/手机号不能为空");
					$("[name='zhanghao']").css({"border":"1px solid red"});
				return;
				}
			let _val=$("[name='zhanghao']").val();//获得输入框的值
			$.get("http://127.0.0.1/php/check.php",{"email":_val},
				function(data){
					if(data.res_body.status!==0){
						$("#i1").addClass("txt_i")
						$(".txt_i").html("该账号已被注册，请重新输入").show();
						return;
					}else{
						$("#i1").addClass("txt_i1")
						$(".txt_i1").show();
						}	
				},"json")
		});
		//输入密码
		$("[name='password']").click(function(event){
			event.stopPropagation(); 
			$("[name='password']").val("");
			$("#i2").removeClass("txt_i1")
			$("#i2").html("6-12个字符之间");
			$("[name='password']").css({"border":"1px solid #ccc"});
		}).blur(function(){//失去焦点
			if(!$("[name='password']").val()){
					$("#i2").html("密码不能为空").css({"color":"#F1756B"});
					$("[name='password']").css({"border":"1px solid red"});
				return;
				}
			let _val=$("[name='password']").val().length;//获得输入框的值
			if(_val>=6&&_val<=12){
				$("#i2").addClass("txt_i1").show();
				$("#i2").html("");
			}else{
				$("#i2").html("密码长度不符").css({"color":"red"})
				return;
			}
			//确认密码
			$("[name='queren']").click(function(event){
				event.stopPropagation(); 
				$("[name='queren']").val("");
				$("#i3").removeClass("txt_i1")
				$("[name='queren']").css({"border":"1px solid #ccc"});
			}).blur(function(){//失去焦点
				if(!$("[name='queren']").val()){
						$("#i3").html("密码不能为空").css({"color":"#F1756B"});
						$("[name='queren']").css({"border":"1px solid red"});
					}
				let _val=$("[name='password']").val(),//获得输入框的值
					_val2=$("[name='queren']").val();
				if(_val!==_val2){
					$("#i3").html("密码不正确").css({"color":"red"})
					return;
				}	
				$("#i3").addClass("txt_i1").show();
				$("#i3").html("");

			});
			
		});		
		//让按钮可以点击
		$("#btn1").removeAttr("disabled").css({"cursor": "pointer"});
		//点击注册
		$("#btn1").click(function(){
			//获取用户名和密码
			let _zhanghao=$("[name='zhanghao']").val(),
				_mima=$("[name='password']").val();
			$.post("http://127.0.0.1/php/register.php",
				{"email":_zhanghao,"password":_mima},
				function(data){
					 if (data.res_code == 0) {
							//保存注册成功的用户信息到 cookie 中
							$.cookie.json = true; // 自动调用JSON.stringify()、JSON.parse()来转换JS值与JSON字符串
							$.cookie("loginUser", data.res_body, {path:"/"});
							location = "/index.html";
						} else {
						$(".tishi").html("用户注册失败，请稍后重试...");
						}
				},
				"json")
					return false;
			});
	})
})