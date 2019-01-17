package org.itrip.controller.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.itrip.pojo.Comments;
import org.itrip.pojo.Dictionaries;
import org.itrip.pojo.Hotel;
import org.itrip.pojo.Hotelbrand;
import org.itrip.pojo.Houses;
import org.itrip.pojo.Orders;
import org.itrip.pojo.User;
import org.itrip.service.HotelService;
import org.itrip.utils.AliTrade;
import org.itrip.utils.MD5Util;
import org.itrip.utils.Page;
import org.itrip.utils.Pay;
import org.itrip.utils.RandomUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alipay.api.AlipayApiException;
import com.alipay.api.internal.util.AlipaySignature;

@Controller
public class WebHotelController {
	@Autowired
	HotelService hotelService;
	
	private Integer id;

	@RequestMapping("queryHotel")
	public String queryHotel(@RequestParam(value = "citysName", required = false) String citysName,HttpServletRequest request) throws IOException{
		System.out.println("citysName"+citysName);
		int cityId = hotelService.queryName(citysName);//城市id
		int count=hotelService.hotelCount(cityId);//总记录数
		Page page=new Page();
		page.setCurrentPageNo(1);
		page.setTotalCount(count);
		page.setTotalPageCount(count);
		
		String currentPageNo=request.getParameter("currentPageNo");
		if(currentPageNo!=null) {
			page.setCurrentPageNo(Integer.valueOf(currentPageNo));
		}
		Map<String,Object> map=new HashMap<String, Object>();
		
		map.put("countryid", cityId);
		map.put("currentPageNo", (page.getCurrentPageNo()-1)*page.getPageSize());
		map.put("pageSize", page.getPageSize());
		List<Hotel> hotelList = hotelService.query(map);

		request.setAttribute("hotelList",hotelList);//根据城市信息查询
		request.setAttribute("page", page);
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
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping("queryH")
	public String queryH(@RequestParam(value = "currentPageNo", required = false) String currentPageNo,HttpServletRequest request) {
		System.out.println("当前页"+currentPageNo);
		String[] name = request.getParameter("arr").split(",");
		String[] tname = { "price1", "price2", "rating", "brand", "country", "keyword", "rankts" };
		Map<String, Object> map = new HashMap<>();
		String namet = "";// 目的地
		String keyword = "";// 关键字
		String price1 = "";
		String price2 = "";
		String brand = "";
		String rating = "";
		String rank = "";
		for (int i = 0; i < name.length; i++) {

			map.put(tname[i], name[i]);
			if (tname[i] == "rating") {
				rating = name[i];
				request.setAttribute("rating", rating);
			}
			if (tname[i] == "brand") {
				brand = name[i];
				request.setAttribute("brand", brand);
			}
			if (tname[i] == "price2") {
				price2 = name[i];
				request.setAttribute("price2", price2);
			}
			if (tname[i] == "price1") {
				price1 = name[i];
				request.setAttribute("price1", price1);
			}
			if (tname[i] == "country") {
				namet = name[i];
				request.setAttribute("namet", namet);
			}
			if (tname[i] == "name") {
				keyword = name[i];
				request.setAttribute("keyword", keyword);
			}
			if (tname[i] == "rankts") {
				rank = name[i];
				request.setAttribute("rankts", rank);
			}
		}
		Integer cid = 0;
		cid = hotelService.queryName(namet);// 根据城市名称查询id
		if (cid != null) {
			map.put("cid", cid);
			List<Hotelbrand> llts = hotelService.queryBrand(cid);// 全部品牌信息
			request.setAttribute("llts", llts);
		}
		int count=hotelService.hotelTotalCount(map);//总记录数
		System.out.println("值="+count);
		Page page=new Page();
		page.setCurrentPageNo(1);
		page.setTotalCount(count);
		page.setTotalPageCount(count);
		
		if(!"undefined".equals(currentPageNo)) {
			System.out.println("当前页"+currentPageNo);
			page.setCurrentPageNo(Integer.valueOf(currentPageNo));
		}
		
		map.put("currentPageNo", (page.getCurrentPageNo()-1)*page.getPageSize());
		map.put("pageSize", page.getPageSize());
		List<Hotel> list = hotelService.queryMap(map);
		/*
		 * for (Hotel hotel : list) { //查出套餐最低价格
		 * hotel.setRoomsList(hotelService.queryMinPrice(hotel.getId())); }
		 */
		List<Dictionaries> lists = hotelService.queryDictionaries("酒店类型");// 查询全部房型信息
		request.setAttribute("hotelsize", list.size());
		request.setAttribute("Typelist", lists);
		request.setAttribute("hotelList", list);
		request.setAttribute("page", page);
		return "web/hotelSearch";
	}

	// 跳转hotelDatail.jsp页面
		@RequestMapping("webHotelDatail")
		public String getHotelDatail(@RequestParam(value = "hotelId", required = false) Integer hotelId, Model model,
				String specifiedDay) {
			
			Hotel hotel = hotelService.getHotelDatail(hotelId);
			List<Houses> housesList = hotelService.getHotelRoom(hotelId);
			for (Houses houses : housesList) {
				houses.setRoomsList(hotelService.getHouses(houses.getId()));
			}
			Integer hao = 0;
			Integer zhong = 0;
			Integer cha = 0;
			List<Comments>comments= hotelService.quComments(hotelId);
			for (Comments comments2 : comments) {
				if(comments2.getCommentRank()==1) {
					cha++;
				}else if(comments2.getCommentRank()==2) {
					zhong++;
				}else {
					hao++;
				}
			}
			model.addAttribute("hotel", hotel);
			model.addAttribute("housesList", housesList);
			model.addAttribute("hao", hao);
			model.addAttribute("zhong", zhong);
			model.addAttribute("cha",cha);
			model.addAttribute("comment",comments);
			model.addAttribute("count", comments.size());
			return "web/hotelDatail";
		}

	// 跳转至酒店查询主页面
	@RequestMapping("hotelIndex")
	public String getHotelIndex() {
		return "web/hotel";
	}

	/**
	 * 判断原密码是否正确
	 * 
	 * @param pwd
	 * @param request
	 * @return
	 */
	@RequestMapping("queryPwd")
	@ResponseBody
	public Integer queryPwd(@RequestParam(value = "pwd", required = false) String pwd, HttpServletRequest request) {
		User user = (User) request.getSession().getAttribute("userSession");
		pwd = MD5Util.convertMD5(pwd);
		if (user.getPwd().equals(pwd)) {
			return 1;
		}
		return 0;
	}

	/**
	 * 进入修改密码页面
	 * 
	 * @return
	 */
	@RequestMapping("webSecurity")
	public String webSecurity(Model model, HttpServletRequest request) {
		User user = (User) request.getSession().getAttribute("userSession");
		model.addAttribute("pwd", user.getPwd());
		return "web/security";
	}

	/**
	 * 修改密码
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping("webUpdPwd")
	public String updPwd(HttpServletRequest request) {
		String pwd = request.getParameter("pwd");
		User user = (User) request.getSession().getAttribute("userSession");
		user.setPwd(MD5Util.convertMD5(pwd));
		Integer num = hotelService.updPwd(user);
		return "redirect:webBerInfo";
	}

	/**
	 * 进入前端个人信息页面
	 * 
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping("webBerInfo")
	public String berInfo(Model model, HttpServletRequest request) {
		User user = (User) request.getSession().getAttribute("userSession");
		model.addAttribute("user", user);
		return "web/berInfo";
	}

	/**
	 * 进入hotelOrders页面 queryOrder
	 * 
	 * @return
	 */
	@RequestMapping("hotelOrders")
	public String WebHotelOrders(Model model, HttpServletRequest request) {
		String currentPageNo = request.getParameter("currentPageNo");
		Page page = new Page();
		//page.setCurrentPageNo(1);
		if(!"undefined".equals(currentPageNo)&&currentPageNo!=null) {
			System.out.println("当前页"+currentPageNo);
			page.setCurrentPageNo(Integer.valueOf(currentPageNo));
		}
		User user = (User) request.getSession().getAttribute("userSession");
		if(user==null) {
			request.setAttribute("error","*请先登录");
			//document.getElementById("error").innerHTML = "*请先登录";
			return "forward:webLogin";
		}
		
		Integer result = hotelService.hotelOrder(user.getId());
		System.out.println("*****************值**************="+result);
		
		page.setTotalCount(result);
		page.setTotalPageCount(result);
		Map<String,Object> map=new HashMap<String, Object>();
		map.put("userId", user.getId());
		map.put("currentPageNo", (page.getCurrentPageNo()-1)*page.getPageSize());
		map.put("pageSize", page.getPageSize());
		List<Orders> list = hotelService.queryOrder(map);
	
		
		model.addAttribute("list", list);
		model.addAttribute("page", page);
		return "web/hotelOrders";
	}


	/**
	 * 根据Id删除订单信息
	 * @param id
	 * @return
	 */
	@RequestMapping("delOrder")
	@ResponseBody
	public Integer delOrder(@RequestParam(value = "id", required = false) String id) {
		Integer num = 0;
		num = hotelService.delOrder(id);
		return num;
	}

	/**
	 * 根据Id修改订单状态
	 * @param id
	 * @return
	 */
	@RequestMapping("updOrder")
	@ResponseBody
	public Integer updOrder(@RequestParam(value = "id", required = false) String id) {
		Integer num = 0;
		num = hotelService.updOrder(id);
		return num;
	}
	
	/**
	 * 订单预订
	 */
	@RequestMapping("payment")
	public String payment(@RequestParam(value = "checkInDate", required = false) String checkInDate,
			@RequestParam(value = "checkOutDate", required = false) String checkOutDate,
			@RequestParam(value = "count", required = false) String count,
			@RequestParam(value = "linkUserName", required = false) String linkUserName,
			@RequestParam(value = "noticePhone", required = false) String noticePhone,
			@RequestParam(value = "specialRequirement", required = false) String specialRequirement,
			@RequestParam(value = "payType", required = false) String payType,
			@RequestParam(value = "hotelId", required = false) String hotelId,
			@RequestParam(value = "roomId", required = false) String roomId,
			@RequestParam(value = "roomsId", required = false) String roomsId,
			@RequestParam(value = "payAmount", required = false) String payAmount,
			@RequestParam(value = "bookingDays", required = false) String bookingDays, HttpServletRequest request) {
		//获取登陆的信息
		User user = (User)request.getSession().getAttribute("userSession");
		Orders orders = new Orders();
		orders.setUserId(user.getId());
		orders.setCheckInDate(Date.valueOf(checkInDate));
		orders.setCheckOutDate(Date.valueOf(checkOutDate));
		orders.setCount(Integer.valueOf(count));
		orders.setLinkUserName(linkUserName);
		orders.setNoticePhone(noticePhone);
		orders.setSpecialRequirement(specialRequirement);
		orders.setPayType((payType));
		orders.setHotelId(Integer.valueOf(hotelId));
		orders.setRoomId(Integer.valueOf(roomId));
		orders.setRoomsId(Integer.valueOf(roomsId));
		orders.setPayAmount(Float.valueOf(payAmount));
		orders.setBookingDays(Integer.valueOf(bookingDays));
		
		//随机生成18位大写字母+数字随机数为订单号
		String random = RandomUtil.generateString(18);
		List<Orders> orderList = hotelService.queryOrders(null,null,null);
		for (Orders itrm : orderList) {
			if(itrm.getOrderNo().equals(random)){
				random = RandomUtil.generateString(18);
			}else {
				orders.setOrderNo(random);
			}
		}
		orders.setOrderStatus("0");
		orders.setPayStatus("0");
		hotelService.addOrdres(orders);
			return "redirect:returnOrder?orderId="+orders.getId()+"&payType="+payType;
	}
	
	/**
	 * 转到支付页面
	 */
	@RequestMapping("returnOrder")
	public String retrunOrder(@ModelAttribute("orderId") String orderId,@ModelAttribute("payType") String payType,Model model) {
		model.addAttribute("ordersInfo", hotelService.getOrdersById(Integer.valueOf(orderId)));
		if(payType.equals("1")) {
			return "web/payment";
		}else {
			return "web/bookSucees";
		}
	}
	
	/**
	 * 查看订单
	 */
	@RequestMapping("lookOrder")
	public String lookOrder(@RequestParam(value="orderId",required=false) String orderId,Model model) {
		model.addAttribute("ordersInfo", hotelService.getOrdersById(Integer.valueOf(orderId)));
		return "web/lookOrder";
	}
	
	/**
	 * 支付
	 * @throws IOException 
	 */
	@RequestMapping("pay")
	public void pay(@RequestParam(value="orderNo",required=false) String orderNo,
					@RequestParam(value="hotelName",required=false) String hotelName,
					@RequestParam(value="valueName",required=false) String valueName,
					@RequestParam(value="checkInDate",required=false) String checkInDate,
					@RequestParam(value="checkInDate",required=false) String checkOutDate,
					@RequestParam(value="payAmount",required=false) String payAmount,
					@RequestParam(value="orderId",required=false) String orderId,
					HttpServletResponse response) throws IOException {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		id = Integer.valueOf(orderId);
		Pay pay = new Pay();
		//业务参数
		pay.setOut_trade_no(orderNo);
		pay.setTotal_amount(Double.valueOf(payAmount));
		pay.setSubject(hotelName);
		pay.setBody(valueName+"\n入住时间："+checkInDate+"\n退房时间："+checkOutDate);
		pay.setTimeout_express("3m");
		pay.setPassback_params(orderId);
		out.print(AliTrade.pay(pay));
	}
	
	/**
	 * 同步回调方法
	 * @param params 请求参数
	 * @return 根据支付结果返回不同的页面
	 */
	@RequestMapping("returnUrl")
	public String returnUrl(@RequestParam Map<String,String> params)
			throws AlipayApiException, UnsupportedEncodingException{
		System.out.println("in returnUrl");
		//调用SDK验证签名
		boolean signVerified = AlipaySignature.rsaCheckV1(params, 
					AliTrade.ALIPAY_PUBLIC_KEY, AliTrade.CHARSET, AliTrade.SIGN_TYPE); 
		//——请在这里编写您的程序（以下代码仅作参考）——
		if(signVerified) {
			//此处写支付成功的业务代码
			//返回订单详情页面
			return "redirect:lookOrder?orderId="+id;
		}else {
			System.out.println("支付, 验签失败...");
		}
		//返回fail页面
		return "fail";
	}
	
	/**
	 *  异步回调方法
	 * @param params 请求参数
	 * @return 根据支付宝文档要求直接响应“success”或“fail”字符串到页面
	 */
	@RequestMapping("notifyUrl")
	@ResponseBody
	public String notifyUrl(@RequestParam Map<String,String> params) 
			throws UnsupportedEncodingException, AlipayApiException {
		System.out.println("in notifyUrl");
		//调用SDK验证签名
		boolean signVerified = AlipaySignature.rsaCheckV1(params, 
				AliTrade.ALIPAY_PUBLIC_KEY, AliTrade.CHARSET, AliTrade.SIGN_TYPE); 
		/* 实际验证过程建议商户务必添加以下校验：
		1、需要验证该通知数据中的out_trade_no是否为商户系统中创建的订单号，
		2、判断total_amount是否确实为该订单的实际金额（即商户订单创建时的金额），
		3、校验通知中的seller_id（或者seller_email) 是否为out_trade_no这笔单据的对应的操作方
			（有的时候，一个商户可能有多个seller_id/seller_email）
		4、验证app_id是否为该商户本身。
		*/
		//订单状态
		String trade_status = params.get("trade_status");
		if(signVerified) {//验证成功
			if(trade_status.equals("TRADE_FINISHED")){//交易结束
				//判断该笔订单是否在商户网站中已经做过处理
				//如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
				//如果有做过处理，不执行商户的业务程序
					
				//注意：
				//退款日期超过可退款期限后（如三个月可退款），支付宝系统发送该交易状态通知
			}else if (trade_status.equals("TRADE_SUCCESS")){ //支付成功
				//判断该笔订单是否在商户网站中已经做过处理
				//如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
				//如果有做过处理，不执行商户的业务程序
				//注意：在此处写付款成功业务代码，如修改数据库中该订单的状态等
			}
			return "redirect:lookOrder?orderId="+id;
		}else {//验证失败
			return "fail";
		}
	}
}
