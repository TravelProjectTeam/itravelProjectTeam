package org.itrip.service.impl;

import java.util.List;
import java.util.Map;

import org.itrip.mapper.HotelMapper;
import org.itrip.pojo.Dictionaries;
import org.itrip.pojo.Hotel;
import org.itrip.pojo.Hotelbrand;
import org.itrip.pojo.Houses;
import org.itrip.pojo.Rooms;
import org.itrip.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class HotelServiceImpl implements HotelService{
	
	@Autowired
	HotelMapper hotelMapper;
	
	/**
	 * 12.18根据城市名称查询id
	 * @param names
	 * @return
	 */
	public Integer queryName(String names) {
		
		return hotelMapper.queryName(names);
	}
	/**
	 * 根据id查询城市名称
	 * @param cid
	 * @return
	 */
	public String queryCid(Integer cid) {
		return hotelMapper.queryCid(cid);
	}
	/**
	 * 12.18根据类型名称查询字典表信息
	 */
	public List<Dictionaries> queryDictionaries(String type){
		return hotelMapper.queryDictionaries(type);
	}
	/**
	 * 12.18根据条件查询酒店信息
	 * @param map
	 * @return
	 */
	public List<Hotel> queryMap(Map<String,Object> map){
		return hotelMapper.queryMap(map);
	}
	/**
	 * 查询全部品牌信息
	 * @return
	 */
	public List<Hotelbrand> queryBrand(Integer citysid){
		return hotelMapper.queryBrand(citysid);
	}
	
	/**
	 * 根据条件查询酒店信息
	 */
	public List<Hotel> query(Integer countryid) {
		return hotelMapper.query(countryid);
	}
	
	
	/*以下代码为谭凯编写*/
	@Override
	public List<Houses> getHotelRoom(Integer id) {
		return hotelMapper.getHotelRoom(id);
	}
	@Override
	public List<Rooms> getHouses(Integer id) {
		return hotelMapper.getHouses(id);
	}
	@Override
	public Hotel getHotelDatail(Integer id) {
		return hotelMapper.getHotelDatail(id);
	}
}
