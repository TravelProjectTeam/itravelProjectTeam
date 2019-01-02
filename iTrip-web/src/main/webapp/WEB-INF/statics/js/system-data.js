$("#form1").submit(function(){
	var diesName=$("#diesName").val();
	var dicName=$("#dicName").val();
	var bool = true;
	if(diesName==0){
		layer.msg('请选择类型名称!',{icon:2,time:1000});
		return false;
		}
	if(dicName==""){
		layer.msg('不允许存空值!',{icon:2,time:1000});
		return false;
	}
	//将异步改为同步
	$.ajaxSettings.async=false;
	$.post("getIsFields", {
		diesName : diesName,dicName:dicName
	}, function(data) {
		
		if (data >= 1) {
			layer.msg('该值已在本类型中存在!',{icon:2,time:1000});
			bool = false;
		} 
	});
	
	return bool;
})
$('.table-sort').dataTable({
	"aaSorting": [[ 1, "desc" ]],//默认第几个排序
	"bStateSave": true,//状态保存
	"aoColumnDefs": [
	  //{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
	  {"orderable":false,"aTargets":[0,5]}// 制定列不参与排序
	]
});
/* 用户-删除 */
function datadel(id) {
    var checkedNum = $("input[name='sid']:checked").length;
    var checkedList = new Array();
    var bool = false;
    if (checkedNum > 0) {
        if (confirm("确定要删除所选类型值吗?")) {
            $("input[name='sid']:checked").each(function() {
                checkedList.push($(this).val());
            });
            bool = true;
        }
    } else if (id != null) {
        if (confirm("确定要删除该类型值吗?")) {
            checkedList.push(id);
            bool = true;
        }
    } else {
        alert("请选择要删除的类型值！");
        return false;
    }

    if (bool) {
        $.ajax({
            type: "POST",
            url: "deleteDic",
            data: {
                "ids": checkedList.toString()
            },
            success: function(data) {
                layer.msg('已删除!', {
                    icon: 1,
                    time: 1000
                });
                setInterval(function name() {
                    location.reload();
                },
                1000);
            }
        });
    }
}