package org.itrip.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.itrip.pojo.Hotel;
import org.itrip.pojo.User;
import org.springframework.stereotype.Component;

@Component
public interface UserMapper {
	/**
	 * 前台登录
	 * @author 谭凯
	 * @param phone
	 * @param pwd
	 * @return
	 */
	public User login(@Param("phone")String phone,@Param("pwd")String pwd);
	
	/**
	 * 添加会员方法
	 * @author 邹航
	 * @param user
	 * @return
	 */
	public int add(User user);
	
	/**
	 * 根据值查询信息
	 * @author 邹航
	 * @param phone
	 * @return
	 */
	public int queryPhone(@Param("phone") String phone);
	
	/**
	 * 根据条件查询酒店信息
	 * @author 邹航
	 * @param hotelName
	 * @return
	 */
	public List<Hotel> query(@Param("countryid") Integer countryid);
	public List<Hotel> getAll(Map<String,Object> connt);
	
	/**
	 * 查询所有的管理员
	 * @author inslok666
	 * @return
	 */
	public List<User> getAllAdmin();
	
	/**
	 * @author inslok666
	 * 查询管理员的数量
	 */
	public int getAdminCount();
	
	/**
	 * 验证是否为管理员
	 * @author inslok666
	 * @param status
	 * @return
	 */
	public User getIsAdmin(@Param("phone")String phone,@Param("pwd")String pwd);
	
	/**
	 * 查询后台非管理员的用户
	 * @author inslok666
	 */
	public List<User> getAllUser();
	
	/**
	 * 查询后台非管理员用户的数量
	 * @author inslok666
	 */
	public int getNotAdminCount();
	
	/**
	 * 后台新增用户
	 * @param 邹航
	 * @return
	 */
	public int addBackendUser(User user);
	
	/**
	 * 根据id查询用户
	 */
	public User getById(int id);
	
	/**
	 * 修改用户
	 */
	public int updateUser(User user);
	
	/**
	 * 批量删除用户
	 */
	public int deleteManyUser(@Param("ids")List<Integer> ids);
}
