package org.itrip.controller.backend;

import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.itrip.pojo.Citys;
import org.itrip.pojo.Dictionaries;
import org.itrip.pojo.Hotel;
import org.itrip.pojo.Hotelbrand;
import org.itrip.pojo.Houses;
import org.itrip.pojo.Orders;
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
	public String getProductAdd(@RequestParam(value = "hotelId", required = false) String hotelId, Model model) {
		model.addAttribute("hotelType", hotelService.getHotelType());
		model.addAttribute("provinces", hotelService.getProvinces());
		model.addAttribute("roomsType", hotelService.getRoomsType());
		model.addAttribute("bedsType", hotelService.getBeds());
		if (hotelId != null) {
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
	public String getAddHotelInfo(Hotel hotel, @RequestParam(value = "file", required = false) MultipartFile file,
			@RequestParam(value = "hotelPhoto", required = false) String hotelPhoto,
			@RequestParam(value = "roomsType", required = false) String[] roomsType,
			@RequestParam(value = "roomsPrice", required = false) String[] roomsPrice,
			@RequestParam(value = "roomSize", required = false) String[] roomSize,
			@RequestParam(value = "bedArea", required = false) String[] bedArea,
			@RequestParam(value = "bedsType", required = false) String[] bedsType,
			@RequestParam(value = "ceiling", required = false) String[] ceiling,
			@RequestParam(value = "floor", required = false) String[] floor,
			@RequestParam(value = "isHavingbed", required = false) String[] isHavingbed,
			@RequestParam(value = "window", required = false) String[] window,
			@RequestParam(value = "inventory",required = false) String[] inventory,
			@RequestParam(value = "roomFile", required = false) MultipartFile[] roomFile) throws IOException {

		// 酒店上传的路径
		String path = "E:\\Eclipse\\iTrip-Workspace\\iTrip\\iTrip-web\\src\\main\\webapp\\WEB-INF\\statics\\images";
		String fileName = file.getOriginalFilename();
		File dir = new File(path, fileName);
		if (!dir.exists()) {
			dir.mkdirs();
		}
		// MultipartFile自带的解析方法
		if (!file.isEmpty()) {
			file.transferTo(dir);
			hotel.setPhotograph("images/" + fileName);
		} else {
			hotel.setPhotograph(hotelPhoto);
		}
		if (hotel.getId() == null) {
			hotelService.addHotelInfo(hotel);
		} else {
			// 修改酒店信息
			hotelService.updateHotel(hotel);
			return "redirect:backendProductList";
		}

		// 添加房型
		Houses houses = new Houses();
		Rooms rooms = new Rooms();
		for (int i = 0; i < roomFile.length; i++) {
			houses.setHotelId(hotel.getId());
			houses.setRoomNameId(roomsType[i]);
			houses.setRoomPrice(Double.valueOf(roomsPrice[i]));
			houses.setRoomSize(roomSize[i] + "㎡");
			houses.setBedArea(bedArea[i] + "m");
			houses.setCeiling(ceiling[i]);
			houses.setFloor(floor[i]);
			houses.setIsHavingbed(isHavingbed[i]);
			houses.setWindow(window[i]);
			houses.setBedsId(bedsType[i]);
			houses.setInventory(inventory[i]);
			// 房型上传的路径
			String roomPath = "E:\\Eclipse\\iTrip-Workspace\\iTrip\\iTrip-web\\src\\main\\webapp\\WEB-INF\\statics\\images";
			String roomsFileName = roomFile[i].getOriginalFilename();
			File roomDir = new File(roomPath, roomsFileName);
			if (!roomDir.exists()) {
				roomDir.mkdirs();
			}
			// MultipartFile自带的解析方法
			if (!roomFile[i].isEmpty()) {
				roomFile[i].transferTo(roomDir);
				houses.setRoomImage("images/" + roomsFileName);
			}
			hotelService.addRoomsInfo(houses);
			
			//默认添加一个房型套餐
			//rooms.setHotelId(Integer.valueOf(hotelName));
			rooms.setHouseId(houses.getId());
			rooms.setRoomTitle("标准价");
			rooms.setPrice(Float.valueOf(roomsPrice[i]));
			rooms.setIsbreakfast(1);
			rooms.setCancellationPolicy(0);
			hotelService.addRoomTitle(rooms);
		}
		return "redirect:backendProductList";
	}

	/**
	 * 进入houses-add页面
	 */
	@RequestMapping("getAddHouses")
	public String getAddHouses(Model model,@RequestParam(value="houseId",required=false) String houseId) {
		model.addAttribute("provinces", hotelService.getProvinces());
		model.addAttribute("roomsType", hotelService.getRoomsType());
		model.addAttribute("bedsType", hotelService.getBeds());
		if(houseId != null && !houseId.equals("")) {
			model.addAttribute("houseByIdInfo", hotelService.getHouseById(Integer.valueOf(houseId)));
		}
		return "backend/product-houses-add";
	}

	/**
	 * 添加房型
	 * @throws IOException 
	 * @throws  
	 */
	@RequestMapping("addHouses")
	public String addHouses(@RequestParam(value = "hotelName",required=false) String hotelName,
			@RequestParam(value = "roomsType", required = false) String[] roomsType,
			@RequestParam(value = "roomsPrice", required = false) String[] roomsPrice,
			@RequestParam(value = "roomSize", required = false) String[] roomSize,
			@RequestParam(value = "bedArea", required = false) String[] bedArea,
			@RequestParam(value = "bedsType", required = false) String[] bedsType,
			@RequestParam(value = "ceiling", required = false) String[] ceiling,
			@RequestParam(value = "floor", required = false) String[] floor,
			@RequestParam(value = "isHavingbed", required = false) String[] isHavingbed,
			@RequestParam(value = "window", required = false) String[] window,
			@RequestParam(value = "inventory",required = false) String[] inventory,
			@RequestParam(value = "roomFile", required = false) MultipartFile[] roomFile,
			@RequestParam(value = "houseId",required = false) String houseId,
			@RequestParam(value = "housePhoto",required = false) String housePhoto) throws IOException {
		// 添加房型
		Houses houses = new Houses();
		Rooms rooms = new Rooms();
		for (int i = 0; i < roomFile.length; i++) {
			if(hotelName != null && !hotelName.equals("")) {
				houses.setHotelId(Integer.valueOf(hotelName));
			}
			houses.setRoomNameId(roomsType[i]);
			houses.setRoomPrice(Double.valueOf(roomsPrice[i]));
			houses.setRoomSize(roomSize[i] + "㎡");
			houses.setBedArea(bedArea[i] + "m");
			houses.setFloor(floor[i]);
			houses.setIsHavingbed(isHavingbed[i]);
			houses.setWindow(window[i]);
			houses.setBedsId(bedsType[i]);
			houses.setCeiling(ceiling[i]);
			houses.setInventory(inventory[i]);
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
			}else {
				houses.setRoomImage(housePhoto);
			}
			System.out.println("房型id="+houseId);
			if(houseId != null && !houseId.equals("") ) {
				houses.setId(Integer.valueOf(houseId));
				hotelService.updateHousesInfo(houses);
				hotelService.updateRoomPrice(Float.valueOf(roomsPrice[i]), Integer.valueOf(houseId));
			}else {
				hotelService.addRoomsInfo(houses);
				//默认添加一个房型套餐
				rooms.setHotelId(Integer.valueOf(hotelName));
				rooms.setHouseId(houses.getId());
				rooms.setRoomTitle("标准价");
				rooms.setPrice(Float.valueOf(roomsPrice[i]));
				rooms.setIsbreakfast(1);
				rooms.setCancellationPolicy(0);
				hotelService.addRoomTitle(rooms);
			}
		}
		
		return "redirect:backendProductBrand";
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
		return hotelService.getHotelById(Integer.valueOf(countryid));
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
		if (num != null) {
			dictionaries.setValueId(num + 1);
		} else {
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
		public String getCharts_1(Model model) {
			List<Orders> list=hotelService.queryDate();
			model.addAttribute("list",list);
			return "backend/ceil";
		}


	@RequestMapping("queryCharts_1")
	@ResponseBody
	public String queryCharts_1(Integer year, String type) {
		List<Map<String, Integer>> list = hotelService.queryCeil(year);
		String result = "[";
		for (int i = 0; i < list.size(); i++) {
			result += i == list.size() - 1 ? list.get(i).get(type) + "]" : list.get(i).get(type) + ",";
		}
		return result;
	}

	/**
	 * 酒店删除
	 * 
	 * @param ids
	 * @return
	 */
	@RequestMapping("deleteManyHotel")
	@ResponseBody
	public int deleteManyHotel(@RequestParam(value = "ids", required = false) String ids) {
		String id[] = ids.split(",");
		List<Integer> sid = new ArrayList<>();
		for (String integer : id) {
			sid.add(Integer.valueOf(integer));
		}
		return hotelService.deleteManyHotel(sid);
	}

	@RequestMapping("WebDatail")
	public String WebDatail(Model model, @RequestParam(value = "id") String id, @RequestParam(value = "sid") String sid,
			@RequestParam(value = "rid") String rid, @RequestParam(value = "checkInDate") String checkInDate,
			@RequestParam(value = "checkOutDate") String checkOutDate) throws ParseException {
		String[] ss = checkInDate.split("-");
		String month = ss[1];
		String day = ss[2];
		model.addAttribute("hotel", hotelService.queryId(id));
		model.addAttribute("houses", hotelService.querySid(sid));
		model.addAttribute("rooms", hotelService.queryRid(rid));
		model.addAttribute("houseNum", hotelService.orderHousesNum(checkInDate, checkOutDate,Integer.valueOf(sid)));
		model.addAttribute("checkInDate", checkInDate);
		model.addAttribute("checkOutDate", checkOutDate);
		model.addAttribute("month", month);
		model.addAttribute("day", day);
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	    long m = (sdf.parse(checkOutDate).getTime() - sdf.parse(checkInDate).getTime()+1000000)/(60*60*24*1000);;
		model.addAttribute("m", m);

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
	//订单页面
		@RequestMapping("getBackendPicture_list")
		public String getPicture_list(Model model,@RequestParam(value="creationDate", required = false) String creationDate,
				@RequestParam(value="endDate", required = false) String endDate,
				@RequestParam(value="linkUserName", required = false) String linkUserName) {
			List<Orders> listOrders=hotelService.queryOrders(creationDate, endDate, linkUserName);		
			int count=hotelService.ordersCount();
			model.addAttribute("listOrders", listOrders);
			model.addAttribute("count", count);
			model.addAttribute("creationDate", creationDate);
			model.addAttribute("endDate", endDate);
			model.addAttribute("linkUserName", linkUserName);
			return "backend/picture-list";
		}
		/**
		 * 传值进修改订单页面
		 * @param id
		 * @param model
		 * @return
		 */
		@RequestMapping("getOrders_add")
		public String getOrders_add(@RequestParam(value="id", required = false) String id,Model model) {
			Orders orders=hotelService.ByIdOrders(Integer.valueOf(id));
			Float result=orders.getPayAmount()/orders.getCount()/orders.getBookingDays();	
			model.addAttribute("result", Float.valueOf(result));
			model.addAttribute("MealList", hotelService.getMeal(Integer.valueOf(orders.getRoomId())));
			model.addAttribute("hotelName",hotelService.RoomName(orders.getHotelId()));
			model.addAttribute("orders", orders);
			return "backend/orders-add";
		}
		/**
		 * 提交修改订单
		 * @param id
		 * @param hotelId
		 * @param orderNo
		 * @param houseId
		 * @param count
		 * @param checkInDate
		 * @param checkOutDate
		 * @param linkUserName
		 * @param payAmount
		 * @param noticePhone
		 * @param model
		 * @return
		 * @throws ParseException
		 */
		@RequestMapping("getUpdateOrders")
		public String UpdateOrders(@RequestParam(value="id", required = false) String id,
				@RequestParam(value="hotelId", required = false) String hotelId,
				@RequestParam(value="orderNo", required = false) String orderNo,
				@RequestParam(value="houseId", required = false) String houseId,
				@RequestParam(value="count", required = false) String count,
				@RequestParam(value="checkInDate", required = false) String checkInDate,
				@RequestParam(value="checkOutDate", required = false) String checkOutDate,
				@RequestParam(value="linkUserName", required = false) String linkUserName,
				@RequestParam(value="payAmount", required = false) String payAmount,
				@RequestParam(value="noticePhone", required = false) String noticePhone,Model model) throws ParseException {
			 SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			 Date checkInDates =  sdf.parse(checkInDate);
			 Date checkOutDates =  sdf.parse(checkOutDate);
			 
			Orders orders=new Orders();
			orders.setId(Integer.valueOf(id));
			orders.setOrderNo(orderNo);
			orders.setHotelId(Integer.valueOf(hotelId));
			orders.setRoomId(Integer.valueOf(houseId));
			orders.setCount(Integer.valueOf(count));
			orders.setCheckInDate(checkInDates);
			orders.setCheckOutDate(checkOutDates);
			orders.setLinkUserName(linkUserName);
			orders.setPayAmount(Float.valueOf(payAmount));
			orders.setNoticePhone(noticePhone);
			int result=hotelService.UpdateOrders(orders);
			return "redirect:getBackendPicture_list";
			
		}
		
		//拦截
		@RequestMapping("return403")
		public String return403() {
			
			return "backend/403";
		}
		
		/**
		 * 房型套餐list
		 */
		@RequestMapping("productPrice")
		public String productPrice(Model model) {
			model.addAttribute("roomsList", hotelService.getRooms());
			return "backend/product-price";
		}
		
		/**
		 * 房型删除
		 * 
		 * @return
		 */
		@RequestMapping("deleteManyHouses")
		@ResponseBody
		public int deleteManyHouses(@RequestParam(value = "ids", required = false) String ids) {
			String id[] = ids.split(",");
			List<Integer> sid = new ArrayList<>();
			for (String integer : id) {
				sid.add(Integer.valueOf(integer));
			}
			
			return hotelService.deleteManyHouses(sid);
		}
}
