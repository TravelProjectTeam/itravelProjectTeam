package org.itrip.controller.backend;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.itrip.pojo.Citys;
import org.itrip.pojo.Dictionaries;
import org.itrip.pojo.Hotel;
import org.itrip.pojo.Hotelbrand;
import org.itrip.pojo.Houses;
import org.itrip.pojo.HousesFrom;
import org.itrip.pojo.Order;
import org.itrip.pojo.Rooms;
import org.itrip.service.HotelService;
import org.itrip.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSON;

@Controller
public class BackendHotelController {
	@Autowired
	HotelService hotelService;
	@Autowired
	UserService userService;

	// 查询后台全部酒店相关信息
	@RequestMapping("backendProductList")
	public String getProductList(Model model) {
		model.addAttribute("hotelList", hotelService.getAllHotel());
		return "backend/product-list";
	}

	/**
	 * 进入酒店添加/编辑页面
	 */
	@RequestMapping("backendProductAdd")
	public String getProductAdd(@RequestParam(value="hotelId",required=false) String hotelId, Model model) {
		model.addAttribute("hotelType", hotelService.getHotelType());
		model.addAttribute("provinces", hotelService.getProvinces());
		model.addAttribute("roomsType", hotelService.getRoomsType());
		model.addAttribute("bedsType", hotelService.getBeds());
		if(hotelId != null) {
		model.addAttribute("hotelInfo", hotelService.getHotelDatail(Integer.valueOf(hotelId)));
	}
		return "backend/product-add";
	}

	/**
	 * 根据省份id查询对应城市
	 */
	@RequestMapping("getCitys")
	@ResponseBody
	public List<Citys> getCitys(@RequestParam("pId") String pId) {

		return hotelService.getCitysById(Integer.valueOf(pId));
	}

	/**
	 * 根据城市id查询对应品牌
	 */
	@RequestMapping("getHotelBrand")
	@ResponseBody
	public List<Hotelbrand> getHotelBrand(@RequestParam("citysid") String citysid) {

		return hotelService.queryBrand(Integer.valueOf(citysid));
	}

	/**
	 * 添加酒店信息
	 * 
	 * @throws IOException
	 * @throws IllegalStateException
	 */
	@RequestMapping("addHotelInfo")
	public String getAddHotelInfo( Hotel hotel,@RequestParam(value = "file", required = false) MultipartFile file,
			@RequestParam(value = "hotelPhoto", required = false) String hotelPhoto,
			@RequestParam(value = "roomsType", required = false) String[] roomsType,
			@RequestParam(value = "roomsPrice", required = false) String[] roomsPrice,
			@RequestParam(value = "roomSize", required = false) String[] roomSize,
			@RequestParam(value = "bedArea", required = false) String[] bedArea,
			@RequestParam(value = "bedsType", required = false) String[] bedsType,
			@RequestParam(value = "floor", required = false) String[] floor,
			@RequestParam(value = "isHavingbed", required = false) String[] isHavingbed,
			@RequestParam(value = "window", required = false) String[] window,
			@RequestParam(value = "roomFile", required = false) MultipartFile[] roomFile) throws IOException {
		
		// 酒店上传的路径
		String path = "E:\\Eclipse\\iTrip-Workspace\\iTrip\\iTrip-web\\src\\main\\webapp\\WEB-INF\\statics\\images";
		String fileName = file.getOriginalFilename();
		File dir = new File(path, fileName);
		if (!dir.exists()) {
			dir.mkdirs();
		}
		//MultipartFile自带的解析方法
		if(!file.isEmpty()) {
			file.transferTo(dir);
			hotel.setPhotograph("images/" + fileName);
		}else {
			hotel.setPhotograph(hotelPhoto);
		}
		if(hotel.getId()==null) {
			hotelService.addHotelInfo(hotel);
		}else {
			//修改酒店信息
			hotelService.updateHotel(hotel);
			return "redirect:backendProductList";
		}
		
		//添加房型
		Houses houses = new Houses();
		for (int i = 0; i < roomFile.length; i++) {
			houses.setHotelId(hotel.getId());
			houses.setRoomNameId(roomsType[i]);
			houses.setRoomPrice(Double.valueOf(roomsPrice[i]));
			houses.setRoomSize(roomSize[i] + "㎡");
			houses.setBedArea(bedArea[i] + "m");
			houses.setFloor(floor[i]);
			houses.setIsHavingbed(isHavingbed[i]);
			houses.setWindow(window[i]);
			houses.setBedsId(bedsType[i]);
			// 房型上传的路径
			String roomPath = "E:\\Eclipse\\iTrip-Workspace\\iTrip\\iTrip-web\\src\\main\\webapp\\WEB-INF\\statics\\images";
			String roomsFileName = roomFile[i].getOriginalFilename();
			File roomDir = new File(roomPath, roomsFileName);
			if (!roomDir.exists()) {
				roomDir.mkdirs();
			}
			//MultipartFile自带的解析方法
			if(!roomFile[i].isEmpty()) {
			roomFile[i].transferTo(roomDir);
			houses.setRoomImage("images/" + roomsFileName);
			}
			hotelService.addRoomsInfo(houses);
		}
		return "redirect:backendProductList";
	}

	/**
	 * 进入houses-add页面
	 */
	@RequestMapping("getAddHouses")
	public String getAddHouses(Model model) {
		model.addAttribute("provinces", hotelService.getProvinces());
		model.addAttribute("roomsType", hotelService.getRoomsType());
		model.addAttribute("bedsType", hotelService.getBeds());
		return "backend/product-houses-add";
	}

	/**
	 * 添加房型
	 */
	@RequestMapping("addHouses")
	public String addHouses(@RequestParam(value = "roomsType", required = false) String roomsType,
			@RequestParam(value = "roomsPrice", required = false) String roomsPrice,
			@RequestParam(value = "roomSize", required = false) String roomSize,
			@RequestParam(value = "bedArea", required = false) String bedArea,
			@RequestParam(value = "bedsType", required = false) String bedsType,
			@RequestParam(value = "floor", required = false) String floor,
			@RequestParam(value = "isHavingbed", required = false) String isHavingbed,
			@RequestParam(value = "window", required = false) String window,
			@RequestParam(value = "roomFile", required = false) MultipartFile roomFile) {

		// 添加房型
		Houses houses = new Houses();
//		houses.setHotelId(hotel.getId());
		houses.setRoomNameId(roomsType);
		houses.setRoomPrice(Double.valueOf(roomsPrice));
		houses.setRoomSize(roomSize + "㎡");
		houses.setBedArea(bedArea + "m");
		houses.setFloor(floor);
		houses.setIsHavingbed(isHavingbed);
		houses.setWindow(window);
		houses.setBedsId(bedsType);
		// 房型上传的路径
		String roomPath = "E:\\Eclipse\\iTrip-Workspace\\iTrip\\iTrip-web\\src\\main\\webapp\\WEB-INF\\statics\\images";
		String roomsFileName = roomFile.getOriginalFilename();
		File roomDir = new File(roomPath, roomsFileName);
		if (!roomDir.exists()) {
			roomDir.mkdirs();
		}
		houses.setRoomImage("images/" + roomsFileName);
		hotelService.addRoomsInfo(houses);
		System.out.println("房型最新插入id" + houses.getId());
		return "";
	}

	/**
	 * 查询后台全部房型相关信息
	 */
	@RequestMapping("backendProductBrand")
	public String getAllHouses(Model model) {
		model.addAttribute("housesList", hotelService.getAllHouses());
		return "backend/product-brand";
	}
	
	/**
	 * 根据城市id查询酒店
	 */
	@RequestMapping("getHotelById")
	@ResponseBody
	public List<Hotel> getHotelById(@RequestParam(value="countryid",required=false) String countryid){
		return hotelService.query(Integer.valueOf(countryid));
	}

	/**
	 * 进入字典页面
	 * 
	 * @return 邹航
	 */
	@RequestMapping("dictionaries")
	public String dictionaries(Model model, @RequestParam(value = "typeName", required = false) String typeName) {
		model.addAttribute("dic", hotelService.queryDictionaries(typeName));
		model.addAttribute("dics", hotelService.queryDic());
		model.addAttribute("dicSize", hotelService.queryDictionaries(typeName).size());
		return "backend/system-data";
	}

	/**
	 * 异步查询值是否存在
	 * 
	 * @param diesName
	 * @param dicName
	 * @return
	 */
	@RequestMapping("getIsFields")
	@ResponseBody
	public Integer getIsFields(@RequestParam(value = "diesName", required = false) String diesName,
			@RequestParam(value = "dicName", required = false) String dicName) {
		Dictionaries dictionaries = new Dictionaries();
		dictionaries.setTypeName(diesName);
		dictionaries.setValueName(dicName);
		return hotelService.judge(dictionaries);
	}

	/**
	 * 添加类型值
	 * 
	 * @param diesName
	 * @param dicName
	 * @return
	 */
	@RequestMapping("addDic")
	public String addDic(@RequestParam(value = "diesName", required = false) String diesName,
			@RequestParam(value = "dicName", required = false) String dicName, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setContentType("text/xml;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		// PrintWriter out = response.getWriter();

		Dictionaries dictionaries = new Dictionaries();
		dictionaries.setTypeName(diesName);
		dictionaries.setValueName(dicName);
		Integer num = hotelService.queryDicz(dictionaries);// 查询该类型最大值
		if(num != null ) {
			dictionaries.setValueId(num + 1);
		}else {
			dictionaries.setValueId(0);
		}
		
		hotelService.addDicz(dictionaries);
		return "redirect:dictionaries";
	}

	/**
	 * 修改类型值
	 * 
	 * @param diesName
	 * @param dicName
	 * @return
	 */
	@RequestMapping("updDic")
	public String updDic(@RequestParam(value = "dicName", required = false) String dicName,
			@RequestParam(value = "id", required = false) String id, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setContentType("text/xml;charset=utf-8");
		request.setCharacterEncoding("utf-8");

		Dictionaries dictionaries = new Dictionaries();
		dictionaries.setValueName(dicName);
		dictionaries.setId(Integer.valueOf(id));
		Integer result = hotelService.updDicz(dictionaries);
		return "forward:dictionaries";
	}

	@RequestMapping("getdictionaries")
	public String getdictionaries(@RequestParam(value = "id", required = false) String id, HttpServletRequest request)
			throws IOException {
		request.setCharacterEncoding("utf-8");
		request.setAttribute("list", hotelService.queryDicId(Integer.valueOf(id)));
		request.setAttribute("dics", hotelService.queryDic());
		return "backend/role-add";
	}

	@RequestMapping("deleteDic")
	@ResponseBody
	public int deleteDic(@RequestParam(value = "ids", required = false) String ids) {
		String id[] = ids.split(",");
		List<Integer> sid = new ArrayList();
		for (String integer : id) {
			sid.add(Integer.valueOf(integer));
		}
		return hotelService.deleteDic(sid);
	}

	// 报表统计-折线图
	@RequestMapping("getCharts_1")
	public String getCharts_1() {
		return "backend/ceil";
	}
	
	@RequestMapping("queryCharts_1")
	@ResponseBody
	public String queryCharts_1(Integer year,String type) {
		List<Map<String, Integer>> list = hotelService.queryCeil(year);
		String result = "[";
		for (int i = 0; i < list.size(); i++) {
			result +=i==list.size()-1?list.get(i).get(type)+"]":list.get(i).get(type)+",";
		}
		return result;
	}

	/**
	 * 酒店删除
	 * @param ids
	 * @return
	 */
	@RequestMapping("deleteManyHotel")
	@ResponseBody
	public int deleteManyHotel(@RequestParam(value = "ids", required = false) String ids) {
		String id[]=ids.split(",");
		List<Integer> sid=new ArrayList<>();
		for (String integer : id) {
			sid.add(Integer.valueOf(integer));
		}
		return hotelService.deleteManyHotel(sid);
	}

	@RequestMapping("WebDatail")
	public String WebDatail( Model model,@RequestParam(value="id") String id,
			@RequestParam(value="sid") String sid,
			@RequestParam(value="rid") String rid,
			@RequestParam(value="checkInDate") String checkInDate,
			@RequestParam(value="checkOutDate") String checkOutDate) {
		System.out.println("值="+id+"\t"+sid+"\t"+rid+"\t"+checkInDate+"\t"+checkOutDate);
		String [] ss = checkInDate.split("-");
		String month =ss[1];
		String day = ss[2];
		model.addAttribute("hotel",hotelService.queryId(id));
		model.addAttribute("houses",hotelService.querySid(sid));
		model.addAttribute("rooms",hotelService.queryRid(rid));
		model.addAttribute("checkInDate",checkInDate);
		model.addAttribute("checkOutDate",checkOutDate);
		model.addAttribute("month",month);
		model.addAttribute("day",day);
		return "/web/newOrdel";
	}

	// 报表统计-柱状图
	@RequestMapping("getCharts_4")
	public String getCharts_4() {

		return "backend/charts-4";
	}

	// 报表统计-饼图
	@RequestMapping("getCharts_5")
	public String getCharts_5() {

		return "backend/charts-5";
	}

}
