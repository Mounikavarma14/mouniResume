function loadjson(file,callback){
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
if(xhr.readystate===4 && xhr.status=="200");
	callback(xhr.responseText);
}
};
xhr.send();

loadjson("data.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	})
