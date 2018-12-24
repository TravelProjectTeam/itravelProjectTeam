package org.itrip.pojo;

import java.sql.Date;

public class Hotel {
	private Integer id;// 主键
	private String hotelName;// 酒店名称
	private Integer countryid;// 酒店所在城市
	private Integer provinceid;// 酒店所在省份
	private String address;// 酒店地址
	private String details;// 酒店详细信息
	private String hotelPolicy;// 酒店政策
	private Integer hotelType;// 酒店类型
	private Date creationDate;// 创建时间
	private Integer createdBy;// 创建人
	private Date modifyDate;// 修改时间
	private int modifiedBy;// 修改人
	private String phone;// 电话
	private Double score;// 满意度
	private String facilitiesName;// 酒店实施
	private String hotelservices;// 酒店服务
	private String photograph;//酒店图片
	private int brandId;//品牌ID
	
	private Float minimum;// 最低值
	private String alias;//酒店类型

	

	public int getBrandId() {
		return brandId;
	}

	public void setBrandId(int brandId) {
		this.brandId = brandId;
	}

	/**
	 * @return the alias
	 */
	public String getAlias() {
		return alias;
	}

	/**
	 * @param alias the alias to set
	 */
	public void setAlias(String alias) {
		this.alias = alias;
	}

	public String getFacilitiesName() {
		return facilitiesName;
	}

	public void setFacilitiesName(String facilitiesName) {
		this.facilitiesName = facilitiesName;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	// 添加属性
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

	public String getHotelservices() {
		return hotelservices;
	}

	public void setHotelservices(String hotelservices) {
		this.hotelservices = hotelservices;
	}

	public String getPhotograph() {
		return photograph;
	}

	public void setPhotograph(String photograph) {
		this.photograph = photograph;
	}

	public Float getMinimum() {
		return minimum;
	}

	public void setMinimum(Float minimum) {
		this.minimum = minimum;
	}

}