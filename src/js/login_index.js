require(["/js/config.js"],function(){
	require(["jquery","load2","cookie"],function(){
		//绑定点击事件
		$("[name='zhanghao']").click(function(){
			$("[name='zhanghao']").val("")
		}).blur(function(){
			if(!$("[name='zhanghao']").val())
			$("[name='zhanghao']").val("邮箱/用户名/手机号")
		});
		//登录
		$("#btn1").click(function(){
			let _email=$("[name='zhanghao']").val(),
				_password=$("[name='password']").val();
				//提交表单登录
			$.post(
				//url
				"http://127.0.0.1/php/login.php",
				//提交查询的值
				{
					"email":_email,
					"password":_password
				},
				function(data){
					//账号密码错误时
					if(data.res_code!==0)
						{ 
							alert(data.res_error);
						}
					else{
						$.cookie.json = true; // 自动调用JSON.stringify()、JSON.parse()来转换JS值与JSON字符串
						$.cookie("loginUser", data.res_body, {path:"/"});
						location="/index.html"
					}
				},
				//返回JSON
				"json");
			return false;
		});
	})
})