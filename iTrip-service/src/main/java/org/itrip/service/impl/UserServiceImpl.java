package org.itrip.service.impl;

import java.util.List;

import org.itrip.mapper.UserMapper;
import org.itrip.pojo.User;
import org.itrip.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserMapper userMapper;
	
	@Override
	public User login(String phone, String pwd) {
		
		return userMapper.login(phone, pwd);
	}
	
	@Override
	public List<User> getAllAdmin() {
		return userMapper.getAllAdmin();
	}

	@Override
	public User getIsAdmin(String phone, String pwd) {
		return userMapper.getIsAdmin(phone, pwd);
	}

	@Override
	public int getAdminCount() {
		return userMapper.getAdminCount();
	}
	
	@Override
	public int add(User user) {
		return userMapper.add(user);
	}

	@Override
	public int queryPhoneService(String phone) {
		return userMapper.queryPhone(phone);
	}

	@Override
	public int addBackendUser(User user) {
		return userMapper.addBackendUser(user);
	}

	@Override
	public List<User> getAllUser() {
		return userMapper.getAllUser();
	}

	@Override
	public User getById(int id) {
		return userMapper.getById(id);
	}

	@Override
	public int updateUser(User user) {
		return userMapper.updateUser(user);
	}

	@Override
	public int deleteManyUser(List<Integer> ids) {
		return userMapper.deleteManyUser(ids);
	}

}
