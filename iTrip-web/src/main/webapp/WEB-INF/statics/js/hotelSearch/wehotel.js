var price1 =0;//价格下限
var price2 =1000;//价格上限
var rating =0;//获得星级Id
var brand =0;//获得品牌Id
var rankts = 0;//排序
$(function(){
	
})
/*排序*/
function rankt(ranks){
	rankts=ranks;
	//queryHotels();
}
/*获得品牌Id*/
function changeBrand(abc){
//	var browsers = $("input[name=brand]"); 
	if(abc==0){
		$("#brand").css("background-color","#5aabfc");
		$("#brand").css("color","#fff");
		browsers.attr("checked",false);
	}else{
		$("#brand").css("background-color","white");
		$("#brand").css("color","black");
	}
	brand = abc;
	//queryHotels();
}
/*获的星级id*/
function changeStarRating(xx){
	if(xx==0){
		$("#rating").css("background-color","#5aabfc");
		$("#rating").css("color","#fff");
	}else{
		$("#rating").css("background-color","#5aabfc");
		$("#rating").css("color","black");
	}
	rating = xx;
	//queryHotels();
}
/*获得价格*/
function changePrice(x){
	if(x==0){
		$("#yep").css("background-Color","#5aabfc");
		$("#yep").css("color","#fff");
	}else{
		
		$("#yep").css("background-Color","");
		$("#yep").css("color","black");
	}
	
	if(x==1){
		$("#price1").val(0);
		$("#price2").val(199);
		price1 = 0;
		price2=199;
	}else if(x==2){
		$("#price1").val(200);
		$("#price2").val(400);
		price1 = 200;
		price2=400;
	}else if(x==3){
		$("#price1").val(400);
		$("#price2").val(600);
		price1 = 400;
		price2=600;
	}else if(x==4){
		$("#price1").val(600);
		$("#price2").val(1000);
		price1 = 600;
		price2=1000;
	}else if(x==0||x==null){
		$("#price1").val(0);
		$("#price2").val(1000);
		
		price1 = 0;
		price2=1000;
		
	}else if(x="custom"){
		price1=$("#price1").val();
		price2=$("#price2").val();
	}
	//queryHotels();
}


function queryHotels(){
	var country=$("#citySelect").val();
	var name=$("#key_input").val();
	var arr =[price1,price2,rating,brand,country,name,rankts];
	location.href="queryH?arr="+arr;
	
}
