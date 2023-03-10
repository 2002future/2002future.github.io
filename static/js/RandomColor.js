// 随机颜色

var  bg_color=["linear-gradient(to right, #FF0066 0%, #FF00CC 100%)",
               "linear-gradient(to right, #9900FF 0%, #CC66FF 100%)",
			   "linear-gradient(to right, #2196F3 0%, #42A5F5 100%)",
			   "linear-gradient(to right, #00BCD4 0%, #80DEEA 100%)",
			   "linear-gradient(to right, #FFEB3B 0%, #c3ff74 100%)",	
			   "linear-gradient(to right, #4CAF50 0%, #81C784 100%)",
			   "linear-gradient(to right, #FFEB3B 0%, #FFF176 100%)",
			    "linear-gradient(to right, #ff03ff 0%, #FF00CC 100%)",
              ];
var temp=1;
while(temp<=4){
	$("button:nth-child("+temp+")").css("background",bg_color[Math.floor(Math.random()*bg_color.length)]);
	temp+=1;
	console.log(temp);
}

// $("#future_F1>button:nth-child(2)").css("background",bg_color[Math.floor(Math.random()*bg_color.length)]);
// $("#future_F1>button:nth-child(3)").css("background",bg_color[Math.floor(Math.random()*bg_color.length)]);