var  api_wuyu="https://api.yimian.xyz/img?type=head";  //头像
var  bg_image=["https://api.r10086.com/img-api.php?type=风景系列2",
               "https://api.r10086.com/img-api.php?type=P站系列1",
			   "https://api.r10086.com/img-api.php?type=风景系列1"
              ];

















document.getElementById("api_use1").setAttribute("src",api_wuyu);//头像
var random=Math.floor(Math.random()*bg_image.length);//随机背景图 会根据数组长度加
document.getElementById("nav").style.backgroundImage="url("+bg_image[random]+")";//随机背景图



