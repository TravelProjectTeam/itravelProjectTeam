var brand=0;//品牌
	var price1=0//价格下限
	var price2=1000;//价格上限
	var rating=0;//星级
$(function() {
	
	//品牌相关操作
	$("#brand").click(function() {
		var radioLength = $("input[name='brand']").length;
		for (var i = 0; i < radioLength; i++) {
			$("input[name='brand']")[i].checked=false;
		}
		$("#brand").css("background-color","#5aabfc");
		$("#brand").css("color","#fff");
		brand=0;
		queryHotels();
	});
	var radioBrand = $("input[name='brand']").length;
	for (var i = 0; i < radioBrand; i++) {
		if($("input[name='brand']")[i].checked==true){
			$("#brand").css("background-color","white");
			$("#brand").css("color","black");
			brand =$('input[name="brand"]:checked').val();//品牌加载赋值
		}
	};
	$("input[name='brand']").click(function() {
		var radioBrands = $("input[name='brand']").length;
		for (var i = 0; i < radioBrands; i++) {
			if($("input[name='brand']")[i].checked==true){
				$("#brand").css("background-color","white");
				$("#brand").css("color","black");
				brand =$('input[name="brand"]:checked').val();//品牌单击赋值
				/* var i = $('input[name="brand"]:checked').val(); */
				queryHotels();
			}
		}
	});
	
	//星级相关操作
	$("#rating").click(function() {
		var radioLength = $("input[name='rating']").length;
		for (var i = 0; i < radioLength; i++) {
			$("input[name='rating']")[i].checked=false;
		}
		$("#rating").css("background-color","#5aabfc");
		$("#rating").css("color","#fff");
		rating=0;
		queryHotels();
	});
	var radioRating = $("input[name='rating']").length;
	for (var i = 0; i < radioRating; i++) {
		if($("input[name='rating']")[i].checked==true){
			$("#rating").css("background-color","white");
			$("#rating").css("color","black");
			rating = $('input[name="rating"]:checked').val();//星级加载赋值
		}
	};
	$("input[name='rating']").click(function() {
		var radioRatings = $("input[name='rating']").length;
		for (var i = 0; i < radioRatings; i++) {
			if($("input[name='rating']")[i].checked==true){
				$("#rating").css("background-color","white");
				$("#rating").css("color","black");
				rating = $('input[name="rating"]:checked').val();//星级单击赋值
				/* var i = $('input[name="rating"]:checked').val(); */
				queryHotels();
			}
		}
	});
	
	//价格相关操作
	$("#yep").click(function() {
		var radiopriceArea = $("input[name='priceArea']").length;
		for (var i = 0; i < radiopriceArea; i++) {
			$("input[name='priceArea']")[i].checked=false;
		}
		$("#yep").css("background-color","#5aabfc");
		$("#yep").css("color","#fff");
		$("#price1").val(0);
		$("#price2").val(1000);
		price1 = 0;
		price2=1000;
		queryHotels();
		
	});
		var radioPrice = $("input[name='priceArea']").length;
		for (var i = 0; i < radioPrice; i++) {
			if($("input[name='priceArea']")[i].checked==true){
				$("#yep").css("background-color","white");
				$("#yep").css("color","black");
				switch ($('input[name="priceArea"]:checked').val()) {
				case "1":
					$("#price1").val(0);
					$("#price2").val(199);
					price1 = 0;
					price2=199;
					break;
				case "2":
					$("#price1").val(200);
					$("#price2").val(400);
					price1 = 200;
					price2=400;
					break;
				case "3":
					$("#price1").val(400);
					$("#price2").val(600);
					price1 = 400;
					price2=600;
					break;
				case "4":
					$("#price1").val(600);
					$("#price2").val(1000);
					price1 = 600;
					price2=1000;
					break;

				}
			}
		};
		$("input[name='priceArea']").click(function() {
			var priceArea = $('input[name="priceArea"]:checked').val()
			var radioPrices = $("input[name='priceArea']").length;
			for (var i = 0; i < radioPrices; i++) {
				if($("input[name='priceArea']")[i].checked==true){
					$("#yep").css("background-color","white");
					$("#yep").css("color","black");
					
					switch ($('input[name="priceArea"]:checked').val()) {
					case "1":
						$("#price1").val(0);
						$("#price2").val(199);
						price1 = 0;
						price2=199;
						break;
					case "2":
						$("#price1").val(200);
						$("#price2").val(400);
						price1 = 200;
						price2=400;
						break;
					case "3":
						$("#price1").val(400);
						$("#price2").val(600);
						price1 = 400;
						price2=600;
						break;
					case "4":
						$("#price1").val(600);
						$("#price2").val(1000);
						price1 = 600;
						price2=1000;
						break;
					}
					queryHotels();
				}
			}
		});
		
	}); 
function queryHotels(){
	var rankts=0;
	var country=$("#citySelect").val();
	var name=$("#key_input").val();
	var arr =[price1,price2,rating,brand,country,name,rankts];
	location.href="queryH?arr="+arr;
	
}