package org.itrip.pojo;

import java.util.Date;

import lombok.Data;

@Data
public class Comments {
	/**
	 * 评论表主键
	 */
	private Integer id;
	/**
	 * 酒店id
	 */
	private Integer hotelId;
	/**
	 * 用户图片
	 */
	private String userImage;
	/**
	 * 用户ID
	 */
	private Integer userId;
	/**
	 * 评论等级（1：差评，2：中评，3好评）
	 */
	private Integer commentRank;
	/**
	 * 用户评论
	 */
	private String comment;
	/**
	 * 评论时间
	 */
	private Date createDate;
	/**
	 * 答复人
	 */
	private String replyName;
	/**
	 * 答复内容
	 */
	private String reply;
	/**
	 * 用户电话
	 */
	public String linkUserName;
}
