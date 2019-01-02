package org.itrip.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.itrip.pojo.Beds;
import org.itrip.pojo.Citys;
import org.itrip.pojo.Dictionaries;
import org.itrip.pojo.Hotel;
import org.itrip.pojo.Hotelbrand;
import org.itrip.pojo.Houses;
import org.itrip.pojo.Order;
import org.itrip.pojo.Rooms;
import org.itrip.pojo.Provinces;

public interface HotelService {
	
	public Hotel getHotelDatail(Integer id);
	
	public List<Houses> getHotelRoom(Integer id);
	
	public List<Rooms> getHouses(Integer hotelId);
	
	
	/**
	 * 根据条件查询酒店信息
	 * @param hotelName
	 * @return
	 */
	public List<Hotel> query(Integer countryid);
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
	
	public List<Hotel> getAllHotel();
	
	public List<Dictionaries> getHotelType();
	
	public List<Provinces> getProvinces();
	
	public List<Citys> getCitysById(Integer pId);
	
	public int addHotelInfo(Hotel hotel);
	
	public List<Dictionaries> getRoomsType();
	
	public List<Beds> getBeds();
	
	public int addRoomsInfo(Houses houses);
	
	/**
	 * 根据id查询字典表数据
	 * @param id
	 * @return
	 */
	public Dictionaries queryDicId(Integer id);
	/**
	 * 根据类型名称查询字典表
	 * @param type
	 * @return
	 */
	public List<Dictionaries> queryDictionaries(String type);
	/**
	 * 判断字典表类型值是否存在
	 * @param map
	 * @return
	 */
	public int judge(Dictionaries dictionaries);
	/**
	 * 查询该类型最大值
	 * @param map
	 * @return
	 */
	public Integer queryDicz(Dictionaries dictionaries);
	/**
	 * 添加字典类型值
	 * @param map
	 * @return
	 */
	public Integer addDicz(Dictionaries dictionaries);
	/**
	 * 修改字典类型值
	 * @param map
	 * @return
	 */
	public Integer updDicz(Dictionaries dictionaries);
	
	public int deleteDic(List<Integer> ids);
	
	public List<Dictionaries> queryDic();
	
	public List<Map<String, Integer>> queryCeil( Integer year);
	
	/**
	 * 修改酒店信息
	 */
	public int updateHotel(Hotel hotel);
	
	public List<Houses> getAllHouses();
	
	public int deleteManyHotel(List<Integer> id);
	
	/**
	 * 根据ID查询酒店信息
	 * @param id
	 * @return
	 */
	public Hotel queryId(String id);
	/**
	 * 根据ID查询套餐信息
	 * @param id
	 * @return
	 */
	public Rooms queryRid(String rid);
	/**
	 * 根据ID查询房型信息
	 * @param id
	 * @return
	 */
	public Houses querySid(String sid);


}
