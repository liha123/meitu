// 登录

$("#denglu").onclick = function(){
	if($("#userphone").value&&$("#userpass").value){
		//1、创建对象
	let xhr = new XMLHttpRequest();
	
	//2、设置请求参数
	xhr.open('post','php/login.php',true);

	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(xhr.responseText=='1'){
				console.log(xhr.responseText);
				// //存cookie
				// saveCookie("userphone",$("#userphone").value,7);
				// // alert(getCookie("userphone"));
				alert("登录成功");
				location.href = "index.html";
				
			}else{
				alert("登录失败");
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

