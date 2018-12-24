package org.itrip.service;

import java.util.List;
import java.util.Map;

import org.itrip.pojo.Dictionaries;
import org.itrip.pojo.Hotel;
import org.itrip.pojo.Hotelbrand;
import org.itrip.pojo.Houses;
import org.itrip.pojo.Rooms;

public interface HotelService {
	
	public Hotel getHotelDatail(Integer id);
	
	public List<Houses> getHotelRoom(Integer id);
	
	public List<Rooms> getHouses(Integer id);
	
	
	/**
	 * 根据条件查询酒店信息
	 * @param hotelName
	 * @return
	 */
	public List<Hotel> query(Integer countryid);
	/**
	 * 根据类型名称查询字典表
	 * @param type
	 * @return
	 */
	public List<Dictionaries> queryDictionaries(String type);
	/**
	 * 12.18根据城市id，关键字查询信息
	 * @param names
	 * @return
	 */
	public Integer queryName(String names);
	/**
	 * 根据条件查询酒店信息
	 * @param map
	 * @return
	 */
	public List<Hotel> queryMap(Map<String,Object> map);
	/**
	 * 查询全部品牌信息
	 * @return
	 */
	public List<Hotelbrand> queryBrand(Integer citysid);
	/**
	 * 根据id查询城市名称
	 * @param cid
	 * @return
	 */
	public String queryCid(Integer cid);
}
