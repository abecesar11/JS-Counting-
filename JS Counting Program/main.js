var username=prompt("please enter your name");
$(".hello").text("Hello "+username)


//$(".hello").on("click",function (){
	//$(".world").text("world")
//})

$("#button4").on("click",function(){
	var num=$("input").val()
	for(i=0;i<=num;i++
		){
  	$("h3").append(i+"<br>")
	}
})


$("#button2").on("click",function(){
	var num=$("#button").val()
	for(i=0;i<=num;i+=2
		){
  	$("h4").append(i+"<br>")
	}
})

// $("button") .on ("click",function(){}
//  var num=$("input").val()
//  $("h2"). text (num)						 