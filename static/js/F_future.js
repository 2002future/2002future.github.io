var chat=document.getElementById("F_future1");
var temp=window.localStorage.getItem("2002future");
if(temp == null || temp == "")
 {window.localStorage.setItem("chat", "加油陌生人");window.localStorage.setItem("2002future","1");;}




// ********************************************************************************************


function topdo(chats) {
	for (var o in chats) {

		var contentOne = chats[o];
		console.log(contentOne)
		var content = document.getElementById("future_content"); //找到留言板
		var level1 = document.createElement('div'); //创建div
		
		
		
				
		var level3 = document.createElement("img");
		level1.appendChild(level3);
		level3.src="https://api.yimian.xyz/img?type=head";
		level3.width="50";
		
		var level2 = document.createElement("h3"); 
		content.appendChild(level1); 
        level1.appendChild(level2);
		level2.innerText = contentOne;		
		
		
	
		
			
	}
}
topdo(dosplit());

// ********************************************************************************************
// localStorage
/**
 * 将object类型存入local storage
 */
var datab = [];
var databb = [];

function saveToLocalStorage() {
	console.log(window.localStorage)
	datab[0] = document.getElementById('F_future1').value;
	if (datab[0] != null && datab[0] != "") {
		if (localStorage.getItem("chat") == null || localStorage.getItem("chat") == "") {
			window.localStorage.setItem("chat", datab[0]);

		} else {
			databb = localStorage.getItem("chat");
			console.log(databb);
			var temp = datab[0];
			var all = databb.concat(',');
			all = databb.concat("," + temp)
			console.log(all);

			window.localStorage.setItem("chat", all);
		}
		 location.reload();
		// 最多保留10000条
	}
}

function dosplit() {
	var m = window.localStorage.getItem("chat");
	if (m != null) {
		var cha = m.split(',');
		// console.log(cha[0]);
		return cha;
	}
}
//获取json长度
function getJsonLength(jsonData) {
	var length;
	for (var ever in jsonData) {
		length++;
	}
	return length;
}
//读取操作
function red_Storage() {
	var jsondata = localStorage.getItem("chat");

	return jsondata;
}


function deleteToLocalStorage(){
	
	alert("已清除")
	 window.localStorage.setItem("chat", "加油陌生人");
	  location.reload();

}