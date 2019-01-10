	function deletes(id){
		if(confirm("确定要删除吗?")){
			//layer.msg('请选择类型名称!',{icon:2,time:1000});
			$.post("delOrder", {
				id : id
			}, function(data) {
				if (data >= 1) {
					alert("删除成功！");
				} else {
					alert("删除失败！");
				}
				location.reload();
			});
		}
	}
	function upds(id){
		if(confirm("确定要取消吗?")){
			$.post("updOrder", {
				id : id
			}, function(data) {
				if (data >= 1) {
					alert("修改成功！");
				} else {
					alert("修改失败！");
				}
				location.reload();
			});
		}
	}
