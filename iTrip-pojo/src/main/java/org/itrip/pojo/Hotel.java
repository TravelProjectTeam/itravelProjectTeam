package org.itrip.pojo;

import java.sql.Date;

public class Hotel {
	private Integer id;//主键
	private String hotelName;//酒店名称
	private Integer countryid;//酒店所在城市
	private Integer provinceid;//酒店所在省份
	private String address;//酒店地址
	private String details;//酒店详细信息
	private String hotelPolicy;//酒店政策
	private Integer hotelType;//酒店类型
	private Date creationDate;//创建时间
	private Integer createdBy;//创建人
	private Date modifyDate;//修改时间
	private int modifiedBy;//修改人
	private String phone;//电话
	
	//添加属性
	private String roomAlias;
	
	public String getRoomAlias() {
		return roomAlias;
	}
	public void setRoomAlias(String roomAlias) {
		this.roomAlias = roomAlias;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	public Integer getCountryid() {
		return countryid;
	}
	public void setCountryid(Integer countryid) {
		this.countryid = countryid;
	}
	public Integer getProvinceid() {
		return provinceid;
	}
	public void setProvinceid(Integer provinceid) {
		this.provinceid = provinceid;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public String getHotelPolicy() {
		return hotelPolicy;
	}
	public void setHotelPolicy(String hotelPolicy) {
		this.hotelPolicy = hotelPolicy;
	}
	public Integer getHotelType() {
		return hotelType;
	}
	public void setHotelType(Integer hotelType) {
		this.hotelType = hotelType;
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
	public int getModifiedBy() {
		return modifiedBy;
	}
	public void setModifiedBy(int modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
}
