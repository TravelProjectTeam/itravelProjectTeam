$(function(){
	var bookingDays=$("#bookingDays").val();
		$("#select1").change(function(){
			var select=$("#select1  option:selected").text();
			for(var num =1;num<=select;num++){
				$('span[name="binding"]').html(num+"间");
				$('#binding2').html(num+"间");
				var price=$("#price1").val();
				$("span[name='price']").html("￥"+price*num);
				var day=$("#day").html().replace(/[^\d]/g, "");
				$("#xiaoji").html("￥"+price*num*day);
				$("#sumPrice").html("￥"+price*num*day);
			}
		});
});