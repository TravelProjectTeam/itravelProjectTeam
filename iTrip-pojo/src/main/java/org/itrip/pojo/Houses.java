package org.itrip.pojo;
/**
 * 房型类
 * @author 丑角
 *
 */

public class Houses {
	private Integer id;
	private Integer hotelId;//酒店id
	private String roomNameId;//房间标题
	private Double roomPrice;//房间价格
	private Integer roomsId;//套餐id
	private String roomSize;//房间面积
	private String bedArea;//床面积
	private String floor;//楼层
	private String isHavingbed;//是否可加床（0：可以加床 1：不允许加床）
	private String window;//窗户
	private String roomImage;//房型图片
	
	//增加字段
	private String valueName; //房型名称
	private String roomTitle;//会员类型
	private Float price;//价格
	private Integer isbreakfast;//是否含早餐
	private Integer cancellationPolicy;//取消政策
	private Integer number;//房间人数
	
	
	
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
	public String getRoomNameId() {
		return roomNameId;
	}
	public void setRoomNameId(String roomNameId) {
		this.roomNameId = roomNameId;
	}
	public Double getRoomPrice() {
		return roomPrice;
	}
	public void setRoomPrice(Double roomPrice) {
		this.roomPrice = roomPrice;
	}
	public Integer getRoomsId() {
		return roomsId;
	}
	public void setRoomsId(Integer roomsId) {
		this.roomsId = roomsId;
	}
	public String getRoomSize() {
		return roomSize;
	}
	public void setRoomSize(String roomSize) {
		this.roomSize = roomSize;
	}
	
	
	public String getBedArea() {
		return bedArea;
	}
	public void setBedArea(String bedArea) {
		this.bedArea = bedArea;
	}
	public String getFloor() {
		return floor;
	}
	public void setFloor(String floor) {
		this.floor = floor;
	}
	public String getIsHavingbed() {
		return isHavingbed;
	}
	public void setIsHavingbed(String isHavingbed) {
		this.isHavingbed = isHavingbed;
	}
	public String getWindow() {
		return window;
	}
	public void setWindow(String window) {
		this.window = window;
	}
	public String getValueName() {
		return valueName;
	}
	public void setValueName(String valueName) {
		this.valueName = valueName;
	}
	public String getRoomImage() {
		return roomImage;
	}
	public void setRoomImage(String roomImage) {
		this.roomImage = roomImage;
	}
		
}
