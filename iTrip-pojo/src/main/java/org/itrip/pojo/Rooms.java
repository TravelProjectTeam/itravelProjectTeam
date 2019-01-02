package org.itrip.pojo;

import java.util.Date;

import lombok.Data;

@Data
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
}
