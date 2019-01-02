package org.itrip.controller.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.itrip.pojo.Dictionaries;
import org.itrip.pojo.Hotel;
import org.itrip.pojo.Hotelbrand;
import org.itrip.pojo.Houses;
import org.itrip.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class WebHotelController {
	@Autowired
	HotelService hotelService;
	
	@RequestMapping("queryHotel")
	public String queryHotel(@RequestParam(value = "citysName", required = false) String citysName,HttpServletRequest request) throws IOException{
		int cityId = hotelService.queryName(citysName);
		List<Hotel> hotelList = hotelService.query(cityId);
		request.setAttribute("hotelList",hotelList);//根据城市信息查询
		request.setAttribute("hotelsize",hotelList.size());
		List<Dictionaries> list = hotelService.queryDictionaries("酒店类型");//查询全部房型信息
		List<Hotelbrand> llts = hotelService.queryBrand(cityId);//全部品牌信息
		String namet = hotelService.queryCid(cityId);
		request.setAttribute("namet", namet);
		System.out.println(namet);
		request.setAttribute("llts",llts);
		request.setAttribute("Typelist",list);
		return "web/hotelSearch";
	}
	
	/**
	 * 二级页面查询
	 * @param request
	 * @return
	 */
	@RequestMapping("queryH")
	/*@ResponseBody*/
	public String queryH(HttpServletRequest request) {
		//System.out.println("进入");
		String[] name=request.getParameter("arr").split(",");
		//price1:价格下限;price2价格上限;brand品牌Id;rating星级id;country目的地;name关键字
		String[] tname = {"price1","price2","rating","brand","country","keyword","rankts"}; 
		Map<String,Object> map = new HashMap<>();
		String namet="";//目的地
		String keyword = "";//关键字
		String price1="";
		String price2="";
		String brand="";
		String rating="";
		String rank ="";
		for (int i = 0; i < name.length; i++) {
			
			map.put(tname[i],name[i]);
			if(tname[i]=="rating") {
				rating=name[i];
				request.setAttribute("rating",rating);
			}
			if(tname[i]=="brand") {
				brand=name[i];
				request.setAttribute("brand",brand);
			}
			if(tname[i]=="price2") {
				price2=name[i];
				request.setAttribute("price2",price2);
			}
			if(tname[i]=="price1") {
				price1=name[i];
				request.setAttribute("price1",price1);
			}
			if(tname[i]=="country") {
				namet=name[i];
				request.setAttribute("namet",namet);
			}
			if(tname[i]=="name") {
				keyword=name[i];
				request.setAttribute("keyword",keyword);
			}
			if(tname[i]=="rankts") {
				rank=name[i];
				request.setAttribute("rankts",rank);
			}
		}
		Integer cid=0;
		cid = hotelService.queryName(namet);//根据城市名称查询id
		if(cid!=null) {
		map.put("cid",cid);
		List<Hotelbrand> llts = hotelService.queryBrand(cid);//全部品牌信息
		request.setAttribute("llts",llts);
		}
		List<Hotel> list = hotelService.queryMap(map);
		List<Dictionaries> lists = hotelService.queryDictionaries("酒店类型");//查询全部房型信息
		request.setAttribute("hotelsize",list.size());
		request.setAttribute("Typelist",lists);
		request.setAttribute("hotelList",list);
		
		return "web/hotelSearch";
	}
	
	
	//跳转hotelDatail.jsp页面
		@RequestMapping("webHotelDatail")
		public String getHotelDatail(@RequestParam(value="hotelId",required=false)Integer hotelId,Model model,String specifiedDay) {
			Hotel hotel= hotelService.getHotelDatail(hotelId);
			List<Houses> housesList=hotelService.getHotelRoom(hotelId);
			for (Houses houses : housesList) {
				houses.setRoomsList(hotelService.getHouses(houses.getId()));
			}
			System.out.println(hotel.getCityName());
			System.out.println(hotel.getAddress());
			model.addAttribute("hotel", hotel);
			model.addAttribute("housesList", housesList);
			return "web/hotelDatail";
		}
}
