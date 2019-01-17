package org.itrip.pojo;

import java.util.Date;

import lombok.Data;

@Data
public class Orders {
	private int id;//订单表id
	private Integer userId;//用户id
	private String orderNo;//订单编号
	private Integer hotelId;//酒店id
	private Integer roomId;//酒店房间id
	private Integer roomsId;//房间套餐id
	private Integer count;//预订房间数量
	private Integer bookingDays;//预订天数
	private Date checkInDate;//入住日期
	private Date checkOutDate;//退房日期
	private String orderStatus;//订单状态（0：预订成功 1：待消费 2：已消费 3：已取消）
	private Float payAmount;//支付金额
	private String payType;//支付类型（支付方式： 1：支付宝 2：到店支付）
	private String noticePhone;//联系电话
	private String noticeEmail;//联系邮箱
	private String specialRequirement;//特殊要求
	private String linkUserName;//联系人姓名
	private Date creationDate;//创建日期
	private String createdBy;//创建人
	private String modifyDate;//修改日期
	private String modifiedBy;//修改人
	private String payStatus;//支付状态
	
	private String month;//月份
	private String sale;//总价
	private String orders;//订单数
	
	private String hotelName; //酒店名称
	private String hotelType;//酒店类型
	private String address;//酒店地址
	private String roomName; 
	private String endDate; 
	private String phone;//酒店电话
	
	private String detailsImage1;//酒店图片
	private String valueName;
	private String roomImage;//房型图片
		
}
