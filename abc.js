var http=require("http");
http.createServer(function(req,res){
		res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"})
		res.write("热启动简写形式")
		//过滤到小图标的请求
		if(req.url!=="/favicon.ico"){
		console.log("you are nice?")	
		}
		
		res.end();
}).listen(8849)
