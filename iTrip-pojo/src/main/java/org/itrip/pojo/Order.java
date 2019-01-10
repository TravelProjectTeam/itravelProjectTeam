package org.itrip.pojo;

import lombok.Data;

@Data
public class Order {
	private int id;//订单表id
	private String userId;//用户id
	private String orderNo;//订单编号
	private String hotelId;//酒店id
	private String roomId;//酒店房间id
	private String count;//预订房间数量
	private String bookingDays;//预订天数
	private String checkInDate;//入住日期
	private String checkOutDate;//退房日期
	private String orderStatus;//订单状态（0：待支付 1：已取消 2：支付成功 3：已消费）
	private String payAmount;//支付金额
	private String payType;//支付类型（支付方式：0:未支付 1：支付宝 2：到店支付）
	private String noticePhone;//联系电话
	private String noticeEmail;//联系邮箱
	private String specialRequirement;//特殊要求
	private String linkUserName;//联系人姓名
	private String creationDate;//创建日期
	private String createdBy;//创建人
	private String modifyDate;//修改日期
	private String modifiedBy;//修改人
	
	//添加属性
	private String month;//月份
	private String sale;//总价
	private String orders;//订单数
	private String valueName;//房型名称
	private String hotelName;//酒店名称
	private String detailsImage1;//酒店图片
	
}
