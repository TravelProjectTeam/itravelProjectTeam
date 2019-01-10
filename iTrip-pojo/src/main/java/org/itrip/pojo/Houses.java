package org.itrip.pojo;

import java.util.List;

import lombok.Data;

/**
 * 房型类
 * @author 丑角
 *
 */
@Data
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
	private String bedsId;//床型id
	private String ceiling;//该房型人数上限
	
	//增加字段
	private String hotelName;//酒店名称
	private String valueName; //房型名称
	private String roomTitle;//会员类型
	private Float price;//价格
	private Integer isbreakfast;//是否含早餐
	private Integer cancellationPolicy;//取消政策
	private String provinceid;//所属省份
	private String countryid;//所属城市
	private List<Rooms> roomsList;
}
