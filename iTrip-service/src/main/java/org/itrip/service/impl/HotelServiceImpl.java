package org.itrip.service.impl;

import java.util.List;
import java.util.Map;

import org.itrip.mapper.UserMapper;
import org.itrip.pojo.Hotel;
import org.itrip.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class HotelServiceImpl implements HotelService{
	@Autowired
	UserMapper userMapper;
	
	/**
	 * 根据条件查询酒店信息
	 */
	public List<Hotel> query(Integer countryid) {
		return userMapper.query(countryid);
	}
	public List<Hotel> ssv(Map<String,Object> connt){
		return userMapper.getAll(connt);
	}
}
