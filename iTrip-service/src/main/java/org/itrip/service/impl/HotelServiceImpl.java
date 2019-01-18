package org.itrip.service.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.itrip.mapper.HotelMapper;
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
	 * 2019-09-17根据年份分组
	 * @return
	 */
	public List<Orders> queryDate(){
		return hotelMapper.queryDate();
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
	 * @param hotelName
	 * @return
	 */
	public List<Hotel> query(Map<String, Object> map){
		return hotelMapper.query(map);
	}
	/**
	 * 酒店总记录数
	 */
	public Integer hotelCount(Integer cid) {
		return hotelMapper.hotelCount(cid);
	}
	/**
	 * 二级酒店总记录
	 */
	public Integer hotelTotalCount(Map<String, Object> map) {
		return hotelMapper.hotelTotalCount(map);
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
	@Override
	public List<Hotel> getAllHotel() {
		return hotelMapper.getAllHotel();
	}
	@Override
	public List<Provinces> getProvinces() {
		return hotelMapper.getProvinces();
	}
	@Override
	public List<Dictionaries> getHotelType() {
		return hotelMapper.getHotelType();
	}
	@Override
	public List<Citys> getCitysById(Integer pId) {
		return hotelMapper.getCitysById(pId);
	}
	@Override
	public int addHotelInfo(Hotel hotel) {
		return hotelMapper.addHotelInfo(hotel);
	}
	@Override
	public List<Dictionaries> getRoomsType() {
		return hotelMapper.getRoomsType();
	}
	@Override
	public List<Beds> getBeds() {
		return hotelMapper.getBeds();
	}
	@Override
	public int addRoomsInfo(Houses houses) {
		return hotelMapper.addRoomsInfo(houses);
	}
	/**
	 * 判断字典表类型值是否存在
	 * @param map
	 * @return
	 */
	public int judge(Dictionaries dictionaries) {
		return hotelMapper.judge(dictionaries);
	}
	/**
	 * 查询该类型最大值
	 * @param map
	 * @return
	 */
	public Integer queryDicz(Dictionaries dictionaries) {
		return hotelMapper.queryDicz(dictionaries);
	}
	/**
	 * 添加字典类型值
	 * @param map
	 * @return
	 */
	public Integer addDicz(Dictionaries dictionaries) {
		return hotelMapper.addDicz(dictionaries);
	}
	/**
	 * 根据id查询字典表数据
	 * @param id
	 * @return
	 */
	public Dictionaries queryDicId(Integer id) {
		return hotelMapper.queryDicId(id);
	}
	/**
	 * 修改字典类型值
	 * @param map
	 * @return
	 */
	public Integer updDicz(Dictionaries dictionaries) {
		return hotelMapper.updDicz(dictionaries);
	}
	public List<Dictionaries> queryDic(){
		return hotelMapper.queryDic();
	}
	public int deleteDic(List<Integer> ids) {
		return hotelMapper.deleteDic(ids);
	}
	@Override
	public List<Map<String, Integer>> queryCeil( Integer year) {
		return hotelMapper.queryCeil(year);
	}
	@Override
	public int updateHotel(Hotel hotel) {
		return hotelMapper.updateHotel(hotel);
	}
	@Override
	public List<Houses> getAllHouses(){
		return hotelMapper.getAllHouses();
	}
	@Override
	public int deleteManyHotel(List<Integer> id) {
		return hotelMapper.deleteManyHotel(id);
	}
	@Override
	public Hotel queryId(String id) {
		return hotelMapper.queryId(id);
	}
	@Override
	public Rooms queryRid(String rid) {
		return hotelMapper.queryRid(rid);
	}
	@Override
	public Houses querySid(String sid) {
		return hotelMapper.querySid(sid);
	}
	/*@Override
	public List<Rooms> queryMinPrice(Integer hotelId) {
		return hotelMapper.queryMinPrice(hotelId);
	}*/
	@Override
	public int addRoomTitle(Rooms rooms) {
		return hotelMapper.addRoomTitle(rooms);
	}
	@Override
	public Integer updPwd(User user) {
		return hotelMapper.updPwd(user);
	}
	@Override
	public Integer delOrder(String id) {
		return hotelMapper.delOrder(id);
	}
	@Override
	public Integer updOrder(String id) {
		return hotelMapper.updOrder(id);
	}
	@Override
	public List<Orders> queryOrder(Map<String,Object> map) {
		return hotelMapper.queryOrder(map);
	}
	
	@Override
	/**
	 * 根据用户Id查询订单总记录数
	 * @param userId
	 * @return
	 */
	public Integer hotelOrder(Integer userId) {
		return hotelMapper.hotelOrder(userId);
	}
	
	@Override
	public Houses getHouseById(int houseId) {
		return hotelMapper.getHouseById(houseId);
	}
	@Override
	public int updateHousesInfo(Houses houses) {
		return hotelMapper.updateHousesInfo(houses);
	}
	@Override
	public int updateRoomPrice(Float price, Integer houseId) {
		return hotelMapper.updateRoomPrice(price, houseId);
	}
	@Override
	public List<Comments> quComments(Integer hotelId) {
		return hotelMapper.quComments(hotelId);
	}
	@Override
	public List<Orders> queryOrders(String creationDate, String endDate, String linkUserName) {
		return hotelMapper.queryOrders(creationDate, endDate, linkUserName);
	}
	@Override
	public int ordersCount() {
		return hotelMapper.ordersCount();
	}
	@Override
	public Orders ByIdOrders(Integer id) {
		return hotelMapper.ByIdOrders(id);
	}
	@Override
	public List<Houses> RoomName(Integer hotelId) {
		return hotelMapper.RoomName(hotelId);
	}
	@Override
	public int UpdateOrders(Orders orders) {
		return hotelMapper.UpdateOrders(orders);
	}
	@Override
	public List<Rooms> getMeal(Integer houseId) {
		return hotelMapper.getMeal(houseId);
	}
	@Override
	public int addOrdres(Orders orders) {
		return hotelMapper.addOrdres(orders);
	}
	@Override
	public Orders getOrdersById(Integer id) {
		return hotelMapper.getOrdersById(id);
	}
	
	@Override
	/**
	 * 支付成功后 修改订单状态
	 */
	public int updateOderStatus(Integer orderId) {
		return hotelMapper.updateOderStatus(orderId);
	}
	
	@Override
	/**
	 * 根据城市id查询酒店信息
	 */
	public List<Hotel> getHotelById(Integer provinceid){
		return hotelMapper.getHotelById(provinceid);
	}
	@Override
	public Integer orderHousesNum(String checkInDate, String checkOutDate, Integer roomId) {
		return hotelMapper.orderHousesNum(checkInDate, checkOutDate, roomId);
	}
	@Override
	public List<Rooms> getRooms() {
		return hotelMapper.getRooms();
	}
	@Override
	public int deleteManyHouses(List<Integer> id) {
		return hotelMapper.deleteManyHouses(id);
	}

}
