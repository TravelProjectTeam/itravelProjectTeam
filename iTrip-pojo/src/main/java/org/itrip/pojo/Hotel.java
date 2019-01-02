package org.itrip.pojo;

import java.sql.Date;

import lombok.Data;

@Data
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
	private String brandName;//品牌
	private Float minimum;// 最低值
	private String alias;//酒店类型
	private String checkDate;//入住时间
	private String leaveDate;//退房时间
	
	//增加字段
	private String cityName;//城市名称
	// 添加属性
	private String roomAlias;
	
	public static void main(String[] args) {
		Hotel hotel = new Hotel();
		hotel.setAddress("12313");
		System.out.println(hotel.toString());
	}
}