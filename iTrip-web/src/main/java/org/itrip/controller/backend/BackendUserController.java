package org.itrip.controller.backend;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.itrip.pojo.User;
import org.itrip.service.UserService;
import org.itrip.utils.MD5Util;
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
			@RequestParam(value = "p", required = false) String pwd,HttpSession session) {
		pwd = MD5Util.convertMD5(pwd);
		User user = userService.getIsAdmin(phone, pwd);
		if (user != null) {
			session.setAttribute("backUserSession", user);
			session.setMaxInactiveInterval(120*60);
			return user;
		}
		return null;
	}
	
	/**
	 * 后台退出，清除session
	 * @author inslok666
	 */
	@RequestMapping("logout")
	public String getLogout(HttpSession session) {
		session.invalidate();
		return "forward:backendLogin";
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
	@RequestMapping("backendMemberList")
	public String getMemberList(Model model) {
		model.addAttribute("count", userService.getNotAdminCount());
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
			@RequestParam(value = "id", required = false) Integer id,
			@RequestParam(value = "birthday", required = false) String birthday,
			@RequestParam(value = "userpwd", required = false) String userpwd) {
		User user = new User();
		user.setUserName(username);
		user.setStatus(status);
		user.setSex(Integer.valueOf(sex));
		user.setPhone(phone);
		user.setEmail(email);
		user.setAddress(address);
		user.setBirthday(java.sql.Date.valueOf(birthday));
		String date = "";
		if (id != null) {
			User users= userService.getById(id);
			if(!userpwd.equals(users.getPwd())) {
				user.setPwd(MD5Util.convertMD5(userpwd));
			}else {
				user.setPwd(users.getPwd());
			}
			user.setId(id);
			userService.updateUser(user);
			date =  "修改成功";
		} else {
			user.setPwd(MD5Util.convertMD5(userpwd));
			userService.addBackendUser(user);
			date = "添加成功";
			
		}
		System.out.println("*************"+date);
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
	@RequestMapping("backendLogin")
	public String getLogin() {

		return "backend/login";
	}

	// 访问index.jsp
	@RequestMapping("backendIndex")
	public String getIndex() {

		return "backend/index";
	}

	// 访问welcome.jsp
	@RequestMapping("backendwelcome")
	public String getWelcom() {

		return "backend/welcome";
	}

	// 访问admin-role-add.jsp
	@RequestMapping("adminRoleAdd")
	public String adminRoleAdd() {

		return "backend/admin-role-add";
	}
}
