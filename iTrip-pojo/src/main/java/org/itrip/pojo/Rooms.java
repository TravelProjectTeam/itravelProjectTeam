package org.itrip.pojo;

import java.util.Date;

public class Rooms {
	private Integer id;
	private Integer hotelId;//酒店id
	private Integer houseId;//房型id
	private Integer bedId;//床型id
	private String roomTitle;//会员类型
	private Float price;//价格
	private Integer isbreakfast;//是否含早餐
	private Integer cancellationPolicy;//取消政策
	private Integer number;//房间人数
	private Integer payType;//支付类型
	private Double satisfaction;//满意度
	private Integer isBook;//是否预定
	private Integer isCancel;//是否取消
	private Integer isTimelyResponse;//是否及时确认
	private Date creationDate;//创建时间
	private Integer createdBy;//创建人
	private Date modifyDate;//修改时间
	private Integer modifyBy;//修改人
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getHotelId() {
		return hotelId;
	}
	public void setHotelId(Integer hotelId) {
		this.hotelId = hotelId;
	}
	public Integer getHouseId() {
		return houseId;
	}
	public void setHouseId(Integer houseId) {
		this.houseId = houseId;
	}
	public Integer getBedId() {
		return bedId;
	}
	public void setBedId(Integer bedId) {
		this.bedId = bedId;
	}
	public String getRoomTitle() {
		return roomTitle;
	}
	public void setRoomTitle(String roomTitle) {
		this.roomTitle = roomTitle;
	}
	public Float getPrice() {
		return price;
	}
	public void setPrice(Float price) {
		this.price = price;
	}
	public Integer getIsbreakfast() {
		return isbreakfast;
	}
	public void setIsbreakfast(Integer isbreakfast) {
		this.isbreakfast = isbreakfast;
	}
	public Integer getCancellationPolicy() {
		return cancellationPolicy;
	}
	public void setCancellationPolicy(Integer cancellationPolicy) {
		this.cancellationPolicy = cancellationPolicy;
	}
	public Integer getNumber() {
		return number;
	}
	public void setNumber(Integer number) {
		this.number = number;
	}
	public Integer getPayType() {
		return payType;
	}
	public void setPayType(Integer payType) {
		this.payType = payType;
	}
	public Double getSatisfaction() {
		return satisfaction;
	}
	public void setSatisfaction(Double satisfaction) {
		this.satisfaction = satisfaction;
	}
	public Integer getIsBook() {
		return isBook;
	}
	public void setIsBook(Integer isBook) {
		this.isBook = isBook;
	}
	public Integer getIsCancel() {
		return isCancel;
	}
	public void setIsCancel(Integer isCancel) {
		this.isCancel = isCancel;
	}
	public Integer getIsTimelyResponse() {
		return isTimelyResponse;
	}
	public void setIsTimelyResponse(Integer isTimelyResponse) {
		this.isTimelyResponse = isTimelyResponse;
	}
	public Date getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}
	public Integer getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(Integer createdBy) {
		this.createdBy = createdBy;
	}
	public Date getModifyDate() {
		return modifyDate;
	}
	public void setModifyDate(Date modifyDate) {
		this.modifyDate = modifyDate;
	}
	public Integer getModifyBy() {
		return modifyBy;
	}
	public void setModifyBy(Integer modifyBy) {
		this.modifyBy = modifyBy;
	}
	
	
}
