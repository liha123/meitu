// 验证用户是否存在
$("#userphone").onblur = function(){
	if(regExp("userphone",this.value)){
		//1、创建对象
		let xhr = new XMLHttpRequest();
		
		//2、设置请求参数
		xhr.open('get','php/regCheck.php?userphone='+$(this.value,true));

		//3、设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=='1'){
					$("#hint").innerHTML ='该手机号已经被使用';
				}else{
					$("#hint").innerHTML ='该手机号可以使用';
				}
			}
		}
		//4、发送
		xhr.send();
	}else{
		$("#hint").innerHTML = "输入不合法";
	}
};

// 密码不少于六位
$("#userpass").onblur = function(){
	let password = $("#userpass").value;
	if(password.length<6 ){
		$("#hint").innerHTML = "密码不少于六位";
	}	
}
$("#userpass").onchange = function(){
	$("#hint").innerHTML = "输入合法";
}
// 注册
$("#zhuce").onclick = function(){
	if($("#userphone").value && $("#userpass").value){
		//1、创建对象
	let xhr = new XMLHttpRequest();
	//2、设置请求参数
	xhr.open('post','php/regSave.php',true);

	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(xhr.responseText=='1'){
				console.log(xhr.responseText);
				alert("注册成功");
				location.href="login.html";
			}else{
				alert("注册失败");
			}
		}
	}
	xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	//4、发送
	xhr.send("userphone="+$("#userphone").value+"&userpass="+$("#userpass").value);
	}else{
		alert("不能为空");
	}
	
}