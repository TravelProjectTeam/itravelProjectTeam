package org.itrip.pojo;

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
	
	
	private String month;//月份
	private String sale;//总价
	private String orders;//订单数
	
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getSale() {
		return sale;
	}
	public void setSale(String sale) {
		this.sale = sale;
	}
	public String getOrders() {
		return orders;
	}
	public void setOrders(String orders) {
		this.orders = orders;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getOrderNo() {
		return orderNo;
	}
	public void setOrderNo(String orderNo) {
		this.orderNo = orderNo;
	}
	public String getHotelId() {
		return hotelId;
	}
	public void setHotelId(String hotelId) {
		this.hotelId = hotelId;
	}
	public String getRoomId() {
		return roomId;
	}
	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}
	public String getCount() {
		return count;
	}
	public void setCount(String count) {
		this.count = count;
	}
	public String getBookingDays() {
		return bookingDays;
	}
	public void setBookingDays(String bookingDays) {
		this.bookingDays = bookingDays;
	}
	public String getCheckInDate() {
		return checkInDate;
	}
	public void setCheckInDate(String checkInDate) {
		this.checkInDate = checkInDate;
	}
	public String getCheckOutDate() {
		return checkOutDate;
	}
	public void setCheckOutDate(String checkOutDate) {
		this.checkOutDate = checkOutDate;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public String getPayAmount() {
		return payAmount;
	}
	public void setPayAmount(String payAmount) {
		this.payAmount = payAmount;
	}
	public String getPayType() {
		return payType;
	}
	public void setPayType(String payType) {
		this.payType = payType;
	}
	public String getNoticePhone() {
		return noticePhone;
	}
	public void setNoticePhone(String noticePhone) {
		this.noticePhone = noticePhone;
	}
	public String getNoticeEmail() {
		return noticeEmail;
	}
	public void setNoticeEmail(String noticeEmail) {
		this.noticeEmail = noticeEmail;
	}
	public String getSpecialRequirement() {
		return specialRequirement;
	}
	public void setSpecialRequirement(String specialRequirement) {
		this.specialRequirement = specialRequirement;
	}
	public String getLinkUserName() {
		return linkUserName;
	}
	public void setLinkUserName(String linkUserName) {
		this.linkUserName = linkUserName;
	}
	public String getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(String creationDate) {
		this.creationDate = creationDate;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public String getModifyDate() {
		return modifyDate;
	}
	public void setModifyDate(String modifyDate) {
		this.modifyDate = modifyDate;
	}
	public String getModifiedBy() {
		return modifiedBy;
	}
	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
	
}
