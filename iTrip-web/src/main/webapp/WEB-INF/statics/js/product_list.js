function delHotel(id) {
    var checkedNum = $("input[name='id']:checked").length;
    var checkedList = new Array();
    var bool = false;
    if (checkedNum > 0) {
        if (confirm("确定要删除所选类型值吗?")) {
            $("input[name='id']:checked").each(function() {
                checkedList.push($(this).val());
            });
            alert(JSON.stringify(checkedList))
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
            url: "deleteManyHotel",
            data: {
                ids: checkedList.toString()
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
