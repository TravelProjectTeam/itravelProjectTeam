package org.itrip.service;

import java.util.List;
import java.util.Map;

import org.itrip.pojo.Hotel;

public interface HotelService {
	/**
	 * 根据条件查询酒店信息
	 * @param hotelName
	 * @return
	 */
	public List<Hotel> query(Integer countryid);
}
