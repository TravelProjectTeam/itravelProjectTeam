package org.itrip.controller.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.itrip.pojo.Hotel;
import org.itrip.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;

@Controller
public class webHotelController {
	@Autowired
	HotelService hotelService;
	@RequestMapping("queryHotel")
	public String queryHotel(HttpServletRequest request,HttpServletResponse response) throws IOException{
		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		List<Hotel> hotelList = hotelService.query(476);
		request.setAttribute("hotelList",hotelList);//区域信息
		return "web/hotelSearch";
	}
}
