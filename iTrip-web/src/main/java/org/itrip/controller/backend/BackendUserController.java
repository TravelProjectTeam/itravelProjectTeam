package org.itrip.controller.backend;

import java.util.ArrayList;
import java.util.List;

import org.itrip.pojo.User;
import org.itrip.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class BackendUserController {

	@Autowired
	UserService userService;

	/**
	 * 后台登录，并验证是否为管理员
	 * 
	 * @author inslok666
	 * @param phone
	 * @param pwd
	 * @return
	 */
	@RequestMapping("login")
	@ResponseBody
	public User getLogin(@RequestParam(value = "u", required = false) String phone,
			@RequestParam(value = "p", required = false) String pwd) {
		User user = userService.getIsAdmin(phone, pwd);
		if (user != null) {
			return user;
		}
		return null;
	}

	/**
	 * @author inslok666 查询所有的管理员
	 * @return
	 */
	@RequestMapping("adminRole")
	public String getAdminRole(Model model) {
		model.addAttribute("userAdminList", userService.getAllAdmin());
		model.addAttribute("adminCount", userService.getAdminCount());
		return "backend/admin-role";
	}

	/**
	 * 查询所有非管理员的用户
	 */
	@RequestMapping("memberList")
	public String getMemberList(Model model) {
		model.addAttribute("userList", userService.getAllUser());
		return "backend/member-list";
	}

	// 访问member-add.jsp
	@RequestMapping("memberAdd")
	public String getMenberAdd(@RequestParam(value = "id", required = false) Integer id, Model model) {
		if (id != null) {
			model.addAttribute("userInfo", userService.getById(id));
		}
		return "backend/member-add";
	}

	/**
	 * 后台用户新增
	 * @author 邹航
	 * @param username
	 * @param sex
	 * @param phone
	 * @param email
	 * @param address
	 * @return
	 */
	@RequestMapping("backendAdd")
	@ResponseBody
	public String backendAdd(@RequestParam(value = "username", required = false) String username,
			@RequestParam(value = "sex", required = false) String sex,
			@RequestParam(value = "mobile", required = false) String phone,
			@RequestParam(value = "email", required = false) String email,
			@RequestParam(value = "address", required = false) String address,
			@RequestParam(value = "status", required = false) String status,
			@RequestParam(value = "id", required = false) Integer id) {
		User user = new User();
		user.setUserName(username);
		user.setStatus(status);
		user.setSex(Integer.valueOf(sex));
		user.setPhone(phone);
		user.setEmail(email);
		user.setAddress(address);
		String date = "";
		if (id != null) {
			user.setId(id);
			userService.updateUser(user);
			date =  "修改成功";
		} else {
			userService.addBackendUser(user);
			date = "添加成功";
			
		}
		return date;
	}

	/**
	 * 用户删除
	 * @author 王欣怡
	 * @param ids
	 * @return
	 */
	@RequestMapping("deleteManyUser")
	@ResponseBody
	public int deleteManyUser(@RequestParam(value = "ids", required = false) String ids) {
		String id[]=ids.split(",");
		List<Integer> sid=new ArrayList<>();
		for (String integer : id) {
			sid.add(Integer.valueOf(integer));
		}
		return userService.deleteManyUser(sid);
	}
	
	// 访问login.jps页面
	@RequestMapping("bakckendLogin")
	public String getLogin() {

		return "backend/login";
	}

	// 访问index.jsp
	@RequestMapping("backendIndex")
	public String getIndex() {

		return "backend/index";
	}

	// 访问welcome.jsp
	@RequestMapping("welcome")
	public String getWelcom() {

		return "backend/welcome";
	}

	// 访问admin-role-add.jsp
	@RequestMapping("adminRoleAdd")
	public String adminRoleAdd() {

		return "backend/admin-role-add";
	}
}
