package org.itrip.controller.web;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.itrip.pojo.User;
import org.itrip.service.UserService;
import org.itrip.utils.MD5Util;
import org.itrip.utils.RandomValidateCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WebUsersController {

	@Autowired
	UserService userService;

	@RequestMapping("/webLogin")
	public String getLogin() {
		return "web/login";
	}

	@RequestMapping("/webIndex")
	public String getWebIndex(HttpServletRequest request) {
		return "web/index";
	}
	
	@RequestMapping("webRegister")
	public String in() {
		return "web/register";
	}
	/*====================邹航开始====================*/
	@RequestMapping("webPhones")
	@ResponseBody
	public int phones(@RequestParam(value = "phone", required = false) String phone) {
		return userService.queryPhoneService(phone);
	}
	
	/**
	 * 添加方法
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping("add")
	public String add(HttpServletRequest request,HttpServletResponse response) {
		String phone = request.getParameter("phone");
		String at = request.getParameter("pwd");
		String pwd=MD5Util.convertMD5(at);
		User user = new User();
		user.setPhone(phone);
		user.setPwd(pwd);
		user.setStatus("1");
		userService.add(user);
		return "redirect:webLogin";
	}
	/*====================邹航结束====================*/
	
	/**
	 * @author 谭凯 登陆验证
	 * @param request
	 * @param session
	 * @return
	 */
	@RequestMapping("/getLogin")
	@ResponseBody
	public String Login(@RequestParam(value = "u", required = false) String phone,
			@RequestParam(value = "p", required = false) String pwd,
			@RequestParam(value = "v", required = false) String verifyCode, HttpServletRequest request) {
		pwd = MD5Util.convertMD5(pwd);
		User user = userService.login(phone, pwd);
		String code = (String) request.getSession().getAttribute("verifyCodeValue");
		if (verifyCode.equalsIgnoreCase(code)) {//比较验证码是否相同
			if (user != null) {
				request.getSession().setAttribute("userSession", user);
				return user.toString();
			}
			return null;
		}
		return "1";
	}

	/**
	 *  获取校验码 
	 *  @author 谭凯
	 */  
	@RequestMapping("/getVerifyCode")
	public void generate(HttpServletResponse response, HttpSession session) {
		ByteArrayOutputStream output = new ByteArrayOutputStream();
		RandomValidateCode randomValidateCode = new RandomValidateCode();
		String verifyCodeValue = randomValidateCode.drawImg(output);
		// 将校验码保存到session中
		session.setAttribute("verifyCodeValue", verifyCodeValue);
		try {
			ServletOutputStream out = response.getOutputStream();
			output.writeTo(out);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
