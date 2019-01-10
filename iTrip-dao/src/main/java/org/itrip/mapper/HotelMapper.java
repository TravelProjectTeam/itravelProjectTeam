package org.itrip.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.itrip.pojo.Beds;
import org.itrip.pojo.Citys;
import org.itrip.pojo.Comments;
import org.itrip.pojo.Dictionaries;
import org.itrip.pojo.Hotel;
import org.itrip.pojo.Hotelbrand;
import org.itrip.pojo.Houses;
import org.itrip.pojo.Order;
import org.itrip.pojo.Rooms;
import org.itrip.pojo.User;
import org.itrip.pojo.Provinces;

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
	 * 查询最低的套餐价格
	public List<Rooms> queryMinPrice(Integer hotelId);
	*/
	
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
	
	/**
	 * 查询后台所有酒店
	 */
	public List<Hotel> getAllHotel();
	
	/**
	 * 查询酒店类型
	 */
	public List<Dictionaries> getHotelType();
	
	/**
	 * 查询省份信息
	 */
	public List<Provinces> getProvinces();
	
	/**
	 * 根据省份id查询城市
	 */
	public List<Citys> getCitysById(@Param("pId")Integer pId);
	
	/**
	 * 添加酒店信息
	 */
	public int addHotelInfo(Hotel hotel);
	
	/**
	 * 查询房型
	 */
	public List<Dictionaries> getRoomsType();
	
	/**
	 * 查询床型
	 */
	public List<Beds> getBeds();
	
	/**
	 * 添加房型信息
	 */
	public int addRoomsInfo(Houses houses);
	
	/**
	 * 添加一个房型套餐
	 */
	public int addRoomTitle(Rooms rooms);
	
	/**
	 * 根据id查询房型
	 */
	public Houses getHouseById(int houseId);
	
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
	 * 根据id查询字典表数据
	 * @param id
	 * @return
	 */
	public Dictionaries queryDicId(Integer id);
	/**
	 * 修改字典类型值
	 * @param map
	 * @return
	 */
	public Integer updDicz(Dictionaries dictionaries);

	/**
	 * 批量删除字典表类型值
	 */
	public int deleteDic(@Param("ids")List<Integer> ids);
	/**
	 * 后台查询全部字典表的类型名称
	 * @return
	 */
	public List<Dictionaries> queryDic();
	
	/**
	 * 订单业务统计
	 */
	public List<Map<String, Integer>> queryCeil( Integer year);
	
	/**
	 * 修改酒店信息
	 */
	public int updateHotel(Hotel hotel);
	
	/**
	 * 查看全部房型
	 */
	public List<Houses> getAllHouses();
	/*
	 * 批量删除酒店
	 * @param id
	 * @return
	 */
	public int deleteManyHotel(@Param("id")List<Integer> id);
	
	/**
	 * 根据ID查询酒店信息
	 * @param id
	 * @return
	 */
	public Hotel queryId(@Param("id") String id);
	/**
	 * 根据ID查询套餐信息
	 * @param id
	 * @return
	 */
	public Rooms queryRid(@Param("rid") String rid);
	/**
	 * 根据ID查询房型信息
	 * @param id
	 * @return
	 */
	public Houses querySid(@Param("sid") String sid);

	/**
	 * 修改用户密码
	 * @param user
	 * @return
	 */
	public Integer updPwd(User user);
	/**updOrder
	 * 根据Id删除订单信息
	 * @param id
	 * @return
	 */
	public Integer delOrder(@Param("id") String id);
	
	/**
	 * 根据Id修改订单信息
	 * 
	 * @param id
	 * @return
	 */
	public Integer updOrder(@Param("id") String id);

	/**
	 * 根据登录人ID查询订单信息
	 * 
	 * @param userId
	 * @return
	 */
	public List<Order> queryOrder(@Param("userId") Integer userId);
	
	/**
	 * 修改房型信息
	 */
	public int updateHousesInfo(Houses houses);
	
	/**
	 * 修改套餐价格
	 */
	public int updateRoomPrice(@Param("price") Float price,@Param("houseId") Integer houseId );
	
	/**
	 * 根据酒店ID查询评论表
	 * @param hotelId
	 * @return
	 */
	public List<Comments> quComments(@Param("hotelId") Integer hotelId);


}
