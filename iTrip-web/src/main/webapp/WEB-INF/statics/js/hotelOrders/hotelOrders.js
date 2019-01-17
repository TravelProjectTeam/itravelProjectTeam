function upds(id){
			if(confirm("确定要取消吗?")){
				
				var checkOutDate=$("#checkOutDate").val();
				var dB = new Date(checkOutDate.replace(/-/g, "/"));//获取酒店入住日期
				var d = new Date();
				var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();//获取当前实际日期
				
				if (Date.parse(dB) > Date.parse(str)) {//时间戳对比
						$.post("updOrder", {
							id : id
						}, function(data) {
							if (data >= 1) {
								layer.msg("修改成功！");
							} else {
								layer.msg("修改失败！");
							}
							location.reload();
						});
					}
				
				if (Date.parse(dB) == Date.parse(str)) {//时间戳对比
					alert(Date.parse(str));
					alert(Date.parse(dB));
					var currentTime = d.getHours() + "" + d.getMinutes();
					alert(currentTime);           
					if (currentTime >1800) {
						layer.msg("订单取消在当天入住下午18:00之前，给您带来的不便敬请谅解，谢谢！");  
						 return false;              
					 }else{
						 $.post("updOrder", {
								id : id
							}, function(data) {
								if (data >= 1) {
									layer.msg("修改成功！");
								} else {
									layer.msg("修改失败！");
								}
								location.reload();
							});
					 }
				    return 1;
				} 
				  return 0;
			}
		};
		
		function upds1(id){
			if(confirm("确定要取消吗?")){
				 $.post("updOrder", {
						id : id
					}, function(data) {
						if (data >= 1) {
							layer.msg("修改成功！");
						} else {
							layer.msg("修改失败！");
						}
						location.reload();
					});
			}
		}
		
		function deletes(id){
			if(confirm("确定要删除吗?")){
				//layer.msg('请选择类型名称!',{icon:2,time:1000});
				$.post("delOrder", {
					id : id
				}, function(data) {
					if (data >= 1) {
						layer.msg("删除成功！");
					} else {
						layer.msg("删除失败！");
					}
					location.reload();
				});
			}
		};
		