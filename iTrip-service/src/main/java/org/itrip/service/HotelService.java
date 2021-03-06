package org.itrip.service;

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
import org.itrip.pojo.Orders;
import org.itrip.pojo.Rooms;
import org.itrip.pojo.User;
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
	public List<Hotel> query(Map<String, Object> map);
	/**
	 * 2019-09-17根据年份分组
	 * @return
	 */
	public List<Orders> queryDate(); 

	/**
	 * 酒店总记录数
	 */
	public Integer hotelCount(Integer cid);
	/**
	 * 二级酒店总记录
	 */
	public Integer hotelTotalCount(Map<String, Object> map);

	/**
	 * 12.18根据城市id，关键字查询信息
	 * 
	 * @param names
	 * @return
	 */
	public Integer queryName(String names);

	/**
	 * 根据条件查询酒店信息
	 * 
	 * @param map
	 * @return
	 */
	public List<Hotel> queryMap(Map<String, Object> map);

	/**
	 * 查询最低的套餐价格 public List<Rooms> queryMinPrice(Integer hotelId);
	 */

	/**
	 * 查询全部品牌信息
	 * 
	 * @return
	 */
	public List<Hotelbrand> queryBrand(Integer citysid);

	/**
	 * 根据id查询城市名称
	 * 
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
	 * 
	 * @param id
	 * @return
	 */
	public Dictionaries queryDicId(Integer id);

	/**
	 * 根据类型名称查询字典表
	 * 
	 * @param type
	 * @return
	 */
	public List<Dictionaries> queryDictionaries(String type);

	/**
	 * 判断字典表类型值是否存在
	 * 
	 * @param map
	 * @return
	 */
	public int judge(Dictionaries dictionaries);

	/**
	 * 查询该类型最大值
	 * 
	 * @param map
	 * @return
	 */
	public Integer queryDicz(Dictionaries dictionaries);

	/**
	 * 添加字典类型值
	 * 
	 * @param map
	 * @return
	 */
	public Integer addDicz(Dictionaries dictionaries);

	/**
	 * 修改字典类型值
	 * 
	 * @param map
	 * @return
	 */
	public Integer updDicz(Dictionaries dictionaries);

	public int deleteDic(List<Integer> ids);

	public List<Dictionaries> queryDic();

	public List<Map<String, Integer>> queryCeil(Integer year);

	/**
	 * 修改酒店信息
	 */
	public int updateHotel(Hotel hotel);

	public List<Houses> getAllHouses();

	public int deleteManyHotel(List<Integer> id);

	/**
	 * 根据ID查询酒店信息
	 * 
	 * @param id
	 * @return
	 */
	public Hotel queryId(String id);

	/**
	 * 根据ID查询套餐信息
	 * 
	 * @param id
	 * @return
	 */
	public Rooms queryRid(String rid);

	/**
	 * 根据ID查询房型信息
	 * 
	 * @param id
	 * @return
	 */
	public Houses querySid(String sid);

	/**
	 * 添加一个房型套餐
	 */
	public int addRoomTitle(Rooms rooms);

	/**
	 * 修改用户密码
	 * 
	 * @param user
	 * @return
	 */
	public Integer updPwd(User user);

	/**
	 * updOrder 根据Id删除订单信息
	 * 
	 * @param id
	 * @return
	 */
	public Integer delOrder(String id);

	/**
	 * 根据Id修改订单信息
	 * 
	 * @param id
	 * @return
	 */
	public Integer updOrder(String id);

	/**
	 * 根据登录人ID查询订单信息
	 * 
	 * @param userId
	 * @return
	 */
	public List<Orders> queryOrder(Map<String,Object> map);
	
	/**
	 * 根据用户Id查询订单总记录数
	 * @param userId
	 * @return
	 */
	public Integer hotelOrder(Integer userId);
	
	/**
	 * 根据id查询房型
	 */
	public Houses getHouseById(int houseId);
	/**
	 * 修改房型信息
	 */
	public int updateHousesInfo(Houses houses);
	
	public int updateRoomPrice(Float price,Integer houseId );
	
	public List<Comments> quComments(Integer hotelId);
	
	/**
	 * 查询订单
	 * @return
	 */
	public List<Orders> queryOrders(String creationDate,String endDate,String linkUserName);
	/**
	 * 查询订单总数
	 * @return
	 */
	public int ordersCount();
	/**
	 * 根据id查订单信息
	 * @param id
	 * @return
	 */
	public Orders ByIdOrders(Integer id);
	/**
	 * 根据酒店id查询该酒店所拥有的房间类型
	 * @param hotelId
	 * @return
	 */
	public List<Houses> RoomName(Integer hotelId);
	/**
	 * 根据id值修改订单
	 * 
	 * @return
	 */
	public int UpdateOrders(Orders orders);
	/**
	 * 根据房型id查价格
	 * @param houseId
	 * @return
	 */
	public List<Rooms> getMeal(Integer houseId);
	
	/**
	 * 酒店预订
	 */
	public int addOrdres(Orders orders);
	
	/**
	 * 订单支付页面 根据id查询信息
	 */
	public Orders getOrdersById(Integer id);
	
	/**
	 * 支付成功后 修改订单状态
	 */
	public int updateOderStatus(Integer orderId);
	
	/**
	 * 根据城市id查询酒店信息
	 */
	public List<Hotel> getHotelById(Integer provinceid);
	/**
	 * 查询订单中该房型被预订的数量
	 */
	public Integer orderHousesNum(String checkInDate,String checkOutDate,Integer roomId);
	
	/**
	 * 套餐价格查询
	 */
	public List<Rooms> getRooms();
	
	/**
	 * 批量删除房型
	 */
	public int deleteManyHouses(List<Integer> id);

}
