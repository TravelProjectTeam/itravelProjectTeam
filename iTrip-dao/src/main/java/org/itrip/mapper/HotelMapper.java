package org.itrip.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.itrip.pojo.Dictionaries;
import org.itrip.pojo.Hotel;
import org.itrip.pojo.Hotelbrand;
import org.itrip.pojo.Houses;
import org.itrip.pojo.Rooms;

public interface HotelMapper {
	
	/**
	 * 根据条件查询酒店信息
	 * @author 邹航
	 * @param hotelName
	 * @return
	 */
	public List<Hotel> query(@Param("countryid") Integer countryid);
	/**
	 * 查询全部品牌信息
	 * @return
	 */
	public List<Hotelbrand> queryBrand(@Param("citysid") Integer citysid);
	/**
	 * 12.18根据城市id，关键字查询信息
	 * @param names
	 * @return
	 */
	public Integer queryName(@Param("names") String names);
	/**
	 * 根据id查询城市名称
	 * @param cid
	 * @return
	 */
	public String queryCid(@Param("cid") Integer cid);
	/**
	 * 根据条件查询酒店信息
	 * @param map
	 * @return
	 */
	public List<Hotel> queryMap(Map<String,Object> map);
	/**
	 * 根据类型名称查询字典表
	 * @return
	 */
	public List<Dictionaries> queryDictionaries(@Param("type") String type);
	/**
	 * 条件查询酒店详情
	 * @param id
	 * @return
	 */
	public Hotel getHotelDatail(@Param("id")Integer id);
	/**
	 * 查询酒店房型
	 * @param id
	 * @return
	 */
	public List<Houses> getHotelRoom(@Param("id")Integer id);
	/**
	 * 对酒店房名进行分类
	 * @param id
	 * @return
	 */
	public List<Rooms> getHouses(@Param("id")Integer id);
	
	
}
