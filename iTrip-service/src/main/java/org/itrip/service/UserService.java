package org.itrip.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.itrip.pojo.User;

public interface UserService {
	
	public List<User> getAllAdmin();
	
	public User login(@Param("phone")String phone,@Param("pwd")String pwd);
	
	public int add(User user);
	
	public int queryPhoneService(String phone);
	
	public User getIsAdmin(String phone,String pwd);
	
	public int getAdminCount();
	
	public int addBackendUser(User user);
	
	public List<User> getAllUser();
	
	public User getById(int id);
	
	public int updateUser(User user);
	
	public int deleteManyUser(List<Integer> ids);

	
}
